import { styled } from "styled-components";
import { Container } from "../../globalStyles";

export const Main = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:  center;
    min-height: 80vh;
    min-width:  100vw;
    line-height: 2rem;
    ${Container}
`

export const LiveStreamImage = styled.img`
    width: 300px;
    height: 300px;
`