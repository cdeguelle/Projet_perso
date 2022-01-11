import { Subtitle } from '../../utils/style/Atoms'
import TitleUnderline from '../../components/TitleUnderline'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import cvImg from './../../assets/cv.png'
import linkedinImg from './../../assets/linkedin.png'
import githubImg from './../../assets/github.png'

const CvWrapper = styled.div`
    background-color: #0D1117;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`

const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 120px;
    width: 30%;
`

function CvSection() {

    return (
        <CvWrapper id='cv'>
            <Subtitle>Cv et liens sociaux</Subtitle>
            <TitleUnderline />
            <LinksWrapper>
                <Link to='/cv'>
                    <img src={cvImg} alt='cv logo' />
                </Link>
                <a href='https://www.linkedin.com/in/cl%C3%A9ment-deguelle-2a061788/'>
                    <img src={linkedinImg} alt='cv logo' />
                </a>
                <a href='https://github.com/cdeguelle'>
                    <img src={githubImg} alt='cv logo' />
                </a>
            </LinksWrapper>
        </CvWrapper>
    )
}

export default CvSection