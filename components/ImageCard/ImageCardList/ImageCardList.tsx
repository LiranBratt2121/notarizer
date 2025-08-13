"use client";

import React, { useEffect, useState } from 'react'
import { ImageCardListContainer } from './ImageCardList.styles';
import ImageCard, { ImageCardProps } from '../ImageCard';
import Image from 'next/image';
import { useGoogleDrive } from '@/hooks/useGoogleDrive';
import { ApartmentImageData } from '@/types/apartment';
import LoadingThreeDot from '@/components/LoadingBar/LoadingThreeDot/LoadingThreeDot';

interface ImageCardListProps {
    images: ApartmentImageData[];
}

const getId = (url: string) => {
    const urlObj = new URL(url);
    const id = urlObj.searchParams.get("id");
    return id ?? "";
}

const ImageCardList = ({ images }: ImageCardListProps) => {
    const [imagesBase64, setImages] = useState<ApartmentImageData[]>([]);
    const { fetchDriveImageBase64 } = useGoogleDrive();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            const data = await Promise.all(images.map(async ({ link, name }) => {
                const id = getId(link);
                const base64 = await fetchDriveImageBase64(id);

                return {
                    link: base64,
                    name
                }
            }));

            setImages(data);
        }

        setLoading(true);
        fetchImages().then(() =>
            setLoading(false)
        );
    }, [])


    return (
        <ImageCardListContainer>
            {
                imagesBase64.map(({ link, name }, idx) => <ImageCard link={link} name={name} width={300} height={300} key={idx} />)
            }

            {
                loading && <LoadingThreeDot />
            }
        </ImageCardListContainer>
    )
}

export default ImageCardList;
