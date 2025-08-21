import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    
    //backgroundImage: {CVD_GenFoto},
    backgroundColor: theme.palette.background.button, 
    borderRadius: '16px',
    //boxShadow: "7px 7px 7px #181b1d, -7px -7px 7px #24292d", 
    
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
        width: 500,
        height: 140,
       
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
    height: 'auto',
    width: 'auto'
    },
}));


const MainImageCard = (props) => {
    const { content, iconbuttons, photo } = props
  
    return (
      <StyledCard raised elevation= {12}>
       
            <Grid container sx={{display: 'flex'}}>    
              
                  <Grid item xs={7}>
            
                                <Grid container direction="column" alignItems="left" >
                                    
                                      <CardContent  sx={{ pt:'1rem', pl:'1rem'}}> {content} </CardContent> 
                                      <Box sx={{ display: 'flex', alignItems: 'center', pl: "1rem", }}> 
                                      <Stack direction="row" spacing={1} sx={{ }}> {iconbuttons} </Stack></Box>
                                  
                                  </Grid>  
                  </Grid>           

                  <Grid item xs={5} >      
                    <CardMediaStyled component="img" image={photo} alt="Foto" /> 
                  </Grid>      
                
            </Grid>      
    
    </StyledCard>
    );
  };
  
  export default MainImageCard;

  // CSS flex: 1 1 auto --> size according to width and height, grows to absorb extra free space in flex container, shrinks to minimum size to fit the container