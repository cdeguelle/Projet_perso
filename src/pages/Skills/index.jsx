import styled from 'styled-components'
import './index.css'

const SkillsWrapper = styled.div`
    background-color: #0D1117;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
`

const Card = styled.div`
    border-radius: 25px;
    background: #fff;
    margin-top: -200px;
    padding: 20px;
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
    font-size: 40px;
    color: white;
    margin-bottom: 0;
    background: linear-gradient(70deg, blue, pink);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text; 
    text-transform: uppercase;
`

const Description = styled.p`
    margin: 20px;
`

const CardSubTitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(70deg, blue, pink);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    text-transform: uppercase;
`

const List = styled.div`
    display: flex;
    margin: 20px;
`

function Skills() {
    return (
        <SkillsWrapper>
            <Card>
                <CardContent>
                    <CardTitle style={{ background: 'linear-gradient(70deg, blue, pink)', color: 'transparent', backgroundClip: 'text', webkitBackgroundClip: 'text', margin: '0 10px', textTransform: 'uppercase' }} >
                        <i class="fas fa-code" aria-hidden="true" style={{ marginRight: '10px' }}></i>
                        développeur front-end
                    </CardTitle>
                    <Description>J'aime coder des choses à partir de zéro et intégrer des fonctionnalités complexes.</Description>
                    <CardSubTitle>languages utilisés</CardSubTitle>
                    <Description>HTML, CSS, Sass, Javascript</Description>
                    <CardSubTitle>dev tools</CardSubTitle>
                    <List>
                        <ul style={{ marginRight: '30px' }}>
                            <li>Bootstrap</li>
                            <li>React.js</li>
                            <li>GitHub</li>
                        </ul>
                        <ul>
                            <li>Terminal</li>
                            <li>Node.js</li>
                            <li>Redux</li>
                        </ul>
                    </List>
                </CardContent>
            </Card>
        </SkillsWrapper>
    )
}

export default Skills