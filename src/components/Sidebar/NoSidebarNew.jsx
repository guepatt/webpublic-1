import React from 'react';
import { useAuth } from '../../provider';
import { useNavigate, useLocation } from "react-router-dom";
//import { Link as RouterLink } from 'react-router-dom';
import * as api from '../../Auth/auth'
import Stack from '@mui/material/Stack';
//import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
//import IconButton from '@mui/material/IconButton';
import { Logo } from '../Logo/Logo';
//import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
//import Tooltip from '@mui/material/Tooltip';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import NavIcons from './NavIcons';

// ##################################################


export default function NoSidebarNew(props) {

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
 
  return (
<>

{/* Appbar - Menu on top */}
<Box sx={{ flexGrow: 1 }}>
<ChangeColorScroll {...props}>

<AppBar position="fixed" elevation={0}  
                sx={{ width: "100vw", height: "8svh", border: "0", borderRadius: "3px", padding: "0.6rem 0", marginBottom: "2px", transition: "all 150ms ease 0s", }}>

          <Toolbar sx={{  ml: {xs: 2, sm: 4, md: 4, lg: 8, xl: 8 }, 
                          mr: {xs: 0, sm: 4, md: 4, lg: 4, xl: 12 }, 
                          maxWidth: {xs: '99%', sm: '98%', md: '98%', lg: '98', xl: '98'}, }}>

{/* Logo let */}
<Box sx={{ flex: 1 }} > <Logo />   </Box>

<Stack direction={{ xs: 'row', sm: 'row' }} spacing={{ xs: 0, sm: 2 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>

  <NavIcons title='Logout' onClick={handleLogoutapi} to="/" iconselect={ <LogoutIcon sx={{fontSize: '100%'}} />} />

</Stack>

</Toolbar>
</AppBar>
</ChangeColorScroll>
</Box>



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
    color: trigger ? 'grey' : 'transparent',
  });
}