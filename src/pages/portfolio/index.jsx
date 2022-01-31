import reserviaImg from './../../assets/Reservia.png'
import ohmyfoodImg from './../../assets/Ohmyfood.png'
import gameonImg from './../../assets/GameOn.png'
import fisheyeImg from './../../assets/FishEye.png'
import lespetisplatsImg from './../../assets/LesPetitsPlats.png'
import billedImg from './../../assets/Billed.png'
import kasaImg from './../../assets/Kasa.png'
import sportseeImg from './../../assets/SportSee.png'
import argentbankImg from './../../assets/ArgentBank.png'
import hrnetImg from './../../assets/WealthHealth.jpg'
import { Subtitle } from '../../utils/style/Atoms'
import TitleUnderline from './../../components/TitleUnderline'
import styled from 'styled-components'
import Card from '../../components/Card'
import './index.css'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../utils/selectors'

const PortfolioWrapper = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#F9F9FC' : '#161B22')};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    padding-top: ${({ isMobile }) => (isMobile ? '20px' : '10vh')};
`

const CardContainer = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#F9F9FC' : '#161B22')};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: ${({ isMobile }) => (isMobile ? '20px' : '80px 20px')};
`

const CardBackDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Text = styled.p`
    color: ${({ theme }) => (theme === 'light' ? '#1d1d1f' : 'white')};
    margin-top: 30px;
    font-size: 16px;
    margin: ${({ isMobile }) => (isMobile ? '30px' : '30px 0 0 0')};
`

const Button = styled.a`
        width: ${({ isMobile }) => (isMobile ? '80vw' : '380px')};
        height: 86px;
        font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
        font-family: 'Miriam Libre', sans-serif;
        background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
        border: 0;
        color: #fff;
        letter-spacing: 3px;
        line-height: 88px;
        box-shadow: 6px 0px 0px #00e6f6;
        outline: transparent;
        position: relative;
        text-decoration: none !important;
`

function Portfolio() {
    const theme = useSelector(selectTheme)
    const isMobile = window.matchMedia('(max-width: 426px)').matches

    return (
        <PortfolioWrapper id='portfolio' theme={theme} isMobile={isMobile}>
            <Subtitle theme={theme} isMobile={isMobile}>Mon travail récent</Subtitle>
            <TitleUnderline />
            <Text theme={theme} isMobile={isMobile}>Voici quelques projets sur lesquels j'ai travaillé récemment. Vous voulez en voir plus ?</Text>
            <CardContainer theme={theme} isMobile={isMobile}>
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_2_07122020'
                    picture={reserviaImg}
                    bg='#1D76FC'
                    description={
                        <CardBackDescription>
                            <span>Implémenter une interface responsive</span>
                            <span>Intégrer du contenu conformément à une maquette</span>
                        </CardBackDescription>
                    }
                />
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_3_04012021'
                    picture={ohmyfoodImg}
                    bg='linear-gradient(#FF79DA, #9356DC)'
                    description={
                        <CardBackDescription>
                            <span>Assurer la cohérence graphique d'un site web</span>
                            <span>Mettre en œuvre des effets CSS graphiques avancés</span>
                            <span>Mettre en place une structure de navigation pour un site web</span>
                        </CardBackDescription>
                    }
                />
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_4_25012021'
                    picture={gameonImg}
                    bg='#FE445A'
                    description={
                        <CardBackDescription>
                            <span>Programmer en Javascript</span>
                        </CardBackDescription>
                    }
                />
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_6_24022021'
                    picture={fisheyeImg}
                    bg='#B56262'
                    description={
                        <CardBackDescription>
                            <span>Gérer les évènements d'un site avec JavaScript</span>
                            <span>Ecrire du code JavaScript maintenable</span>
                            <span>Assurer l'accessibilité d'un site web</span>
                        </CardBackDescription>
                    }
                />
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_7_31032021'
                    picture={lespetisplatsImg}
                    bg='linear-gradient(#68D9A4, #9356DC, #ED6454)'
                    description={
                        <CardBackDescription>
                            <span>Analyser un problème informatique</span>
                            <span>Développer un algorithme pour résoudre un problème</span>
                        </CardBackDescription>
                    }
                />
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_9_04052021'
                    picture={billedImg}
                    bg='linear-gradient(#105AE5, #fff)'
                    description={
                        <CardBackDescription>
                            <span>Ecrire des tests unitaires avec JavaScript</span>
                            <span>Débugger une application web avec le Chrome Debugger</span>
                            <span>Ecrire des tests d'intégration avec JavaScript</span>
                        </CardBackDescription>
                    }
                />
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_11_15072021/tree/main/kasa-app'
                    picture={kasaImg}
                    bg='linear-gradient(#FF6060, #fff)'
                    description={
                        <CardBackDescription>
                            <span>Développer les routes d'une application web avec React Router</span>
                            <span>Initialiser une application web avec un framework</span>
                            <span>Créer des composants avec React</span>
                        </CardBackDescription>
                    }
                />
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_12_27082021'
                    picture={sportseeImg}
                    bg='linear-gradient(#FF0101, #020203)'
                    description={
                        <CardBackDescription>
                            <span>Assurer la qualité des données d'une application</span>
                            <span>Interagir avec un service Web</span>
                            <span>Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript</span>
                            <span>Produire de la documentation technique pour une application</span>
                        </CardBackDescription>
                    }
                />
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_13_01102021'
                    picture={argentbankImg}
                    bg='#00BC77'
                    description={
                        <CardBackDescription>
                            <span>Implémenter un gestionnaire d'état dans une application React</span>
                            <span>Intéragir avec une API</span>
                            <span>Modéliser une API</span>
                            <span>S'authentifier à une API</span>
                        </CardBackDescription>
                    }
                />
                <Card
                    link='https://github.com/cdeguelle/ClementDeguelle_14_03112021'
                    picture={hrnetImg}
                    bg='#657D11'
                    description={
                        <CardBackDescription>
                            <span>Refondre une application pour réduire la dette technique</span>
                            <span>Analyser la performance d'une application web</span>
                            <span>Déployer une application front-end</span>
                            <span>Programmer en JavaScript avec la programmation fonctionnelle</span>
                        </CardBackDescription>
                    }
                />
            </CardContainer>
            <Button className='button' href='https://github.com/cdeguelle' isMobile={isMobile} target="_blank" rel="noreferrer">Voir plus sur GitHub</Button>
        </PortfolioWrapper>
    )
}

export default Portfolio