import React from 'react';
import "./Footer_1.css"
import fb from "../Image/facebook.svg"
import twitter from "../Image/twitter-x.svg"
import telegram from "../Image/telegram.svg"
import insta from "../Image/instagram.svg"

const Footer_1 = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Bussiness</h4>
                        <a href="/TEXTO1">
                            <p>TEXTO1</p>
                        </a>
                        <a href="/TEXTO2">
                            <p>TEXTO2</p>
                        </a>
                        <a href="/TEXTO3">
                            <p>TEXTO3</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Recursos</h4>
                        <a href="/TEXTO4">
                            <p>TEXTO4</p>
                        </a>
                        <a href="/TEXTO5">
                            <p>TEXTO5</p>
                        </a>
                        <a href="/TEXTO6">
                            <p>TEXTO6</p>
                        </a>
                    </div>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Partner</h4>
                    <a href="/TEXTO7">
                        <p>TEXTO7</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                        <p>Career</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Social Media</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt=""/></p>
                        <p><img src={twitter} alt=""/></p>
                        <p><img src={telegram} alt=""/></p>
                        <p><img src={insta} alt=""/></p>

                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} DERECHOS RESERVADOS || TODOS SALGAN
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms">
                        <div><p>Terminos & Condiciones</p></div>
                    <a href="/privacidad">
                        <div><p>Privacidad</p></div>
                        <a href="/seguridad">
                            <div><p>Seguridad</p></div>
                            <a href="/cookies">
                                <div><p>Cookies Declaracion </p></div>
                            </a>
                        </a>
                    </a>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Footer_1