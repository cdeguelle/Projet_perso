import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0 1.5rem;
    background-color: ${({ theme }) => (theme === 'light' ? '#f3f3f3' : '#0D1117')};
    height: 20vh;
`

const FooterBorder = styled.div`
    width: 80%;
    border-top: 1px solid #ccc;
    align-self: center;
    margin-bottom: 25px;
`

const FooterText = styled.p`
    margin: ${({ isMobile }) => (isMobile ? '10px' : '0')};
    padding: 0;
    color: #838080;
    font-size: 16px;
`

function Footer() {
    const theme = useSelector(selectTheme)
    const isMobile = window.matchMedia('(max-width: 426px)').matches

    return (
        <FooterContainer theme={theme}>
            <FooterBorder />
            <FooterText isMobile={isMobile}>Portfolio 2021 créé par Clément Deguelle</FooterText>
        </FooterContainer>
    )
}

export default Footer