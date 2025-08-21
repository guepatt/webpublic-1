import { useState, useEffect } from 'react';
//import Grid from '@mui/material/Grid';
import StartHeader from "./StartPageAux/StartHeader/StartHeader";
import Parallax from "./StartPageAux/Parallax/Parallax";
//import SlidePage from '../SlidePage/SlidePage';
//import PicSection from "./StartPageAux/Parallax/PicSection";
//import SectionClock from "../Sections/SectionClock";
//import SectionNewborn from "../Sections/SectionNewborn";
//import SectionGenome from "../Sections/SectionGenome";
import FooterEnd from "../../components/Footer/FooterEnd";



export default function StartMain() {

   useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
      });

 const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
    });


useEffect(() => {
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);


return (

    <>
    
        
            <StartHeader />
            <Parallax />
    
            <FooterEnd />

   
            
</>
)}

