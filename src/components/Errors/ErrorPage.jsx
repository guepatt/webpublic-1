"use client";

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//import PagePublic from '../Page/PagePublic';
import Typography from '@mui/material/Typography';
//import ButtonsMain from '../Button/ButtonMain';


export default function ErrorPage({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
 // error && console.error(error.message)

    return (
    
         
      <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>        
          <Stack spacing={4} direction="column">

            <Typography variant="h3">Sorry, something went wrong !</Typography>
            <Button variant="contained" onClick={ resetErrorBoundary }> Try again </Button>

        </Stack>
      </Grid>
      
    

  )
}