import React from  'react'
import {gauge} from '../../../constants'
import { styled } from '@mui/material/styles';

//import { makeStyles } from '@mui/material/styles';
const ClockRoot = styled('div')(({ theme }) => ({

  marginTop: 8, 
    
  '@media (min-width:1px)': {
      width: theme.spacing(10),
      height: 'auto',
    },
  '@media (min-width:600px)': {
      width: theme.spacing(12),
      height: 'auto',
    },
  '@media (min-width:960px)': {
      width: theme.spacing(14),
      height: 'auto',
    },
  '@media (min-width:1280px)': {
      width: theme.spacing(14),
      height: 'auto',
    },
  '@media (min-width:1920px)': {
      width: theme.spacing(48),
      height: 'auto',
    },

  
}));



export const Clock = () => {
  
    return (

    <ClockRoot>  
    <img 
    
        src={gauge} 
        alt="clock"
        width= "160%"
    
    />
    </ClockRoot>
)}

