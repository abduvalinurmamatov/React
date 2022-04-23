import React, {useState, useEffect} from 'react';
import {Link} from "react-scroll"
import classes from "./header.module.scss"


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, []);

    useEffect(() => {
        if (size.width > 935 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    }
    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__container__content}>
                    <div className={classes.header__container__content__logo}>
                        <span>Adena Kebab</span>
                    </div>
                    <nav className={`${classes.header__container__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                        <ul>
                            <li>
                                <Link spy={true} smooth={true} offest={-150} duration={500} to="home">Home</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={true} offest={-150} duration={500} to="about">About</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={true} offest={-150} duration={500} to="menu">Menu</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={true} offest={-150} duration={500} to="photo">Photos</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={true} offest={-150} duration={500} to="video">Videos</Link>
                            </li>
                            <li>
                                <Link spy={true} smooth={true} offest={-150} duration={500} to="connect">Communication</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.header__container__content__icons}>
                        <div className={classes.header__container__content__icons__toggle}>
                            {
                                !menuOpen ? <i className="fa-solid fa-bars-staggered" onClick={menuToggleHandler}/>
                                : <i className="fa-solid fa-xmark" onClick={menuToggleHandler} />
                            }
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;