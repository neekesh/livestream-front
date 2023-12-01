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
