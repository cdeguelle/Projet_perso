import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'
import { Subtitle } from '../../utils/style/Atoms'
import TitleUnderline from './../../components/TitleUnderline'

const AboutWrapper = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#F9F9FC' : '#161B22')};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    padding-top: 10vh;
    scroll-margin-top: -10px;
`

const Text = styled.p`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => (theme === 'light' ? '#1d1d1f' : 'white')};
    width: ${({ isMobile }) => (isMobile ? '' : '500px')};
    text-align: justify;
    margin: ${({ isMobile }) => (isMobile ? '20px' : '50px 0 0 0')};
`

function About() {
    const theme = useSelector(selectTheme)
    const isMobile = window.matchMedia('(max-width: 426px)').matches

    return (
        <AboutWrapper id='about' theme={theme}>
            <Subtitle theme={theme} isMobile={isMobile}>A propos de moi</Subtitle>
            <TitleUnderline theme={theme} />
            <Text theme={theme} isMobile={isMobile}>Développeur front-end junior certifié après un an de formation chez OpenClassrooms. Lors de cette formation, j’ai eu dix projets à réaliser allant de l’intégration d’une maquette à la création d’un algorithme de recherche et en finissant par me spécialiser dans le framework javascript React.js. Tout ceci vous est présenté ici même, bonne visite.</Text>
        </AboutWrapper>
    )
}

export default About