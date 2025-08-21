import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeaderMainPublicBlack from '../../components/Header/HeaderMainPublicBlack'
import FooterEnd from '../Footer/FooterEnd';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
//import { gradientColor_3} from '../../colors';


export default function PagePublic({linkgroup, headline, main, props}) {

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
    <Container sx={{  zIndex: 0, minWidth: '100%', minHeight:windowSize.height, }}>

      <Grid container>                         
     
            <Toolbar  id="back-to-top-anchor" />
            <HeaderMainPublicBlack linkgroup= {linkgroup}  />
            
            <Grid item xs={12} sx={{mt: { xs:4, sm: 1 }, display: 'flex', justifyContent: 'center', alignItems: 'top',  }}>
                    
                    {/* MAIN PAGE - always centered */}
                    {main}
            
            </Grid>
       </Grid>

</Container>

<FooterEnd />


   

<ScrollTop {...props}>
    <Fab size="small" aria-label="scroll back to top" sx={{bgcolor: 'background.greenlight', color: 'primary.dark', '&:hover': { color: 'primary.dark'},}}>
      <KeyboardArrowUpIcon />
    </Fab>
</ScrollTop>

 </>
  )
}


/* Helper Function to show button to scroll back to top */

function ScrollTop(props) {

  const { children } = props;
  
  const trigger = useScrollTrigger({
  //  target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{zIndex: 100, position: 'fixed', bottom: 24, right: 24 }}> {children} </Box>
    </Fade>
  );
}

