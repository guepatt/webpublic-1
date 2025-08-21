import Grid from '@mui/material/Grid';
import TextCard from './TextCard';


export default function SubLine({ topic, value,}) {
   
    return (
     
      <Grid container sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}> 

          <Grid item xs={5}  sx={{p:0.3, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'common.black'}}>   <TextCard textcard={topic} /> </Grid> 
          <Grid item xs={7}  sx={{p:0.3, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'common.black'}}>   <TextCard textcard={value} /> </Grid> 
      
      </Grid>    
      
    );
  }