import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
 
  backgroundColor: theme.palette.grey.C050,
  borderColor: theme.palette.grey.C500,
  borderRadius: "12px",  
    
    [theme.breakpoints.up('xs')]: {
        width: 280,
        height: 300,
      },
    [theme.breakpoints.up('sm')]: {
      width: 280,
      height: 300,
      },
    [theme.breakpoints.up('md')]: {
      width: 280,
      height: 300,
     },[theme.breakpoints.up('lg')]: {
      width: 280,
      height: 300,
      },
    [theme.breakpoints.up('xl')]: {
      width: 260,
      height: 300,
      },

}));


const CardFiles = (props) => {
    const {headline, subtext, content_1, content_2, action } = props
  
    return (
      <>

<StyledCard variant="outlined" >
    <CardContent>

     <Grid container>     
     
     <Grid item xs={12}> <Typography variant="h3" textAlign='left' gutterBottom sx={{color: 'common.black'}}>{headline} </Typography>  </Grid>
     <Grid item xs={12}> <Typography variant="body2" textAlign='left' gutterBottom sx={{pl: 0.5,color: 'common.black', }}>{subtext} </Typography>  </Grid>

     <Grid item xs={12} sx={{mt:1, p:1, borderRadius: '8px'}} >   
       
            <Grid container>  
            
                <Grid item xs={6}> 
                    <Typography variant="subtitle1" color='common.black'  >
                        {content_1}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="subtitle1" color='common.black' >
                        {content_2}
                    </Typography>
                </Grid>
            
            </Grid>
       
        </Grid> 

         <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}} >{action} </Grid>

    </Grid>
  </CardContent>
</StyledCard>
</>
    );
  };
  
  export default CardFiles;