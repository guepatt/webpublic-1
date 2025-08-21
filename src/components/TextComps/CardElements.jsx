import Grid from '@mui/material/Grid';

export default function CardElements({element1, element2, element3}) {

    return(
<>
       

                <Grid container sx={{mb:2, bgcolor: 'grey.C50', borderRadius: '6px'}}>
                
                        <Grid item xs={8} sx={{pl:1, display:'flex', justifyContent:'flex-start', alignItems: 'center'}}> {element1}  </Grid>
                        <Grid item xs={2} >  {element2}  </Grid>
                        <Grid item xs={2} >  {element3} </Grid> 
                
                </Grid>
</>
    )
}