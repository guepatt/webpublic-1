import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Clock} from './Images/Clock'

export default function SectionClock() {

    return (

<Grid container spacing={0} sx={{  mt:'50rem', mb: 16, pb: 4, bgcolor: 'background.bluelight'}}>

    <Grid item xs={2}></Grid>

    
    <Grid  item xs={4} sx={{ pl: { xs: 0, sm: 0, md: 0, lg: 0, xl: 4 }, mt:12,  pb: 8, mb:8,}} >
                              
            <Typography variant="h1" color='text.brown' gutterBottom align='center'> aging clock </Typography>
            <Typography variant="h2"color='text.brown' align='center' sx={{  }} > slow the speed of aging</Typography>

            <Typography variant="h4"color='text.brown' align='center' sx={{  }} > 
                                    <br /><br /><br />
                epigenetic clocks predict the individual biological age<br /> and risk of age-related diseases<br /><br />
                you can slow down your aging clock's speed<br /> by actively managing the hallmarks of aging
                
            </Typography>
      
     </Grid>

        <Grid  item xs={4} sx={{ }}>

                <Box  sx={{ flex: 1, p: 8, pt: 12, pl: 16 }} > <Clock />   </Box>
                     
        </Grid>

        <Grid item xs={2}></Grid>
    </Grid>



)}