import styled from "@emotion/styled";
import Image from "next/image";

export const ImageStyled = styled(Image)`
    border-radius: 10px 10px 0 0;
    border: 1px solid black;
    border-bottom: 0;
    flex: 1 1 21%;
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`


