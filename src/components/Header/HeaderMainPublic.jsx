import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { LogoWhite } from '../Logo/Logo'
//import { LogoWhite } from '../Logo/Logo';
import Stack from '@mui/material/Stack';

function ChangeColorScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    color: trigger ? 'transparent' : 'transparent',
  });
}

// ##################################################


function HeaderMainPublic ({linkgroup, props}) {

  
  return (
  <>  
    <Box sx={{ flexGrow: 1, }}>

      <ChangeColorScroll {...props}>

        <AppBar position="fixed" elevation={0}  
                sx={{width: "100%", border: "0", borderRadius: "3px", padding: "1rem 0", marginBottom: "0px", transition: "all 150ms ease 0s", }}>

          <Toolbar sx={{  ml: {xs: 2, sm: 4, md: 8, lg: 8, xl: 8 }, 
                          mr: {xs: 2, sm: 4, md: 4, lg: 8, xl: 8 }, 
                          maxWidth: {xs: '98%', sm: '98%', md: '98%', lg: '98%', xl: '98%'} }}>

                <Box sx={{ flex: 1, mt:1 }} > <LogoWhite />   </Box>
                      

                <Stack direction={{ xs: 'row' }} spacing={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 8 }} 
                          sx={{mt: '1rem', mr: { xl: '2rem' }, display: 'flex', justifyContent: 'flex-end', }}>

                          {linkgroup}

                </Stack>
               
        </Toolbar>
      </AppBar>
    </ChangeColorScroll>

  </Box>
  
  </>
  );
}

export default HeaderMainPublic;

