import React, {useEffect} from 'react';
import "./swiper.scss"
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination} from "swiper";
import img1 from "./../../assets/event-birthday.jpg"
import img2 from "./../../assets/event-custom.jpg"
import img3 from "./../../assets/event-private.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
const Ceremonies = () => {

    useEffect(() => {
        Aos.init({
            duration: 1400
        })
    }, [])

    return (
        <div  className="swiper-section" id="maxsus">
            <div className="container">
                <div className="ceremonies">
                    <div data-aos="zoom-in" className="ceremonies__subtitle"> <span>NMAROSM</span> <hr/> </div>
                    <div data-aos="zoom-in" className="ceremonies__title">MAXSUS MAROSIMLAR JOYI</div>
                    <div className="ceremonies__section">
                        <Swiper
                            data-aos="zoom-in"
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="swiper__item">
                                    <div className="swiper__item__img">
                                        <img src={img2} alt=""/>
                                    </div>
                                    <div className="swiper__item__text">
                                        <h1 className="swiper__item__text__title" >Private Parties</h1>
                                        <h5 className="swiper__item__text__price">$999</h5>
                                        <h1>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
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
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper__item">
                                    <div className="swiper__item__img">
                                        <img src={img3} alt=""/>
                                    </div>
                                    <div className="swiper__item__text">
                                        <h1 className="swiper__item__text__title">Custom Parties</h1>
                                        <h5 className="swiper__item__text__price">$99</h5>
                                        <h1>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
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
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper__item">
                                    <div className="swiper__item__img">
                                        <img src={img1} alt=""/>
                                    </div>
                                    <div className="swiper__item__text">
                                        <h1 className="swiper__item__text__title">Birthday Price</h1>
                                        <h5 className="swiper__item__text__price">$189</h5>
                                        <h1>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
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
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ceremonies;