import React, {useContext} from 'react'
import { Nav, NavContainer, NavLogo, NavIcon,NavMenu, NavItem, NavLinks } from "./Navbar.elements"
import {Context} from "../../utils/Context"

const Navbar = () => {
  const Logo = useContext(Context)

  return (
    <Nav>
        <NavContainer>
            <NavLogo to="/" >
                <NavIcon src={Logo} />
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