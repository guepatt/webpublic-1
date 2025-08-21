import React, { useState, useContext } from 'react';
import { useAuth } from '../../provider';
import { useNavigate, useLocation } from "react-router-dom";
import * as api from '../../Auth/auth'
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { LogoWhite } from '../Logo/Logo';
import { Logo } from '../Logo/Logo';
import { sidebarlist } from './SidebarList';
import NavIcons from './NavIcons';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useTheme } from "@mui/material";
import { ColorModeContext } from "../../theme";
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";



// ##################################################


export default function Sidebar(props) {

const theme = useTheme();
const colorMode = useContext(ColorModeContext);

const { handleLogout } = useAuth();

let navigate = useNavigate();
let location = useLocation();
  
    const handleLogoutapi = async () => {
      let response = await api.logout()
      await handleLogout(response);
       GoTo()
  }
  
  let from = location.state?.from?.pathname || "/";
     const GoTo = () => { navigate(from, { replace: true }) }

     const [dialogopen, dialogsetOpen] = useState(false);
     const dialoghandleOpen = () => {dialogsetOpen(true);};
     const dialoghandleClose = () => {dialogsetOpen(false);};

  

  const [open, setOpen] = useState(false);

const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = sidebarlist

  const drawerWidth = 300
  

  return (
<>

{/* Appbar - Menu on top */}
<Box sx={{ flexGrow: 1,  }}>
<ChangeColorScroll {...props}>

<AppBar position="fixed" elevation={0}>
<Toolbar sx={{  ml: {xs: 2, sm: 4, md: 4, lg: 8, xl: 8 }, 
                          mr: {xs: 0, sm: 4, md: 4, lg: 4, xl: 12 }, 
                          maxWidth: {xs: '99%', sm: '98%', md: '98%', lg: '98%', xl: '98%'},}}>

  <Box sx={{ flex: 1, pt: '1rem',}} > 
      <Stack direction={{ xs: 'row' }} spacing={{ xs: 0, sm: 2 }} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems:'center' }}>
           
           <Box sx={{pt: '0.3rem'}}> {theme.palette.mode === "light" ? ( <Logo /> ) : (<LogoWhite /> )}</Box>  
           
            <NavIcons title='Menu' onClick={toggleDrawer(true)} iconselect={ <MenuIcon sx={{fontSize: '100%'}} />} />
           
            <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "light" ? ( <DarkModeOutlinedIcon /> ) : (<LightModeOutlinedIcon /> )}
            </IconButton>
          
          </Box> 
      </Stack>
    </Box> 

    <Box sx={{ pt: '1rem',}}>
        <Stack direction={{ xs: 'row' }} spacing={{ xs: 0, sm: 2 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems:'center' }}>
            
            <NavIcons title='CockpitWelcome' onClick={dialoghandleOpen} to="/CockpitWelcome" iconselect={ <DashboardIcon sx={{fontSize: '100%'}} />} />  
            <NavIcons title='Account' onClick={dialoghandleOpen} to="/UserAdminWelcome" iconselect={ <PersonIcon sx={{fontSize: '100%'}} />} />  
            <NavIcons title='Logout' onClick={handleLogoutapi} to="/" iconselect={ <LogoutIcon sx={{fontSize: '100%'}} />} />
        </Stack>
  </Box>


</Toolbar>
</AppBar>

</ChangeColorScroll>
</Box>



{/* Sidebar, Drawer */}

      <Drawer open={open} elevation={0} onClose={toggleDrawer(false)}
                sx={{ fontFamily:'Raleway', display: 'block', flexShrink: 0, 
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', }, }}
                    PaperProps={{ sx: {pl:1, height: `calc(100% - 0px)`, backgroundColor: 'greydark.C900', borderRadius: '4px', 
                            margin: 0, borderColor:  'greydark.C900'} }}
                >

            <Box onClick={toggleDrawer(false)} >
                    
            <Box sx={{p: '2em', ml: '2em' }} > <LogoWhite />   </Box>

                    {DrawerList}
            
            </Box>
      </Drawer>

      </>  
  );
}


/* Helper Function header get transparent when scrolling */


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