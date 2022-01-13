import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'

const TitleUnderlineWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

const SmallUnderline = styled.span`
    background: ${({ theme }) => (theme === 'light' ? '#1d1d1f' : 'white')};
    width: 17px;
    height: 4px;
    display: inline-block;
    margin: 0 2px;
`

const BigUnderline = styled.span`
    background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(70deg, #008080, #ff5100)' : 'linear-gradient(70deg, blue, pink)')}; 
    height: 4px;
    display: inline-block;
    width: 145px;
    margin: 0 2px;
`

function TitleUnderline() {
    const theme = useSelector(selectTheme)

    return (
        <TitleUnderlineWrapper>
            <SmallUnderline theme={theme} />
            <BigUnderline theme={theme} />
            <SmallUnderline theme={theme} />
        </TitleUnderlineWrapper>
    )
}

export default TitleUnderline