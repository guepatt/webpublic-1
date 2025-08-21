import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
//import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';
import FooterEnd from '../Footer/FooterEnd';
import { Toolbar } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import HeaderMainProtected from '../Header/HeaderMainProtected'



export default function PageProtected({headline, specify, main, props}) {

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
  {/* Display Drawer left side for navigation and Status Bar on top, Toolbar as anchor for scrolling back on top */}
        
      <Grid container sx={{ minWidth: '100%', minHeight:windowSize.height}}>   
      <Toolbar  id="back-to-top-anchor" />
      <Sidebar />

      <Grid item xs={12} sx={{ mt: { xs:8, sm:4, md: 0,}, mb: {xs:0, sm:4, md:8, }, display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <HeaderMainProtected headline={headline} specify={specify}/>  </Grid>

        <Grid item xs={12} sx={{mt: { xs:4, sm: 0 }, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
    
              {/* MAIN PAGE */}
              {main}
              </Grid>
        </Grid>



<FooterEnd />

<ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" sx={{zIndex: 9, bgcolor: 'primary.C200', color: 'primary.C900', '&:hover': { color: 'tertiary.C900'},}}>
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
      <Box onClick={handleClick} role="presentation" sx={{zIndex: 14, position: 'fixed', bottom: 24, right: 24 }}> {children} </Box>
    </Fade>
  );
}

