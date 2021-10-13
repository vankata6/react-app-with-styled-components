import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjectOne, homeObjectTwo, homeObjectThree, homeObjectFour } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {

    const [open, setOpen] = useState(false);
    
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <>
           <Sidebar  open={open} toggle={toggle}/>
           <Navbar toggle={toggle}/>
           <HeroSection/>
           <InfoSection {...homeObjectOne}/>
           <InfoSection {...homeObjectTwo}/>
           <InfoSection {...homeObjectThree}/>
           <InfoSection {...homeObjectFour}/>
           <Footer/>
        </>
    );
};

export default Home;
