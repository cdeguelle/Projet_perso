import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'
import { SwitchButton } from '../Switch'
import * as themeActions from '../../features/theme'
import { useDispatch } from 'react-redux'

const NavContainer = styled.nav`
    background-color: ${({ theme }) => (theme === 'light' ? '#F9F9FC' : '#161B22')};
    width: 100%;
    position: fixed;
    z-index: 10;
    padding: 20px 0;
`

const MenuItems = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 30px;
    list-style: none;
    text-align: center;
`

const ListItems = styled.li`
    display: inline-block;
`

const HeaderLink = styled.a`
    display: block;
    padding: 15px;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#aaa')};
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;
    position:relative;
    z-index: 1;
    transition: all 0.5s;
    &:after {
        transition: all 0.5s;
    }
    &:after {
        transition: all 0.5s;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 1px;
        content: '.';
        color: transparent;
        background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(70deg, #008080, #ff5100)' : 'linear-gradient(70deg, blue, pink)')};
        visibility: none;
        opacity: 0;
        z-index: -1;
        border-radius: 5px;
    }
    &:hover {
        color: white;
    }
    &:hover:after {
        opacity: 1;
        visibility: visible;
        height: 100%;
    }
`

const StyledLink = styled(Link)`
    display: block;
    padding: 15px;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#aaa')};
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;
    position:relative;
    z-index: 1;
    transition: all 0.5s;
    &:after {
        transition: all 0.5s;
    }
    &:after {
        transition: all 0.5s;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 1px;
        content: '.';
        color: transparent;
        background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(70deg, #008080, #ff5100)' : 'linear-gradient(70deg, blue, pink)')};
        visibility: none;
        opacity: 0;
        z-index: -1;
        border-radius: 5px;
    }
    &:hover {
        color: white;
    }
    &:hover:after {
        opacity: 1;
        visibility: visible;
        height: 100%;
    }
`

function Header() {
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()

    return (
        <NavContainer theme={theme}>
            <MenuItems>
                <ListItems><StyledLink to='/' theme={theme}>Accueil</StyledLink></ListItems>
                <ListItems><HeaderLink theme={theme} href="mailto:clement.deguelle@hotmail.com">Me contacter</HeaderLink></ListItems>
                <ListItems><SwitchButton onClick={() => dispatch(themeActions.toggle())} /></ListItems>
            </MenuItems>
        </NavContainer>
    )
}

export default Header