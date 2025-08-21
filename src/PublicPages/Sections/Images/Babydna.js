import React from  'react'
import {babydna1} from '../../../constants'
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
      width: theme.spacing(24),
      height: 'auto',
    },

  
}));



export const Babydna1 = () => {
  
    return (

    <ClockRoot>  
    <img 
    
        src={babydna1} 
        alt="babydna"
        width= "510%"
    
    />
    </ClockRoot>
)}

