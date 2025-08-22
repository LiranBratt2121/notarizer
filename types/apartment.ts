import { Timestamp } from "firebase/firestore";

export interface Apartment {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    images: ApartmentImageData[];
}

export type ApartmentImageData = { link: string, name: string, width?: number, height?: number, timestamp?: Timestamp }

export interface FirebaseApartment extends Apartment { id: string };