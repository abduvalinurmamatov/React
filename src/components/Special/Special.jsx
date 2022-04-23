import React, {useEffect} from 'react';
import "./Special.scss"
import SpecialBtn from "./SpecialBTN/SpecialBtn";
import Aos from "aos";
import "aos/dist/aos.css";
const Special = ({menuItem2, button, filter}) => {

    useEffect(() => {
        Aos.init({
            duration: 1400
        })
    }, [])

    return (
        <div className="special-section" id="special">
            <div className="container">
                <div data-aos="zoom-in" className="special-section__subtitle"><span>TAOMLAR</span>
                    <hr/>
                </div>
                <div data-aos="zoom-in" className="special-section__title">BIZNING MAXSUS TAOMLARNI KO'RINGI</div>
                <div  data-aos="zoom-in" className="special">
                    <div className="special__btn">
                        <SpecialBtn button={button} filter={filter}/>
                    </div>
                    <div className="special__content">
                        {
                            menuItem2.slice(0, 1).map((item) => {
                                return <div className="content">
                                    <div className="content__text">
                                        <h1  className="content__text__title">{item.name}</h1>
                                        <h1 className="content__text__price">{item.price}</h1>
                                        <h1 className="content__text__desc">{item.description}</h1>
                                    </div>
                                    <div className="content__img">
                                        <img src={item.image} alt="img"/>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;