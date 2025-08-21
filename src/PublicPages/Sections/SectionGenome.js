import React from "react";
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import {dna_go} from '../../constants' 

export default function SectionGenome() {

    return (

    <Grid container spacing={0} sx={{  mt:8, mb: 0, pb: 16, bgcolor: 'secondary.light' }}>
   
   <Grid item xs={3}></Grid>

       <Grid  item xs={3}>
       
        <Card sx={{ maxWidth: 'auto', mt: 16, borderRadius: '16px', filter: 'grayscale(0%)',  }}>
            <CardMedia
            sx={{ height: 360, pb: 0 }}
            image={dna_go}
            />
        </Card>

      </Grid>

    <Grid  item xs={4} sx={{   pl: { xs: 0, sm: 0, md: 0, lg: 0, xl: 16 }, pt: 16, pb: 4, }} >
                              
          <Typography variant="h1" color='text.brown' gutterBottom align='center'> genome signature</Typography>
          <Typography variant="h2"color='text.brown' align='center' sx={{  }} > each individual's genome is unique </Typography>
          <Typography variant="h4"color='text.brown' align='center' sx={{  }} > 
          
                        <br /><br /><br />
                        While humans share the same repertoire of genes<br /> and regulatory elements, the underlying sequences are diverse  <br /><br />
                        Knowing your individual types of variation <br /> is the entry door for personalized medicine 

                        
        </Typography>

     </Grid>

     
     <Grid item xs={2}></Grid>
{/*}
        <Grid  item xs={12} sx={{ }}>

       
                     
        </Grid>
*/}

    </Grid>

)}