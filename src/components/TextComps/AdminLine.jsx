import Grid from '@mui/material/Grid';
import TextCard from './TextCard';
import { useTheme } from "@mui/material";

export default function AdminLine({ topic, value, update, }) {
   
  const theme = useTheme();

    return (
     
      theme.palette.mode === "light" ? (

      <Grid container sx={{mb:2, p:1, pl:2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'grey.C100', borderRadius: '10px'}}> 
          <Grid item xs={4}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'common.black'}}>   <TextCard textcard={topic} /> </Grid> 
          <Grid item xs={5}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'common.black'}}>   <TextCard textcard={value} /> </Grid> 
          <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'common.black'}}>    {update} </Grid> 
      </Grid>    
      
    ) : (

    <Grid container sx={{mb:2, p:1, pl:2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'secondary.C800', borderRadius: '10px'}}> 
      <Grid item xs={4}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'common.black'}}>   <TextCard textcard={topic} /> </Grid> 
      <Grid item xs={5}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'common.black'}}>   <TextCard textcard={value} /> </Grid> 
      <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'common.black'}}>    {update} </Grid> 
    </Grid>   
  )

 );
}