import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'

const SkillsWrapper = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#f3f3f3' : '#0D1117')};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
`

const Card = styled.div`
    border-radius: 25px;
    background: ${({ theme }) => (theme === 'light' ? '#161B22' : '#F9F9FC')};
    padding: ${({ isMobile }) => (isMobile ? '0' : '20px')};
    margin: ${({ isMobile }) => (isMobile ? '-175px 20px 0 20px' : '-200px 20px 0 20px')};
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 20px;
`

const CardTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ isMobile }) => (isMobile ? '25px' : '40px')};
    color: white;
    margin-bottom: 0;
    background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(70deg, #008080, #ff5100)' : 'linear-gradient(70deg, blue, pink)')}; 
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text; 
    text-transform: uppercase;
`

const Description = styled.p`
    margin: 20px;
    font-size: 16px;
    color: ${({ theme }) => (theme === 'light' ? 'white' : '#1d1d1f')};
`

const CardSubTitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(70deg, #008080, #ff5100)' : 'linear-gradient(70deg, blue, pink)')};
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    text-transform: uppercase;
    font-size: ${({ isMobile }) => (isMobile ? '20px' : '30px')};
`

const List = styled.div`
    display: flex;
    margin: 20px;
`

const ListBlock = styled.ul`
    list-style: none;
    padding-inline-start: 0;
`

const ListElement = styled.li`
    margin-bottom: 5px;
    color: ${({ theme }) => (theme === 'light' ? 'white' : '#1d1d1f')};
    font-size: 16px;
`

function Skills() {
    const theme = useSelector(selectTheme)
    const isMobile = window.matchMedia('(max-width: 426px)').matches

    return (
        <SkillsWrapper theme={theme}>
            <Card theme={theme} isMobile={isMobile}>
                <CardContent>
                    <CardTitle theme={theme} isMobile={isMobile}>
                        <i className="fas fa-code" aria-hidden="true" style={{ marginRight: '10px' }}></i>
                        développeur front-end
                    </CardTitle>
                    <Description theme={theme}>J'aime coder des choses à partir de zéro et intégrer des fonctionnalités complexes.</Description>
                    <CardSubTitle theme={theme} isMobile={isMobile}>languages utilisés</CardSubTitle>
                    <Description theme={theme}>HTML, CSS, Sass, Javascript</Description>
                    <CardSubTitle theme={theme} isMobile={isMobile}>dev tools</CardSubTitle>
                    <List>
                        <ListBlock style={{ marginRight: '30px' }}>
                            <ListElement theme={theme}>Bootstrap</ListElement>
                            <ListElement theme={theme}>React.js</ListElement>
                            <ListElement theme={theme}>GitHub</ListElement>
                        </ListBlock>
                        <ListBlock>
                            <ListElement theme={theme}>Terminal</ListElement>
                            <ListElement theme={theme}>Node.js</ListElement>
                            <ListElement theme={theme}>Redux</ListElement>
                        </ListBlock>
                    </List>
                </CardContent>
            </Card>
        </SkillsWrapper>
    )
}

export default Skills