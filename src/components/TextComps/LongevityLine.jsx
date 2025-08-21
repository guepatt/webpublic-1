import Grid from '@mui/material/Grid';
import TextCard from './TextCard';
import { useTheme } from "@mui/material";

export default function LongevityLine({ marker, variant, genotype, effect, icon_1, icon_2}) {
   
  const theme = useTheme();

  return (
     
   theme.palette.mode === "light" ? (


      <Grid container sx={{mb:2, p:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'grey.C100', borderRadius: '10px'}}> 
          <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>  {marker} </Grid>
          <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <TextCard textcard={variant} /> </Grid>  
          <Grid item xs={2}  sx={{display: 'flex', justifyContent: {xs:'center', sm: 'flex-start'}, alignItems: 'center',}}>   <TextCard textcard={genotype} /> </Grid> 
          <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   {effect}  </Grid>  
          <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {icon_1} </Grid> 
          <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {icon_2} </Grid> 
      
      </Grid>    
      
   ) : (

    <Grid container sx={{mb:2, p:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'secondary.C800', borderRadius: '10px'}}> 
    <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>  {marker} </Grid>
    <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <TextCard textcard={variant} /> </Grid>  
    <Grid item xs={2}  sx={{display: 'flex', justifyContent: {xs:'center', sm: 'flex-start'}, alignItems: 'center',}}>   <TextCard textcard={genotype} /> </Grid> 
    <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   {effect}  </Grid>  
    <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {icon_1} </Grid> 
    <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  {icon_2} </Grid> 

</Grid>    


   )

    );
  }