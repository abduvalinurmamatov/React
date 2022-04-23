import React from 'react';

import "./footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer__item">
                        <h2>RESTAURANTLY</h2>
                        <p>Юнусабадский район улица Мойкурган 7 квартал рядом с домом 47 Ташкент UZ, 100190,
                            Узбекистан</p>
                        <a className="footer__item__link" href="tel:712240444">Tel:712240444</a>
                        <a className="footer__item__link" href="tel:990044044">Tel:990044044</a>
                        <div className="footer__item__icon">
                            <a href="#"><i className="fa-brands fa-twitter"/></a>
                            <a href="#"><i className="fa-brands fa-facebook-f"/></a>
                            <a href="#"><i className="fa-brands fa-instagram"/></a>
                            <a href="#"><i className="fa-brands fa-skype"/></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"/></a>
                        </div>
                    </div>
                    <div className="footer__item">
                        <h3>Useful Links</h3>
                        <a className="footer__item__link" href="#">Home</a>
                        <a className="footer__item__link" href="#">About Us</a>
                        <a className="footer__item__link" href="#">Services</a>
                        <a className="footer__item__link" href="#">Terms of service</a>
                        <a className="footer__item__link" href="#">Privacy policy</a>
                    </div>
                    <div className="footer__item">
                        <h3>Our Services</h3>
                        <a className="footer__item__link" href="#">Web Design</a>
                        <a className="footer__item__link" href="#">Web Development</a>
                        <a className="footer__item__link" href="#">Product Management</a>
                        <a className="footer__item__link" href="#">Marketing</a>
                        <a className="footer__item__link" href="#">Graphic Design</a>
                    </div>
                    <div className="footer__item">
                        <h3>Our Newsletter</h3>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <div className="footer__item__input">
                            <input type="text"/>
                            <a href="#">Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;