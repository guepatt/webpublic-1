import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import {micro} from '../../constants'

export default function SectionMicro() {

    return (

    
        <Grid container spacing={0} sx={{  mt:16, mb: 8, pb: 8, bgcolor: 'background.default_3' }}>
   
        <Grid item xs={2}></Grid>
        

        <Grid  item xs={5} sx={{   pl: { xs: 0, sm: 0, md: 0, lg: 0, xl: 16 }, pt: 20, pb: 12, }} >      
        <Typography variant="h1" color='text.brown' gutterBottom align='center'>  microbiome signature</Typography>
        <Typography variant="h2"color='text.brown' align='center' sx={{  }} > a key element in precision health </Typography>

        <Typography variant="h4"color='text.brown' align='center' sx={{  }} > 
          
          <br /><br /><br />
         
          our microbiomes differ remarkably in the microbes that occupy habitats such as gut and skin<br />
          due to lifestyle, environment, host genetics and early microbial exposure<br /><br />
          
         </Typography>
         </Grid>
   
         <Grid  item xs={2}>
        
        <Card sx={{ maxWidth: 'auto', mt: 16, borderRadius: '16px', filter: 'grayscale(10%)', ml: 8  }}>
            <CardMedia
            sx={{ height: 380, pb: 0 }}
            image={micro}
            />
        </Card>

</Grid>
    <Grid item xs={3}></Grid>
    </Grid>





)}