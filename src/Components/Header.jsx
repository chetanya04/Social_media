import React from 'react'
import "/src/index.css"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className="Container">
            <h1><FontAwesomeIcon icon={faShareNodes} /> NextConnect</h1>
            <button type="button" className='SignOut-btn'><Link to="/" className='SignOut-btn'>Log out </Link></button>
        </div>
    )
}






export default Header