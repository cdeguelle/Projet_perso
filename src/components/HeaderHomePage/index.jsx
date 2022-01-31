import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'
import { SwitchButton } from '../Switch'
import * as themeActions from '../../features/theme'
import MenuListComposition from '../MenuList'
import Scrollspy from 'react-scrollspy'
import './index.css'


const NavContainer = styled.nav`
    background-color: ${({ theme }) => (theme === 'light' ? '#F9F9FC' : '#161B22')};
    width: 100%;
    position: fixed;
    z-index: 10;
    padding: 20px 0;
    height: 10vh;
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
    position: relative;
    z-index: 1;
    transition: all 0.5s;
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
    const isMobile = window.matchMedia('(max-width: 426px)').matches
    const menuItems = [
        {href: '#welcome', text: 'Home'},
        {href: '#about', text: 'About Me'},
        {href: '#portfolio', text: 'Home'},
        {href: '#cv', text: 'CV'},
        {href: 'mailto:clement.deguelle@hotmail.com', text: 'Contact Me'}
    ]

    return (
        <NavContainer theme={theme}>
            {isMobile ? (
                <Scrollspy 
                    items={ ['welcome', 'about', 'portfolio', 'cv'] } 
                    style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', textAlign: 'center' }}
                    currentClassName={theme === 'light' ? 'active-light' : 'active-dark'}
                >
                    <ListItems>
                        <MenuListComposition 
                            menuItems={menuItems}
                        />
                    </ListItems>
                    <ListItems style={{ marginTop: '8px' }}><SwitchButton onClick={() => dispatch(themeActions.toggle())} /></ListItems>
                </Scrollspy>                
            ) : (
                <Scrollspy 
                    items={ ['welcome', 'about', 'portfolio', 'cv'] } 
                    style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', textAlign: 'center' }}
                    currentClassName={theme === 'light' ? 'active-light' : 'active-dark'}
                >
                    <ListItems><HeaderLink theme={theme} href="#welcome">Acceuil</HeaderLink></ListItems>
                    <ListItems><HeaderLink theme={theme} href="#about">A propos</HeaderLink></ListItems>
                    <ListItems><HeaderLink theme={theme} href="#portfolio">Portfolio</HeaderLink></ListItems>
                    <ListItems><HeaderLink theme={theme} href="#cv">CV</HeaderLink></ListItems>
                    <ListItems><HeaderLink theme={theme} href="mailto:clement.deguelle@hotmail.com">Me contacter</HeaderLink></ListItems>
                    <ListItems style={{ marginTop: '8px' }}><SwitchButton onClick={() => dispatch(themeActions.toggle())} /></ListItems>
                </Scrollspy>
            )}
        </NavContainer>
    )
}

export default Header