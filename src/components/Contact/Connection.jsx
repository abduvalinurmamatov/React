import React, {useEffect} from 'react';
import "./Connection.scss"
import Aos from "aos";
import "aos/dist/aos.css";

const CommunicationCom = () => {

    useEffect(() => {
        Aos.init({
            duration: 1400
        })
    }, [])

    return (
        <div className="communication" id="connect">
            <div className="container">
                <div className="header">
                    <div className="header__row">
                        <p data-aos="zoom-in" className="header__row__subTitle"><span>Aloqa</span>
                            <hr/>
                        </p>
                        <h1 data-aos="zoom-in" className="header__row__title">BIZNING RESTORANIMIZNI TANLAYSIZ</h1>
                        <div data-aos="zoom-in" className="header__row__location">
                            <div className="header__row__location__items">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.001602918738!2d69.28271434043789!3d41.31781918886816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2d901c2def%3A0x1bb221455121c6e8!2z0JPQu9Cw0LLQv9C-0YfRgtCw0LzRgg!5e1!3m2!1sru!2s!4v1639548267675!5m2!1sru!2s"
                                    allowFullScreen="" loading="lazy"></iframe>
                            </div>
                            <div className="header__row__location__items">
                                <div className="header__row__location__items__user">
                                    <input type="text" placeholder="Your Name"/>
                                    <input type="email" placeholder="Your Email"/>
                                </div>
                                <div className="header__row__location__items__subject">
                                    <input type="text" placeholder="Subject"/>
                                </div>
                                <div className="header__row__location__items__comment">
                                    <textarea cols="" placeholder="Comment"/>
                                </div>
                                <div className="header__row__location__items__submit">
                                    <input type="submit" value="Send Message"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunicationCom;