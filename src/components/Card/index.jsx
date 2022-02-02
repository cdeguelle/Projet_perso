import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'
import './index.css'

const CardWrapper = styled.aside`
    margin: ${({ isMobile }) => (isMobile ? '30px 0' : '30px')};
`

const CardItem = styled.div`
    width: ${({ isMobile }) => (isMobile ? '300px' : '360px')};
`

const CardFront = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => (theme === 'light' ? '#f3f3f3' : 'white')};
`

function Card({ link, picture, bg, description }) {
    const theme = useSelector(selectTheme)
    const isMobile = window.matchMedia('(max-width: 426px)').matches

    return (
        <CardWrapper className="card-wrapper" isMobile={isMobile}>
            <CardItem className="card" isMobile={isMobile}>
                <CardFront className="card-front" theme={theme}>
                    <img src={picture} alt='website logo' />
                </CardFront>
                <div className="card-back" style={{background: bg}} >
                    {description}
                    <a href={link} className="btn" target="_blank" rel="noreferrer">Visiter le site</a>
                </div>
            </CardItem>
        </CardWrapper>
    )
}

export default Card