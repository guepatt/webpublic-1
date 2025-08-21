import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextCard from './TextCard';
import TextCardRef from './TextCardRef';
import ButtonGene from '../Button/ButtonGene';
import { useTheme } from "@mui/material";


export default function MarkerLineShort({ marker, textcard, textcardref, value, chart,}) {
   
  const theme = useTheme();

    return (

      theme.palette.mode === "light" ? (
     
      <Grid container sx={{mb:2, p:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap:'wrap', bgcolor: 'grey.C100', borderRadius: '10px'}}> 
                   
          <Grid item xs={3}  sx={{pl:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <ButtonGene name={marker} action={() => {"do something"}} />  </Grid> 
          
          <Grid item xs={3}  sx={{pl:0.5, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap:'wrap'}}>  
                <Stack direction="column">  <TextCard textcard={textcard} /> <TextCardRef textcardref={textcardref} /></Stack> 
          </Grid> 
          
          <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>  {value} </Grid> 
          
          <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>  {chart} </Grid>
      
      </Grid>    
      
  ) : (

  <Grid container sx={{mb:2, p:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap:'wrap', bgcolor: 'secondary.C800', borderRadius: '10px'}}> 
                   
      <Grid item xs={3}  sx={{pl:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <ButtonGene name={marker} action={() => {"do something"}} />  </Grid> 
      
      <Grid item xs={3}  sx={{pl:0.5, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap:'wrap'}}>  
            <Stack direction="column">  <TextCard textcard={textcard} /> <TextCardRef textcardref={textcardref} /></Stack> 
      </Grid> 
      
      <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>  {value} </Grid> 
      
      <Grid item xs={3}  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>  {chart} </Grid>

</Grid>    

  )
      
)
}