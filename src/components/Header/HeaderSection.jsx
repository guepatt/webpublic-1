import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function HeaderSection({ headline_p1, headline_grey, headline_p2, text1, text2, text3 }) {
   
    return (
     <>

    <Grid container direction="column">
            
            <Grid item>                 
              { <Typography variant="h3" gutterBottom> {headline_p1} 
                            <Typography component="span" variant="h3" sx={{ color: 'grey.dark'}}>  {headline_grey}  </Typography> 
                            {headline_p2} 
                        </Typography>} 
                
                
            </Grid>

            <Grid item>        
              <Typography variant="subtitle1" gutterBottom> {text1} </Typography>
              <Typography variant="subtitle1"> {text2} </Typography>
              <Typography variant="subtitle1"> {text3} </Typography>
            </Grid>
            

    </Grid> 
                  
  </>
    );
  }