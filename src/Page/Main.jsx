import React, {useState, useEffect} from 'react';
import './main.scss'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Photo from "../components/Photo/Photo";
import Category from './../data'
import special from './../special'
import Menu from "../components/Menu/Menu";
import Special from "../components/Special/Special";
import Footer from "../components/Footer/Footer";
import Connection from "../components/Contact/Connection";
import Ceremonies from "../components/Ceremonies/Ceremonies";

const allCategories = [ ...new Set(Category.map((item) => item.category))];
console.log(allCategories)

// const allCategories = [...new Set(items.map(item => item.category)), "All Dishes"]
const allCategories1 = [...new Set(special.map(item => item.category))]


const Main = () => {

    const [menuItem, setMenuItem] = useState(Category);
    const [buttons, setButtons] = useState(allCategories);

    const [menuItem2, setMenuItem2] = useState(special);
    const [buttons2, setButtons2] = useState(allCategories1);



    const filterItem = (button) => {
        // else {
        //     let newCategory = [...Category].filter(item => item.category === button)
        //     return
        // }
        // const filteredData = items.filter(item => item.category === button);
        // setMenuItem(filteredData)

        const filteredData = Category.filter((item) => {
            return item.category === button;
        });
        setMenuItem(filteredData)

    };

    const filter2 = (btn) => {
        const filteredData2 = special.filter(item => item.category === btn);
        setMenuItem2(filteredData2)
    };
    return (
        <main>
            <div className="main"> </div>
            <Hero/>
            <Header/>
            <About/>
            <Menu menuItem={menuItem} button={buttons} filter={filterItem} key={menuItem.id} />
            <Special menuItem2={menuItem2} button={buttons2} filter={filter2} key={menuItem2.id}/>
            <Ceremonies/>
            <Photo/>
            <Connection/>
            <Footer/>
        </main>
    );
};

export default Main;