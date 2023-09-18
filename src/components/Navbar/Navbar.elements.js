import styled from "styled-components"
import { Container } from "../../globalStyles"
import { NavLink, Link } from "react-router-dom"


export const Nav = styled.nav`
    background-color: transparent !important;
    height: 80px;
    position: sticky;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    font-size:  1.2rem;
    top: 0;
    z-index: 999;
`

export const NavContainer = styled(Container)`
 display: flex;
 justify-content: space-between;
 height: 80px;
 background-color: grey;

`

export const NavLogo = styled(Link)`
color: white;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
justify-content: center;
align-items:  center;
background-color: grey !important;
`

export const NavIcon = styled.img`
    margin-right: 0.5rem;
    width: 80px;
    height: 80px;
    background-color: grey;
`

export const NavMenu = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;
    text-align: center;
    background-color: grey;
`
export const NavItem = styled.li`
    padding: 1rem;
    background-color: grey;
    .active {
        /* color: black; */
        font-weight: 900;
    }
    /* color: white; */
`
export const NavLinks = styled(NavLink)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items:  center;
    color: white;
    font-weight: 100;
    background-color: grey;
`
