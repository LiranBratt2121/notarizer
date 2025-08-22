import React from 'react'
import { ApartmentImageData } from '@/types/apartment';
import InfoCard from './components/InfoCard/InfoCard';
import { ImageWrapper, ImageStyled } from './ImageCard.styles';

export interface ImageCardProps extends ApartmentImageData {
    width: number;
    height: number;
}

const ImageCard = ({ link, name, width, height, timestamp}: ImageCardProps) => {
    return (
        <ImageWrapper>
            <ImageStyled src={link} alt={name} width={width} height={height} />
            <InfoCard title={name} date={timestamp?.toDate()}/>
        </ImageWrapper>
    )
}

export default ImageCard;
