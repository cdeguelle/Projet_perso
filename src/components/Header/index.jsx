import styled from 'styled-components'
import './index.css'

const NavContainer = styled.nav`
    background-color: #161B22;
    width: 100%;
    position: fixed;
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
                <li><a href="#welcome">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#portfolio">Skills</a></li>
                <li><a href="#resume">Portfolio</a></li>
                <li><a href="#contactMe">Contact Me</a></li>
            </MenuItems>
        </NavContainer>
    )
}

export default Header