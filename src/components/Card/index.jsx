import './index.css'

function Card({ link, picture, bg, description }) {
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="card-front">
                    <img src={picture} alt='website logo' />
                </div>
                <div className="card-back" style={{background: bg}} >
                    {description}
                    <a href={link} className="btn">Visiter le site</a>
                </div>
            </div>
        </div>
    )
}

export default Card