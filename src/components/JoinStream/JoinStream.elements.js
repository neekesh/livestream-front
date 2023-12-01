import styled from "styled-components"
import { Container } from "../../globalStyles"


export const JoinStreamContainer = styled(Container)`
    margin-top: 2rem;
    display: flex;
    /* flex-direction: row-reverse; */
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    ${Container}
    `

export const VideoContainer = styled.video`
    width: auto;
    height: 500px;
    flex: 2;
`

export const ChatContainer = styled.div`
    height: 500px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: flex-end;
    background-color: grey;
`

export const MessageBox = styled.textarea`
    width: 100%;
    background-color: grey !important;
    color:black;
    padding: 0.2rem;
    padding-left: 1rem;
    font-size: 1rem;
    border-top: 2px solid;
    &::placeholder {
        color: #ccc;
    }
    &:focus {
    transition: border-color 0.3s ease-in-out;
    outline: 0;
    background-color: grey !important;
  }

`

export const Message = styled.div`
    width: 100%;
    background-color: grey;
    border-top: 1px solid;
    padding-left:  1rem;
    padding-top:  0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

`
