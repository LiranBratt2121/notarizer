"use client";

import React, { useCallback, useMemo } from 'react'
import { useParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import LoginNotice from '@/components/LoginNotice/LoginNotice';
import { useUserApartments } from '@/hooks/useUserApartments';
import Notice from '@/components/Notice/Notice';
import { AddApartmentContainer } from '../add/add.styles';
import ImageCardList from '@/components/ImageCard/components/ImageCardList/ImageCardList';
import Header from '@/components/Text/Header/Header';

const ImageGallery = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const { apartments } = useUserApartments();

    const isUsersApartment = useCallback(
        () => apartments.some((apartment) => apartment.id === id),
        [apartments, id]
    );

    const currentApartment = useMemo(() => apartments.find(apartment => apartment.id === id), [id, apartments]);

    if (!user) {
        return (
            <LoginNotice
                headerMessage="Please log in to access your capture dashboard."
                buttonMessage="Log In"
            />
        )
    }

    if (!isUsersApartment()) {
        return (
            <Notice
                headerMessage="You do not have access to this apartment."
                buttonMessage="Go Back"
                href={'/apartments/'}
            />
        )
    }

    if (!currentApartment) {
        return (
            <Notice
                headerMessage="Apartment not found."
                buttonMessage="Go Back"
                href={'apartments/'}
            />
        )
    }

    return (
        <AddApartmentContainer>
            <Header text={`${currentApartment.street} Images`} />
            <ImageCardList images={currentApartment.images} />
        </AddApartmentContainer>
    )
}

export default ImageGallery;
