import React, {useEffect} from 'react';
import "./menu.scss"
import Button from "./Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Menu = ({menuItem, filter, button}) => {

    useEffect(() => {
        Aos.init({
            duration: 1400
        })
    }, [])

    console.log(menuItem);
    return (
        <div className="menu-section" id="menu">
            <div className="container">
                <div data-aos="zoom-in" className="menu-section__subtitle"><span>Menyu</span>
                    <hr/>
                </div>
                <div data-aos="zoom-in" className="menu-section__title">MAZALI TAOMLARIMIZ RO'YXATI</div>
                <div data-aos="zoom-in" className="button-section">
                    <Button filter={filter} button={button}/>
                </div>
                <div data-aos="zoom-in" className="menu">
                    {
                        menuItem.slice(0, 4).map((item) => {
                            const {  name, price, image, description  } = item;
                            return (
                                <div className="menu__box">
                                    <div className="menu__box__image">
                                        <img src={image} alt=""/>
                                        {/*<p>{item.id}</p>*/}
                                    </div>
                                    <div className="menu__box__content">
                                        <div className="menu__box__content__title">
                                            <div className="menu__box__content__title__name">
                                                <p >{name}</p>
                                            </div>
                                            <div className="menu__box__content__title__price">
                                                <p >{price}</p>
                                            </div>
                                        </div>
                                        <div className="menu__box__content__description">
                                            <p >{description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;