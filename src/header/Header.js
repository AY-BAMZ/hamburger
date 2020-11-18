import React, {useState} from 'react'
import logo from './logo.svg';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);


    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        }else{
            setNavbar(false); 
        }
    };
    window.addEventListener('scroll', changeBackground);
    return (
        <div className={navbar ? 'MainNav active' : 'navbar'}>
            <navbar className="Navbar">
                <img src={logo} alt="" />
                <nav className="NavLinks">
                    <li href="#" className="Links">Home</li>
                    <li href="#" className="Links">Collection</li>
                    <li href="#" className="Links">Pricing</li>
                    <li href="#" className="Links">Sign Up</li>
                </nav>
                <form className="SearchBar">
                    <input type="text" placeholder="search" />
                    <h1 className="searchIcon">Search</h1>
                </form>
                <button className='menBar' onClick={() => setOpen(!open)}> Menu<FontAwesomeIcon className="menuIcon" icon={faEllipsisV} />
                </button>
            </navbar>
               <div className="Mobile" >
                {open === true && 
                    <ul className='mobileLinks'>    
                        <li href="#" className="Links">Home</li>
                        <li href="#" className="Links">Collection</li>
                        <li href="#" className="Links">Pricing</li>
                        <li href="#" className="Links">Sign Up</li>
                    </ul>}           
                </div>       
        </div>
    )
}

export default Header
