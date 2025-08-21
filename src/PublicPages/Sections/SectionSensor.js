import React from "react";
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import BpIcon from '../../components/Icons/BpIcon'
import EcgIcon from "../../components/Icons/EcgIcon";
import GlucIcon from "../../components/Icons/GlucIcon";
import SkinIcon from "../../components/Icons/SkinIcon";
import EyeIcon from "../../components/Icons/EyeIcon";
import StoolIcon from "../../components/Icons/StoolIcon";
import SleepIcon from "../../components/Icons/SleepIcon";
import Menstrual from "../../components/Icons/Menstrual";
import Sensor from "../../components/Icons/Sensor";
import Watch from "../../components/Icons/Watch";
import Breath from "../../components/Icons/Breath";
import Fitness from "../../components/Icons/Fitness";


export default function SectionSensor() {

    return (

    <Grid container spacing={0} sx={{ mt:4,  mb: 4, }}>
   
   <Grid item xs={2}></Grid>
    <Grid  item xs={5} sx={{  pl: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, pt: 8, pb: 8, }} >
                              
          <Typography variant="h1" color='text.brown' gutterBottom align='center'> biosensors</Typography>
          <Typography variant="h2"color='text.brown' align='center' sx={{  }} > integrated in one secure place </Typography>
          <Typography variant="h4"color='text.brown' align='center' sx={{  }} > 
          
                        <br /><br /><br />
                        Medical-grade biosensors available on the market <br />enable you to 
                        measure biometrics<br /> at home, work, sports and during sleep. <br /><br />
                       Integrated biosensor data helps generating <br />early disease warning signals. 
                        
        </Typography>

     </Grid>

     <Grid  item xs={2}>
            <Grid container spacing={0} sx={{ mt: 8,}}>

                 <Grid  item xs={2} sx={{ mt: 4  }}><BpIcon /> </Grid>
                 <Grid  item xs={2} sx={{ mt: 4 }}><EcgIcon /> </Grid>
                 <Grid  item xs={2} sx={{mt: 4 }}> <GlucIcon /> </Grid>
                 <Grid  item xs={2} sx={{mt: 4 }}> <SkinIcon /> </Grid>
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
     <Grid item xs={3}></Grid>
{/*}
        <Grid  item xs={12} sx={{ }}>

        <Card sx={{ maxWidth: 'auto', mt: 2,  }}>
            <CardMedia
            sx={{ height: 640, pb: 0 }}
            image={sensor1}
            />
        </Card>
                     
        </Grid>
*/}

    </Grid>





)}