"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, doc, onSnapshot, setDoc, updateDoc, arrayUnion, query, orderBy } from "firebase/firestore";
import { Apartment, FirebaseApartment } from "@/types/apartment";
import { useAuth } from "./useAuth";

export type ApartmentImageData = { link: string; name: string };

export function useUserApartments() {
    const [apartments, setApartments] = useState<(FirebaseApartment)[]>([]);

    const [isFetchingApartments, setIsFetchingApartments] = useState(true);
    const [isSavingApartment, setIsSavingApartment] = useState(false);

    const [fetchError, setFetchError] = useState<Error | null>(null);
    const [saveError, setSaveError] = useState<Error | null>(null);

    const { user } = useAuth();
    const userId = user?.uid;

    useEffect(() => {
        if (!userId) {
            setApartments([]);
            setIsFetchingApartments(false);
            return;
        }

        const q = query(collection(db, "users", userId, "apartments"), orderBy("street", "asc"));

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Apartment),
                }));
                setApartments(data);
                setIsFetchingApartments(false);
            },
            (err) => {
                setFetchError(err);
                setIsFetchingApartments(false);
            }
        );

        return () => unsubscribe();
    }, [userId]);

    async function addApartment(apartment: Apartment) {
        if (!userId) {
            throw new Error("User ID is required");
        }

        setIsSavingApartment(true);
        setSaveError(null);

        try {
            const newDocRef = doc(collection(db, "users", userId, "apartments"));
            await setDoc(newDocRef, apartment, { merge: true });
            return newDocRef.id;
        } catch (err) {
            setSaveError(err as Error);
            throw err;
        } finally {
            setIsSavingApartment(false);
        }
    }

    async function addImageToApartment(apartmentId: string, image: ApartmentImageData) {
        if (!userId) {
            throw new Error("User ID is required");
        }

        setIsSavingApartment(true);
        setSaveError(null);

        try {
            const apartmentRef = doc(db, "users", userId, "apartments", apartmentId);
            await updateDoc(apartmentRef, {
                images: arrayUnion(image),
            });
        } catch (err) {
            setSaveError(err as Error);
            throw err;
        } finally {
            setIsSavingApartment(false);
        }
    }

    return {
        apartments,
        isFetchingApartments,
        isSavingApartment,
        fetchError,
        saveError,
        addApartment,
        addImageToApartment,
    };
}
