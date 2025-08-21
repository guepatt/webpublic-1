import React from 'react';
import Typography from '@mui/material/Typography';


export default function HeaderLeft({ headerleft }) {
   
    return (
     
          <Typography variant="h3" textAlign="left" sx={{mb: '2rem', fontFamily: 'Inter', fontWeight: '500'}}> { headerleft } </Typography> 
 
    );
  }