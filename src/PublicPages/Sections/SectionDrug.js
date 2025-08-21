import React from "react";
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { cb1 } from "../../constants"

import {Clock} from '../StartPage/Images/Clock'

export default function SectionDrug() {

    return (


   
    <Grid container spacing={0} sx={{ pt: 16, }}   >
   
       <Grid item xs={2}></Grid>
    
        <Grid  item xs={5} sx={{ pl: { xs: 0, sm: 0, md: 0, lg: 0, xl: 4 }, mt:4,  mb:8,}} >
                              
                              <Typography variant="h1" color='text.brown' gutterBottom align='center'> drug type </Typography>
                              <Typography variant="h2"color='text.brown' align='center' sx={{  }} > doctor, please know my drug type </Typography>

                              <Typography variant="h4"color='text.brown' align='center' sx={{  }} > 
                              <br /><br /><br />
                              your individual gene variants tell you&nbsp;:<br /><br /> what drugs work for me&nbsp;?<br />
                              what is the right drug dose for me&nbsp;?<br />what drugs should I stay away&nbsp;?

                              </Typography>
                          
         </Grid>

              <Grid  item xs={2} sx={{ }}>
                      <Card sx={{ maxWidth: 'auto', borderRadius: '16px', filter: ('greyscale(5%)'),  }}>

                          <CardMedia
                              sx={{ height: 440,  }}
                              image={cb1}
                            />
                     
                     </Card>
     </Grid>

     <Grid item xs={3}></Grid>

    </Grid>





)}