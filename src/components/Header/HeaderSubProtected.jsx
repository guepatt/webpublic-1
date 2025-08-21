import React from 'react';
import Typography from '@mui/material/Typography';


export default function HeaderSubProtected({ subheadline }) {
   
    return (
     <>
   
       <Typography variant="h4" color='common.black' textAlign='center' gutterBottom> {subheadline} </Typography>   
  
  </>
    );
  }