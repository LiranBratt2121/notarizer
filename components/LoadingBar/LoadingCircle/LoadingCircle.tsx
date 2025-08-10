import React from 'react'
import { OrbitProgress } from 'react-loading-indicators';
import { LoadingProps } from '../LoadingCircle.types';
import { LoadingContainer } from '../Loading.styles';

const LoadingCircle = ({
    isDense = true,
    color = "#001cff",
    size = "medium",
    text = "",
    textColor = "" }: LoadingProps) => {

    return (
        <LoadingContainer>
            <OrbitProgress
                dense={isDense}
                color={color}
                size={size}
                text={text}
                textColor={textColor} />
        </LoadingContainer>
    )
}

export default LoadingCircle;
