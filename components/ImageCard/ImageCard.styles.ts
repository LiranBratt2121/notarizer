import styled from "@emotion/styled";
import Image from "next/image";

export const ImageStyled = styled(Image)`
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(255, 149, 0, 0.97);
    height: auto;
    width: auto;

    flex: 1 1;
`

export const ImageCardContainer = styled.div`
    display: flex;
    flex-direction: column;
`