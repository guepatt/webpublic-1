import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


export default function HorizontalStackImage({ image1, image2, image3 }) {
   
    return (
     
   <Grid container sx={{mt:4,  justifyContent: 'center' }}>  
   
    <Stack direction="row" spacing={2} >

      {image1} {image2} {image3}

      </Stack>
      
   </Grid>
   
   );
  }