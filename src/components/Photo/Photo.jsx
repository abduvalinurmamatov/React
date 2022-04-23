import React, {useEffect} from 'react';
import img1 from "./../../assets/rasm1.png"
import img2 from "./../../assets/rasm.png"
import img3 from "./../../assets/rasm3.png"
import img4 from "./../../assets/RASM12.JPG"
import img5 from "./../../assets/test.jpg"
import img6 from "./../../assets/kebab4.JPG"
import img7 from "./../../assets/rasm5.JPG"
import img8 from "./../../assets/rasm1.png"
import chef1 from "./../../assets/chef/unnamed.jpg"
import chef2 from "./../../assets/chef/chefs-2.jpg"
import chef3 from "./../../assets/chef/chefs-3.jpg"
import "./photo.scss"
import Aos from "aos";
import "aos/dist/aos.css";

const Photo = () => {

    useEffect(() => {
        Aos.init({
            duration: 1400
        })
    }, [])

    return (
        <div>
            <div className="photo" id="photo">
                <div className="container">
                    <div data-aos="zoom-in" className="photo__subtitle"><span>Rasmlar</span>
                        <hr/>
                    </div>
                    <div data-aos="zoom-in" className="photo__title">Restoran Ko'rinishi</div>
                </div>
                <div data-aos="zoom-in" className="photo__box">
                    <div className="photo__box__item"><img src={img1} alt="img"/></div>
                    <div className="photo__box__item"><img src={img2} alt="img"/></div>
                    <div className="photo__box__item"><img src={img3} alt="img"/></div>
                    <div className="photo__box__item"><img src={img4} alt="img"/></div>
                    <div className="photo__box__item"><img src={img5} alt="img"/></div>
                    <div className="photo__box__item"><img src={img6} alt="img"/></div>
                    <div className="photo__box__item"><img src={img7} alt="img"/></div>
                    <div className="photo__box__item"><img src={img8} alt="img"/></div>
                </div>
            </div>
            {/* Video section */}
            <div className="video">
                <div className="container">
                    <div data-aos="zoom-in" className="video__subtitle"><span>Video</span>
                        <hr/>
                    </div>
                    <div data-aos="zoom-in" className="video__title">TAOM TAYYORLASH JARAYONI</div>
                </div>
                <div data-aos="zoom-in" className="video__box" id="video">
                    <div className="video__box__item">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/L1mAtyBI77I"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="video__box__item">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-5csKaG3h1w"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="video__box__item">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1WvwORG_M3w"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="video__box__item">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9GoOGR2HmeM"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="video__box__item">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZBqXRgDrMa4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="video__box__item">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Tk4BK3Jib-I"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            {/*  Chefs section  */}
            <div className="chef-section" id="chef">
                <div className="container">
                    <div className="chef">
                        <div data-aos="zoom-in" className="chef__subtitle"><span>Oshpazlar</span>
                            <hr/>
                        </div>
                        <div data-aos="zoom-in" className="chef__title">PROFESSIONAL OSHPAZLAR</div>
                        <div  className="chef__box">
                            <div data-aos="zoom-in-right" className="chef__box__item">
                                <img src={chef1} alt="img"/>
                                <div className="chef__box__item__overlay">
                                    <h1 className="chef__box__item__overlay__name">Aliy O'zbek</h1>
                                    <p className="chef__box__item__overlay__job">Usta Oshpaz</p>
                                    <div className="chef__box__item__overlay__social">
                                        <a href="#"><i className="fa-brands fa-twitter"/></a>
                                        <a href="#"><i className="fa-brands fa-instagram"/></a>
                                        <a href="#"><i className="fa-brands fa-facebook-f"/></a>
                                        <a href="#"><i className="fa-brands fa-linkedin"/></a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-right" className="chef__box__item">
                                <img src={chef2} alt="img"/>
                                <div className="chef__box__item__overlay">
                                    <h1 className="chef__box__item__overlay__name">Aliy O'zbek</h1>
                                    <p className="chef__box__item__overlay__job">Usta Oshpaz</p>
                                    <div className="chef__box__item__overlay__social">
                                        <a href="#"><i className="fa-brands fa-twitter"/></a>
                                        <a href="#"><i className="fa-brands fa-instagram"/></a>
                                        <a href="#"><i className="fa-brands fa-facebook-f"/></a>
                                        <a href="#"><i className="fa-brands fa-linkedin"/></a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-right" className="chef__box__item">
                                <img src={chef3} alt="img"/>
                                <div className="chef__box__item__overlay">
                                    <h1 className="chef__box__item__overlay__name">Aliy O'zbek</h1>
                                    <p className="chef__box__item__overlay__job">Usta Oshpaz</p>
                                    <div className="chef__box__item__overlay__social">
                                        <a href="#"><i className="fa-brands fa-twitter"/></a>
                                        <a href="#"><i className="fa-brands fa-instagram"/></a>
                                        <a href="#"><i className="fa-brands fa-facebook-f"/></a>
                                        <a href="#"><i className="fa-brands fa-linkedin"/></a>
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

export default Photo;