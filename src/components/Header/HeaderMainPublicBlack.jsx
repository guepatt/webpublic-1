import React, { useContext } from "react";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Logo, LogoWhite } from '../Logo/Logo'
//import { LogoWhite } from '../Logo/Logo';
import Stack from '@mui/material/Stack';
import { useTheme } from "@mui/material";
import { ColorModeContext } from "../../theme";
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


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


function HeaderMainPublicBlack ({linkgroup, props}) {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);


  return (
  <>  
    <Box sx={{ flexGrow: 1, }}>

      <ChangeColorScroll {...props}>

        <AppBar position="fixed" elevation={0}  
                sx={{width: "100%", border: "0", borderRadius: "3px", padding: "0.5rem 0", marginBottom: "0px", transition: "all 150ms ease 0s", }}>

          <Toolbar sx={{  ml: {xl: 8 }, 
                          mr: { xl: 8 }, 
                          maxWidth: {xs: '99%', sm: '99%', md: '99%', lg: '99%', xl: '98%'},}}>

                <Box sx={{ flex: 1, pt: '1rem',}} > 
                      <Stack direction={{ xs: 'row' }} spacing={{ xs: 0, sm: 2 }} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems:'center' }}>
                          
                          <Box sx={{pt: '0.3rem'}}> {theme.palette.mode === "light" ? ( <Logo /> ) : (<LogoWhite /> )}</Box>  

                            <Box display="flex">
                            <IconButton onClick={colorMode.toggleColorMode}>
                                {theme.palette.mode === "light" ? ( <DarkModeOutlinedIcon /> ) : (<LightModeOutlinedIcon /> )}
                            </IconButton>                        
                          </Box> 
                          
                      </Stack>
                </Box> 

                <Stack direction={{ xs: 'row', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4, xl:8 }} 
                          sx={{mt: '1rem', mr:'1rem', display: 'flex', justifyContent: 'flex-end' }}>

                          {linkgroup}

                </Stack>
               
        </Toolbar>
      </AppBar>
    </ChangeColorScroll>

  </Box>
  
  </>
  );
}

export default HeaderMainPublicBlack;

