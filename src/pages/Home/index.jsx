import styled from 'styled-components'
import { Subtitle } from '../../utils/style/Atoms'
import { Text } from '../../utils/style/Atoms'

const HomeWrapper = styled.div`
    background-color: #0D1117;
    height: 80vh;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 100px;
`

const Title = styled.h1`
    font-family: 'Miriam Libre', sans-serif;
    font-size: 100px;
    background: linear-gradient(70deg, blue, pink); 
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    margin-bottom: 0;
    margin-top: 200px;
`

function Home() {
    return (
        <HomeWrapper>
            <TitleWrapper>
                <Title>Clément Deguelle</Title>
                <Subtitle>Développeur front-end</Subtitle>
                <Text>Je conçois et code des choses magnifiquement simples, et j'aime ce que je fais.</Text>
            </TitleWrapper>
        </HomeWrapper>
    )
}

export default Home