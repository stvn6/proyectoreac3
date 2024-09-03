import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*columna 1*/}
                    <div className="col">
                        <h4>COLUMNA 1</h4>
                        <ul className="list-unstyled">
                            <li>TEXTO</li>
                            <li>TEXTO</li>
                            <li>TEXTO</li>
                        </ul>
                    </div>
                    {/*columna 2*/}
                    <div className="col">
                        <h4>COLUMNA 2</h4>
                        <ul className="list-unstyled">
                            <li>TEXTO</li>
                            <li>TEXTO</li>
                            <li>TEXTO</li>
                        </ul>
                    </div>
                    {/*columna 2*/}
                    <div className="col">
                        <h4>COLUMNA 3</h4>
                        <ul className="list-unstyled">
                            <li>TEXTO</li>
                            <li>TEXTO</li>
                            <li>TEXTO</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} DERECHOS RESERVADOS | TERMINOS Y CONDICIONES | PRIVACIDAD
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer