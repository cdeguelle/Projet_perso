import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'
import cvdocImg from './../../assets/cvdoc.png'

const CvWrapper = styled.section`
    background-color: ${({ theme }) => (theme === 'light' ? '#f3f3f3' : '#0D1117')};
    padding-top: 200px;
`

const CvDoc = styled.img`
    height: ${({ isMobile }) => (isMobile ? '60vh' : '100vh')};
`

function CvPage() {
    const theme = useSelector(selectTheme)
    const isMobile = window.matchMedia('(max-width: 426px)').matches

    return (
        <CvWrapper theme={theme}>
            <CvDoc src={cvdocImg} alt='CV document' isMobile={isMobile} />
        </CvWrapper>
    )
}

export default CvPage