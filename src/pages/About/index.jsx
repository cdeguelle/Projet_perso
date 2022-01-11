import styled from 'styled-components'
import { Subtitle } from '../../utils/style/Atoms'
import TitleUnderline from './../../components/TitleUnderline'

const AboutWrapper = styled.div`
    background-color: #161B22;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
`

const Text = styled.p`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 16px;
    color: white;
    width: 500px;
    text-align: justify;
    margin-top: 50px;
`

function About() {
    return (
        <AboutWrapper id='about'>
            <Subtitle>A propos de moi</Subtitle>
            <TitleUnderline />
            <Text>Développeur front-end junior certifié après un an de formation chez OpenClassrooms. Lors de cette formation, j’ai eu dix projets à réaliser allant de l’intégration d’une maquette à la création d’un algorithme de recherche et en finissant par me spécialiser dans le framework javascript React.js. Tout ceci vous est présenté ici même, bonne visite.</Text>
        </AboutWrapper>
    )
}

export default About