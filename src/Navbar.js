import icon from './earth-icon.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={icon} alt="..." className='earth-icon'/>
           <span className='main-title'>my travel journal.</span> 
        </div>
    )
}