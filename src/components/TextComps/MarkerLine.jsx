import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextCard from './TextCard';
import TextCardRef from './TextCardRef';
import ButtonGene from '../Button/ButtonGene';
import { useTheme } from "@mui/material";


export default function MarkerLine({ marker, textcard, textcardref, value, chart, list, add, info }) {
   
  const theme = useTheme();

    return (
     
     theme.palette.mode === "light" ? (

      <Grid container sx={{mb:2, p:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'grey.C100', borderRadius: '10px'}}> 
                   
          <Grid item xs={1} sm={2} sx={{pl: {xs:0, sm:1}, display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <ButtonGene name={marker} action={() => {"do something"}} />  </Grid> 
          
          <Grid item xs={4} sm={3}  sx={{pl:{xs:3, sm:2}, display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  
                <Stack direction="column">  <TextCard textcard={textcard} /> <TextCardRef textcardref={textcardref} /></Stack> 
          </Grid> 
          
          <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>  {value} </Grid> 
          
          <Grid item xs={2} sm={2} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>  {chart} </Grid> 

          <Grid item xs={1}  sx={{display: 'flex',  justifyContent: {xs:'flex-start', sm: 'flex-end'}, alignItems: 'center', }}>  {list} </Grid> 
          <Grid item xs={1}  sx={{display: 'flex', justifyContent: {xs:'flex-start', sm: 'flex-end'}, alignItems: 'center', }}>  {add} </Grid> 
          <Grid item xs={1}  sx={{display: 'flex',  justifyContent: {xs:'flex-start', sm: 'flex-end'}, alignItems: 'center', }}>  {info} </Grid> 
      
      </Grid>  
      
     ) : (

     <Grid container sx={{mb:2, p:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'secondary.C800', borderRadius: '10px'}}> 
                   
      <Grid item xs={1} sm={2} sx={{pl: {xs:0, sm:1}, display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>   <ButtonGene name={marker} action={() => {"do something"}} />  </Grid> 
      
      <Grid item xs={4} sm={3}  sx={{pl:{xs:3, sm:2}, display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  
            <Stack direction="column">  <TextCard textcard={textcard} /> <TextCardRef textcardref={textcardref} /></Stack> 
      </Grid> 
      
      <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>  {value} </Grid> 
      
      <Grid item xs={2} sm={2} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>  {chart} </Grid> 

      <Grid item xs={1}  sx={{display: 'flex',  justifyContent: {xs:'flex-start', sm: 'flex-end'}, alignItems: 'center', }}>  {list} </Grid> 
      <Grid item xs={1}  sx={{display: 'flex', justifyContent: {xs:'flex-start', sm: 'flex-end'}, alignItems: 'center', }}>  {add} </Grid> 
      <Grid item xs={1}  sx={{display: 'flex',  justifyContent: {xs:'flex-start', sm: 'flex-end'}, alignItems: 'center', }}>  {info} </Grid> 
  
     </Grid>  


     )
      
    );
  }