import React from 'react'
import { ThreeDot } from 'react-loading-indicators'
import { LoadingProps } from '../LoadingCircle.types'
import { LoadingContainer } from '../Loading.styles'

const LoadingThreeDot = ({
    color = "#001cff",
    size = "medium",
    text = "",
    textColor = ""
}: LoadingProps) => {
    return (
        <LoadingContainer>
            <ThreeDot
                color={color}
                size={size}
                text={text}
                textColor={textColor}
            />
        </LoadingContainer>
    )
}

export default LoadingThreeDot;
