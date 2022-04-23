import React, {useEffect, useState} from 'react';
import Modal from "./Modal/Modal"
import "./hero.scss"
import Aos from "aos";
import "aos/dist/aos.css";
const Hero = () => {

    useEffect(() => {
        Aos.init({
            duration: 1400
        })
    }, [])

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="hero-section" id="home">
            <div className="overlay">
                <div className="container">
                    <div className="hero">
                        <div className="hero__item">
                            <h1 data-aos="zoom-in" className="hero__item__title"> <span>ADANA KEBABGA</span> HUSH KELIBSIZ </h1>
                            <p data-aos="zoom-in" className="hero__item__subtitle">Ajoyib taomlarni etkazib beramz!</p>
                            <a data-aos="zoom-in" className="hero__item__btn" href="#">Bizning Menyu</a>
                        </div>
                        <div data-aos="zoom-in" className="hero__item">
                            <button onClick={() => {setOpenModal(true)}}  className="hero__item__play" href=" "><i className="fa-solid fa-play"/></button>
                            { openModal && <Modal classModal={setOpenModal}/> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;