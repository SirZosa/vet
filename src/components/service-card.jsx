import serviceLogo from '../assets/service.svg'
import imgPlaceholder from '../assets/placeholder-image.png'
export default function ServiceCard({serviceName, text}){
    return(
        <div className="service-card">
            <div className="service-card-content">
                <img src={imgPlaceholder} alt="" className='service-card-img'/>
                <h2>{serviceName}</h2>
                <p className='service-text'>{text}</p>
            </div>
        </div>
    )
}