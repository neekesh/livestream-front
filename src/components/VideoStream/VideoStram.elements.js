import styled from "styled-components"
import { Container } from "../../globalStyles"

export const StreamContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${Container}
`

export const VideoContainer = styled.video`
    width: auto;
    height: 500px;
`

export const LiveButton = styled.button`
    background-color: grey;
    font-size: 1rem;
    width: auto;
    padding: 0.5rem;
    color: #F0F8FF;
    border-radius: 0.5rem;
    border: none;
`
