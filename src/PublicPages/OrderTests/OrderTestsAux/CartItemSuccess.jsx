import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
// import ButtonsMainGoTo from '../../../components/Button/ButtonMainGoTo';


export default function CartItemSuccess() {

  
return (
<>
<Box sx={{ maxWidth: {xs: 440, lg: 1000},  }}>
<Grid container >
    <Grid item xs={6}> <Typography variant="h4" sx={{ml: 1, }}> Product </Typography> </Grid> 
    <Grid item xs={2}> <Typography variant="h4" > Price </Typography></Grid> 
    <Grid item xs={2}> <Typography variant="h4" > Quantity </Typography></Grid> 
    <Grid item xs={2}><Typography variant="h4" > Subtotal </Typography> </Grid> 

    <Grid item xs={12}>  <Divider role="presentation" sx={{mt:2, borderBottomWidth: '2px', borderBottomColor: 'primary.dark' }}/> </Grid>

    <Grid item xs={6}> <Typography variant="h6" sx={{m:2, }}> Whole Genome Sequencing Nanopore<br /> (PromethION - Long Read N50 10kb)</Typography> </Grid> 
    <Grid item xs={2}> <Typography variant="h6" sx={{m:2 }}> € 490,- </Typography> </Grid> 
    <Grid item xs={2}> <Typography variant="h6" sx={{m:2 }}> 1 </Typography> </Grid> 
    <Grid item xs={2}> <Typography variant="h6" sx={{m:2 }}> € 490,- </Typography> </Grid> 
    
    

<Grid item xs={6}> <Typography variant="h6" sx={{m:2, }}> Microbiome Sequencing Nanopore <br />(Ligation Sequencing Kit DNA V14)</Typography> </Grid> 
<Grid item xs={2}> <Typography variant="h6" sx={{m:2 }}> € 290,- </Typography> </Grid> 
<Grid item xs={2}> <Typography variant="h6" sx={{m:2 }}> 1 </Typography> </Grid> 
<Grid item xs={2}> <Typography variant="h6" sx={{m:2 }}> € 290,- </Typography> </Grid> 

<Grid item xs={12}>  <Divider role="presentation" sx={{ borderBottomWidth: '2px', borderBottomColor: 'primary.dark' }}/></Grid>

    <Grid item xs={12} sx={{mt: { lg: '1rem', xl: '2rem', }}}>
    
    <Grid container >

        <Grid item xs={8}></Grid>
        <Grid item xs={4}> 
            <Typography variant="h4" textAlign="center" gutterBottom sx={{pt: 1, }}> TOTAL&nbsp;&nbsp; &nbsp;&nbsp;€ 780,- </Typography>
            
        </Grid>
    
    </Grid>  
   </Grid>

   <Grid item xs={12} sx={{mt: {xs: '1rem', xl: '4rem'}, display: 'flex', justifyContent: 'flex-end' }}>  
   
   <Typography  variant="h6" textAlign="right"> VAT and shipping cost are included in total <br />
                Free subscription period is granted until your test results are available<br /> </Typography>
   </Grid>
   
     </Grid>
     
     </Box>
    

</>
  )
}