import styled, {createGlobalStyle} from "styled-components"
import { VscDebugStart, VscDebugPause } from "react-icons/vsc";
import {  Link } from "react-router-dom"


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
        background-color: #cccccc;
    }
`

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;
`


export const PlayButton = styled(VscDebugStart)`
background-color: grey;
`

export const PauseButton = styled(VscDebugPause)`
background-color: grey;
`

export const ButtonContainer = styled.div`  
    margin-top: 20px;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 10px;
    gap: 20px;
    margin-bottom: 20px;
`

export const LiveStreamIcon = styled.img`
    width: 20px;
    height: 20px;
    background: none;
`

export const LiveButton = styled.button`
    background-color: grey;
    font-size: 1rem;
    width: auto;
    padding: 0.5rem;
    color: #F0F8FF;
    border-radius: 0.5rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

export const Links = styled(Link)`
    text-decoration: none;
`

export default GlobalStyle