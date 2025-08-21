import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function HeaderBig({ headline, subheadline, icon }) {
   
    return (
     <>

    <Grid container sx={{ justifyContent:'center'}}>
    
    <Stack direction="column" spacing={2} sx={{ }}>
    
         <Grid item xs={12}> <Typography variant="h2" color='text.brown' textAlign='center' gutterBottom> {headline} </Typography> </Grid>
              
         <Grid item xs={12} >      
         
              <Stack direction="row" spacing={2} sx={{ justifyContent:'center'}}>
         
                <Typography variant="h3" color='text.brown' textAlign='center' sx={{pt:1}} > {subheadline} </Typography>  
                <Box component="span" sx={{ pl:4,  }}> {icon} </Box>   
                
              
                </Stack>
          
          </Grid>
          </Stack>
    </Grid>
    
                  
  </>
    );
  }