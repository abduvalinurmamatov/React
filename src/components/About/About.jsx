import React, {useEffect} from 'react';
import BigChef from "./../../assets/maxresdefault.jpg"
import "./about.scss"
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
        Aos.init({
            duration: 1400
        })
    }, [])
    return (
        <div className="about-section" id="about">
            <div className="about">
                <div className="first-section">
                    <div className="container">
                        <div className="first">
                            <div data-aos="zoom-in" className="first__item">
                                <h1 >Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    <span><i className="fa-solid fa-check-double"/></span> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    <span><i className="fa-solid fa-check-double"/></span> Duis aute irure dolor in
                                    reprehenderit in voluptate velit.
                                </p>
                                <p>
                                    <span><i className="fa-solid fa-check-double"/></span> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat
                                    nulla pariatur.
                                </p>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id
                                    est laborum
                                </p>
                            </div>
                            <div data-aos="zoom-in" className="first__item">
                                <div className="first__item__imgBox">
                                    <img src={BigChef} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-section">
                    <div className="container">
                        <div  className="second">
                            <div data-aos="zoom-in" className="second__subtitle"> <span>NEGA BIZ </span> <hr/> </div>
                            <div data-aos="zoom-in" className="second__title">NIMA UCHUN BIZNING RESTORANIMIZNI TANLAYSIZ</div>
                            <div data-aos="zoom-in" className="second__box">
                                <div  className="second__box__item">
                                    <div className="overlay">
                                        <div className="second__box__item__number">01</div>
                                        <div className="second__box__item__title">Lorem Ipsum</div>
                                        <div className="second__box__item__text">Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</div>
                                    </div>
                                </div>
                                <div className="second__box__item">
                                    <div className="overlay">
                                        <div className="second__box__item__number">02</div>
                                        <div className="second__box__item__title">Repellat Nihil</div>
                                        <div className="second__box__item__text">Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</div>
                                    </div>
                                </div>
                                <div className="second__box__item">
                                    <div className="overlay">
                                        <div className="second__box__item__number">03</div>
                                        <div className="second__box__item__title">Ad ad velit qui</div>
                                        <div className="second__box__item__text">Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;