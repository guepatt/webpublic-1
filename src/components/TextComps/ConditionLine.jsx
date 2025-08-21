import Grid from '@mui/material/Grid';
import TextCard from './TextCard';
import { useTheme } from "@mui/material";


export default function ConditionLine({ textcard, trafficlight, icon_1, icon_2}) {
   
  const theme = useTheme();

    return (
     
      theme.palette.mode === "light" ? (

      <Grid container sx={{mb:2, pr:2, pl:2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'grey.C100', borderRadius: '10px'}}> 

          <Grid item xs={8}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <TextCard textcard={textcard} /> </Grid> 
          <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {trafficlight} </Grid> 
          <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {icon_1} </Grid> 
          <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {icon_2} </Grid> 
      
      </Grid>    
      
      ) : (

        <Grid container sx={{mb:2, pr:2, pl:2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'secondary.C800', borderRadius: '10px'}}> 

        <Grid item xs={8}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <TextCard textcard={textcard} /> </Grid> 
        <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {trafficlight} </Grid> 
        <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {icon_1} </Grid> 
        <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {icon_2} </Grid> 
    
    </Grid>    

    )

    );
  }