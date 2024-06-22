import {useState} from 'react'
import Logo from '../assets/dog-logo.svg'
import burger from '../assets/burger.svg'
export default function NavMobile(){

    const [isActive, setIsActive] = useState(false)
    function menuActive(){
        setIsActive(prev => !prev)
    }

    return(
        <nav>
            <div className="nav-inside">
                <img className='logo-img' src={Logo} alt="" />
                <div className="nav-links">
                    <a to={'#'}>Home</a>
                    <a to={'#'}>Our Team</a>
                    <a to={'#'}>Services</a>
                    <a to={'#'}>Contact</a>
                </div>
                <img className='nav-burger' src={burger} alt="" onClick={menuActive}/>
            </div>
            <div className={`nav-container ${isActive ? 'open' : 'close'}`}>
                <div className="nav-container-links">
                    <a to={'#'}>Home</a>
                    <a to={'#'}>Our Team</a>
                    <a to={'#'}>Services</a>
                    <a to={'#'}>Contact</a>
                </div>
            </div>
        </nav>
    )
}