import React from 'react'
import { Nav, NavContainer, NavLogo, NavIcon,NavMenu, NavItem, NavLinks } from "./Navbar.elements"
import LiveStreamIcon from "../../images/livestream.png"

const Navbar = () => {
  return (
    <Nav>
        <NavContainer>
            <NavLogo to="/" >
                <NavIcon src={LiveStreamIcon} />
                LIVESTREAM
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks to="/">
                  Home
                </NavLinks>
              </NavItem> 
               <NavItem>
                <NavLinks to="/stream">
                  Stream
                </NavLinks>
              </NavItem>
            </NavMenu>
        </NavContainer>
     </Nav>
  )
}

export default Navbar