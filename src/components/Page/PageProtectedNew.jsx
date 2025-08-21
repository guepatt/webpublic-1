import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NoSidebarNew from '../Sidebar/NoSidebarNew';
//import HeaderMainProtected from '../Header/HeaderMainProtected';
import FooterEnd from '../Footer/FooterEnd';
import { Toolbar } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';


export default function PageProtectedNew({headline, main, props}) {

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

  <Toolbar  id="back-to-top-anchor" />
  <NoSidebarNew />
    
  <Container sx={{ zIndex: 2, minWidth: windowSize.width, minHeight:windowSize.height,
             //       pr: '15px', pl: '15px', mr: 'auto', ml: 'auto', width: '100%',            //container fluid
             //        maxWidth: {xs: '540px', md: '720px', lg: '992px', xl: '1140px'},          //container
                    
                    }}>

    <Grid container>                         
    <Grid item xs={12} sx={{mt: { xs:4, sm: 0 }, display: 'flex', justifyContent: 'center', alignItems: 'top'}}>
   
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
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 24, right: 24 }}> {children} </Box>
    </Fade>
  );
}

