import styled, {createGlobalStyle} from "styled-components"

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

export default GlobalStyle