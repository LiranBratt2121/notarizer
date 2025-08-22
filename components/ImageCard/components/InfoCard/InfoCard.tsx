import React from 'react'
import { InfoWrapper } from './InfoCard.styled';

interface InfoCardProps {
    title: string;
    date?: Date;
}

const InfoCard = ({ title, date }: InfoCardProps) => {
    return (
        <InfoWrapper>
            <h2>{title}</h2>
            <p>{date?.toLocaleString() ?? "No date available"}</p>
        </InfoWrapper>
    )
}

export default InfoCard;
