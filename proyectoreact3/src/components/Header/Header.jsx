import React from 'react';
import "./Header.css"
import logo from '../Image/LOGOPERRO.jpg'

export default function Header(){
    return (
        <div className="header">
            <div className="header-left">
                <img className="logo" src={logo} />
                <h2>LOCOOOOS</h2>
            </div>
            <div className="header-center">
                <ul className="header-lists">
                    <li><a href="home"> HOME</a></li>
                    <li><a href="acerca"> ACERCA</a></li>
                    <li><a href="contactanos"> CONTACTANOS</a></li>
                    <div className="header-centerMenu">
                    </div>
                </ul>
            </div>
            <div className="header-right">
                <button>SIGN UP</button>
                <button>SIGN IN</button>
            </div>
        </div>
    )
}
