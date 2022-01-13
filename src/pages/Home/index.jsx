import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'
import { Subtitle } from '../../utils/style/Atoms'
import { Text } from '../../utils/style/Atoms'

const HomeWrapper = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#f3f3f3' : '#0D1117')};
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
    background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(70deg, #008080, #ff5100)' : 'linear-gradient(70deg, blue, pink)')}; 
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    margin-bottom: 0;
    margin-top: 200px;
`

function Home() {
    const theme = useSelector(selectTheme)

    return (
        <HomeWrapper id='welcome' theme={theme}>
            <TitleWrapper>
                <Title theme={theme}>Clément Deguelle</Title>
                <Subtitle theme={theme}>Développeur front-end</Subtitle>
                <Text theme={theme}>Coder simplement, coder proprement, coder efficacement.</Text>
            </TitleWrapper>
        </HomeWrapper>
    )
}

export default Home