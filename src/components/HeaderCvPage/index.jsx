import styled from 'styled-components'
import { Link } from "react-router-dom"
import './../HeaderHomePage/index.css'

const NavContainer = styled.nav`
    background-color: #161B22;
    width: 100%;
    position: fixed;
    z-index: 10;
`

const MenuItems = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 30px;
`

function Header() {

    return (
        <NavContainer className="nav">
            <MenuItems>
                <li><Link to='/'>Home</Link></li>
                <li><a href="mailto:clement.deguelle@hotmail.com">Contact Me</a></li>
            </MenuItems>
        </NavContainer>
    )
}

export default Header