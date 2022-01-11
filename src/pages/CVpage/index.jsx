import styled from 'styled-components'
import cvdocImg from './../../assets/cvdoc.png'

const CvWrapper = styled.div`
    background-color: #0D1117;
    padding-top: 200px;
`

function CvPage() {
    return (
        <CvWrapper id='welcome'>
            <img src={cvdocImg} alt='CV document'/>
        </CvWrapper>
    )
}

export default CvPage