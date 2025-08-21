import React from "react";
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import A1cIcon from "../../components/Icons/A1cIcon";
import CholIcon from "../../components/Icons/CholIcon";
import TriglycIcon from "../../components/Icons/TriglycIcon";
import ApoIcon from "../../components/Icons/ApoIcon";
import InflamIcon from "../../components/Icons/InflamIcon";
import GlucIcon from "../../components/Icons/GlucIcon";
import CortIcon from "../../components/Icons/CortIcon";

import GotIcon from "../../components/Icons/GotIcon";
import SkinIcon from "../../components/Icons/SkinIcon";
import EyeIcon from "../../components/Icons/EyeIcon";
import StoolIcon from "../../components/Icons/StoolIcon";
import SleepIcon from "../../components/Icons/SleepIcon";
import Menstrual from "../../components/Icons/Menstrual";
import Sensor from "../../components/Icons/Sensor";
import Watch from "../../components/Icons/Watch";
import Breath from "../../components/Icons/Breath";
import Fitness from "../../components/Icons/Fitness";


export default function SectionMarker() {

    return (

   
        <Grid container spacing={0} sx={{  mb: 8, pb: 4, }}>
   
        <Grid item xs={2}></Grid>
   
        <Grid  item xs={3}>
                    <Grid container spacing={0} sx={{ mt: 8, pl: 4}}>

                        <Grid  item xs={2} sx={{ mt: 4  }}><A1cIcon /> </Grid>
                        <Grid  item xs={2} sx={{ mt: 4 }}><CholIcon /> </Grid>
                        <Grid  item xs={2} sx={{mt: 4 }}> <TriglycIcon /> </Grid>
                        <Grid  item xs={2} sx={{mt: 4 }}> <ApoIcon /> </Grid>
                        <Grid  item xs={2} sx={{mt: 4 }}> <EyeIcon /> </Grid>
                        <Grid  item xs={2} sx={{mt: 4 }}> <StoolIcon /> </Grid>

                        <Grid  item xs={2} sx={{mt: 4 }}> <SleepIcon /> </Grid>
                        <Grid  item xs={2} sx={{mt: 4 }}> <Breath /> </Grid>
                        <Grid  item xs={2} sx={{ mt: 4 }}><Menstrual /> </Grid>
                        <Grid  item xs={2} sx={{mt: 4 }}> <Sensor /> </Grid>
                        <Grid  item xs={2} sx={{mt: 4 }}> <Watch /> </Grid>
                        <Grid  item xs={2} sx={{mt: 4 }}> <Fitness /> </Grid>
                        
                    
                    </Grid>
        </Grid>

        <Grid  item xs={5} sx={{  pl: { xs: 0, sm: 0, md: 0, lg: 0, xl: 16 }, pt: 8, pb: 8, }} >
                              
                <Typography variant="h1" color='text.brown' gutterBottom align='center'> biometric vitals </Typography>
                <Typography variant="h2"color='text.brown' align='center' sx={{  }} >  markers in the blood</Typography>

                <Typography variant="h4"color='text.brown' align='center' sx={{  }} > 
          
                    <br /><br /><br />
                    trends in blood markers are early signals<br /> and point to potential diseases<br /><br />
                    know your glucose levels, LDL cholesterol and other important markers<br /> and manage them actively to recommended levels
                    

                </Typography>
      
     </Grid>

    </Grid>


)}