import React from 'react'
import { ImageCardContainer, ImageStyled } from './ImageCard.styles';
import { ApartmentImageData } from '@/types/apartment';
import Header from '../Text/Header/Header';

export interface ImageCardProps extends ApartmentImageData {
    width: number;
    height: number;
}

const ImageCard = ({ link, name, width, height }: ImageCardProps) => {
    return (
        <ImageCardContainer>
            <Header text={name} />
            <ImageStyled src={link} alt={name} width={width} height={height} />
        </ImageCardContainer>
    )
}

export default ImageCard;
