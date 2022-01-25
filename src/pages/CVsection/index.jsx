import { Subtitle } from '../../utils/style/Atoms'
import TitleUnderline from '../../components/TitleUnderline'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'

const CvWrapper = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#f3f3f3' : '#0D1117')};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`

const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 120px;
    width: ${({ isMobile }) => (isMobile ? '50%' : '30%')};
`

const Icon = styled.i`
    font-size: ${({ isMobile }) => (isMobile ? '50px' : '100px')};
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`

function CvSection() {
    const theme = useSelector(selectTheme)
    const isMobile = window.matchMedia('(max-width: 426px)').matches

    return (
        <CvWrapper id='cv' theme={theme}>
            <Subtitle theme={theme} isMobile={isMobile}>Cv et liens sociaux</Subtitle>
            <TitleUnderline />
            <LinksWrapper isMobile={isMobile}>
                <Link to='/cv'>
                    <Icon isMobile={isMobile} className="fas fa-graduation-cap" theme={theme}></Icon>
                </Link>
                <a href='https://www.linkedin.com/in/cl%C3%A9ment-deguelle-2a061788/' title='Consulter le profil linkedin de Clément Deguelle' target="_blank" rel="noreferrer">
                    <Icon isMobile={isMobile} className="fab fa-linkedin" theme={theme}></Icon>
                </a>
                <a href='https://github.com/cdeguelle' title='Consulter le profil github de Clément Deguelle' target="_blank" rel="noreferrer">
                    <Icon isMobile={isMobile} className="fab fa-github" theme={theme}></Icon>
                </a>
            </LinksWrapper>
        </CvWrapper>
    )
}

export default CvSection