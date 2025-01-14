import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Header from "./header/Header";
import Home from "./home/Home";

import "./App.css"
import About from "./about/About";
import Skills from "./skills/Skills";
import Services from "./services/Services";
import Qualification from "./qualification/Qualification";
import Contact from "./contact/Contact";
// import Portfolio from "./portfolio/Work"
import Footer from "./footer/Footer";
import ScrollUp from "./scrollup/ScrollUp";
import ProgressBar from "./progress/ProgressBar";

function App() {    
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [location.pathname]);

    return (
        <>
            <Header />
            <ProgressBar />
            <main>
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                {/* <Portfolio /> */}
                <Contact />
            </main>
            <Footer />
            <ScrollUp />
        </>
    )
}

export default App;