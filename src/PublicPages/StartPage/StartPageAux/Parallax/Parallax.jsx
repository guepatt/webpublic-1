import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import ParallaxContent from "./ParallaxContent";
import { gradientColor_1, gradientColor_2 } from "../../../../colors";

import { LADYTREE } from "../../../../constants";
import { IMAGING } from "../../../../constants";
import { MANWATER } from "../../../../constants";
import { DNA } from "../../../../constants";
import { MICROSCOPEDOCTOR } from "../../../../constants";
import { FITNESS } from "../../../../constants";
import { MICROSCOPE } from "../../../../constants";
import { LADY } from "../../../../constants";
import { NERVES } from "../../../../constants";
import { DATA2 } from "../../../../constants";


//const videos = [ Ladytree, Imaging, Manwater, Dna, Microscopedoctor, Fitness, Microscope, Lady, Nerves, Data2 ];
const videos = [ LADYTREE, IMAGING, MANWATER, DNA, MICROSCOPEDOCTOR, FITNESS, MICROSCOPE, LADY, NERVES, DATA2 ];


const FADE_DURATION = 6000; // in ms
const DISPLAY_DURATION = 10000; // total time per video

export default function Parallax() {

const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [textOffset, setTextOffset] = useState(0);
  const [isFading, setIsFading] = useState(false);


let windowScrollTop;
// console.log(window.innerWidth)

  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageY / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = useState("translate3d(0," + windowScrollTop + "px,0)");
  

useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % videos.length);
      setIsFading(true);

      setTimeout(() => {
        setPrevIndex(null); // remove old video
        setIsFading(false);
      }, FADE_DURATION);
    }, DISPLAY_DURATION);

    return () => clearInterval(interval);
  }, [currentIndex]);



  useEffect(() => {
    
  
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  
  
    });

  const resetTransform = () => {
    var windowScrollTop = window.pageY / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };


return (
<>

<div>
<Box sx={{ 
    height: "100vh",
    maxHeight: "1600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50%",
    // backgroundAttachment: "fixed",
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat", 
    margin: 0,
    padding: 0,
    border: 0,
    display: 'flex',
    alignItems: 'center',
    //backgroundColor:"primary.dark",  
    //backgroundImage: `url(${ imgUrl })`,
    filter: 'grayscale(1%) brightness(90%)',
    transform: transform,  
     
    color: {
    "&:before": { background: gradientColor_1},
    "&:after": { background: gradientColor_2},
    "&:after,&:before": {
    position: "absolute",
    zIndex: "-1",
    width: "100%",
    height: "100%",
    display: "block",
    left: "0",
    top: "0",
    content: "' '",
    }
  },
    
}}>


{/* Previous Video (fading out) */}
      {prevIndex !== null && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            opacity: isFading ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
        >
          <source src={videos[prevIndex]} type="video/mp4" />
        </video>
      )}

      {/* Current Video (fading in) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          opacity: isFading ? 0 : 1,
          transition: `opacity ${FADE_DURATION}ms ease-in-out`,
        }}
      >
        <source src={videos[currentIndex]} type="video/mp4" />
      </video>

<ParallaxContent />


</Box>
</div>
</>
)}