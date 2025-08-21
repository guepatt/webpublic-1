import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function LongevityLineHeader({one, two, three, four, five, six}) {
   
    return (
     
      <Grid container sx={{mb:3, ml:1.3, pl:2, pr:2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}> 
          <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>  <Typography variant="subtitle2" sx={{fontWeight: 500}}>{one}</Typography> </Grid>
          <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>    <Typography variant="subtitle2" sx={{fontWeight: 500}}>{two} </Typography></Grid>  
          <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>    <Typography variant="subtitle2" sx={{fontWeight: 500}}>{three} </Typography></Grid> 
          <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <Typography variant="subtitle2" sx={{fontWeight: 500}}> {four} </Typography> </Grid>  
          <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <Typography variant="subtitle2" sx={{fontWeight: 500}}>{five} </Typography></Grid> 
          <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <Typography variant="subtitle2" sx={{fontWeight: 500}}>{six} </Typography></Grid> 
      
      </Grid>    
      
    );
  }