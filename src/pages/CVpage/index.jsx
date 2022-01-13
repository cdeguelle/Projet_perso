import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'
import cvdocImg from './../../assets/cvdoc.png'

const CvWrapper = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#f3f3f3' : '#0D1117')};
    padding-top: 200px;
`

function CvPage() {
    const theme = useSelector(selectTheme)

    return (
        <CvWrapper theme={theme}>
            <img src={cvdocImg} alt='CV document'/>
        </CvWrapper>
    )
}

export default CvPage