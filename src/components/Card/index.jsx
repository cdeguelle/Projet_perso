import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectTheme } from '../../utils/selectors'
import './index.css'

const CardFront = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => (theme === 'light' ? '#ccccd8' : 'white')};
`

function Card({ link, picture, bg, description }) {
    const theme = useSelector(selectTheme)

    return (
        <div className="card-wrapper">
            <div className="card">
                <CardFront className="card-front" theme={theme}>
                    <img src={picture} alt='website logo' />
                </CardFront>
                <div className="card-back" style={{background: bg}} >
                    {description}
                    <a href={link} className="btn">Visiter le site</a>
                </div>
            </div>
        </div>
    )
}

export default Card