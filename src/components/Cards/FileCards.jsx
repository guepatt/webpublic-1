import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import HeaderCardSmall from '../Header/HeaderCardSmall';


const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    
    backgroundColor: theme.palette.background.button, 
    borderRadius: '16px',

    
    [theme.breakpoints.down('sx')]: {
        width: 184,
        height: 160
      },
    [theme.breakpoints.up('sm')]: {
        width: 184,
        height: 160
      },
    [theme.breakpoints.up('md')]: {
        width: 184,
        height: 160
     },[theme.breakpoints.up('lg')]: {
        width: 180,
        height: 400,
      },
    [theme.breakpoints.up('xl')]: {
        width: 240,
        height: 330,
        padding: 2,
      },

}));

const CardMediaStyled = styled((props) => (
  <CardMedia {...props} />
))(({ theme }) => ({
  
  
 //opacity: 0.5,
    

  '@media (min-width:1px)': {
      width: theme.spacing(10),
      height: 'auto',
    },
  '@media (min-width:600px)': {
      width: theme.spacing(12),
      height: 'auto',
    },
  '@media (min-width:960px)': {
      width: theme.spacing(14),
      height: 'auto',
    },
  '@media (min-width:1280px)': {
      width: theme.spacing(10),
      height: 'auto',
    },
  '@media (min-width:1740px)': {
    height: theme.spacing(12),
    width: 'auto'
    },
}));


const FileCards = (props) => {
    const {cardheadline, media, content_1, content_2, action } = props
  
    return (
      <StyledCard raised>
        <Grid container >

            <Grid item xs={8} sx={{p:'1rem'}}>
                <HeaderCardSmall cardheadline={cardheadline} /> 
            </Grid>

            <Grid item xs={4} >
                <CardMediaStyled>{media}</CardMediaStyled> 
            </Grid>
        
       
            <Grid container sx={{p:'1rem'}} >  
            
                <Grid item xs={5}> 
                    <Typography variant="h6" color='common.white'  >
                        {content_1}
                    </Typography>
                </Grid>

                <Grid item xs={7}>
                    <Typography variant="h6" color='common.white' >
                        {content_2}
                    </Typography>
                </Grid>
            
            </Grid>
       
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}} >{action} </Grid>

      </Grid>
      </StyledCard>
    );
  };
  
  export default FileCards;