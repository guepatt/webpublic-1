import {Speak23LogoWhite, Speak23LogoBlack} from '../../constants'
import { styled } from '@mui/material/styles';

//import { makeStyles } from '@mui/material/styles';
const LogoRoot = styled('div')(({ theme }) => ({
    
    [theme.breakpoints.up('xs')]: {
      width: theme.spacing(12),
      height: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(12),
      height: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(12),
      height: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: theme.spacing(12),
      height: 'auto',
    },
    [theme.breakpoints.up('xl')]: {
      width: theme.spacing(16),
      height: 'auto',
    },

  
}));



export const Logo = () => {
  
    return (

    <LogoRoot>  
    <img 
    
        src={Speak23LogoBlack}
        width= "100%" 
        alt="speak23"
    
    />
    </LogoRoot>
)}

export const LogoWhite = () => {
  
  return (

  <LogoRoot>  
  <img 
  
      src={Speak23LogoWhite}
      width= "100%" 
      alt="speak23"
  
  />
  </LogoRoot>
)}

export const LogoBlack = () => (
<LogoRoot>  
  <img
          src={Speak23LogoBlack}
          width="120"
          alt="speak23 logo"
        />
 </LogoRoot>
)


export const LogoSmall = () => (

  <LogoRoot> 
    <img
            src={Speak23LogoBlack}
            width="140"
            height="32"
            alt="speak23 logo"
          />
   </LogoRoot>
  )
  