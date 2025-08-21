import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
    <Paper {...props} />
  ))(({ theme }) => ({
    backgroundColor: theme.palette.grey.C050, 
    borderRadius: "16px",  
        
    [theme.breakpoints.up('xs')]: {
      width: 280,
      height: 'auto',
      
      },
    [theme.breakpoints.up('sm')]: {
      width: 360,
      height: 'auto',
      margin: '1rem',
      paddingLeft: '4rem',
      paddingRight: '4rem',
      paddingTop: '1rem',
    
      },
    [theme.breakpoints.up('md')]: {
      width: 450,
      height: 'auto',
      paddingLeft: '4rem',
      paddingRight: '4rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
     },
     [theme.breakpoints.up('lg')]: {
      width: 400,
      height: 'auto',
      paddingLeft: '4rem',
      paddingRight: '4rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      },
    [theme.breakpoints.up('xl')]: {
      width: 400,
      height: 650,
      paddingLeft: '4rem',
      paddingRight: '4rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      },

}));

const AuthCard = ({ icon, topic, authform, content}) => {
  
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
});

useEffect(() => {
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);


    return (

      <StyledCard elevation= {12} >  
        <CardContent sx={{display: 'grid', placeItems: 'center', }}>
              
        {windowSize.width > 960 ? ( <Avatar sx={{color: 'common.white', bgcolor: 'grey.C900', mb:2 }}>{icon}</Avatar> ):(null)}
              <Typography variant="h3" color='text.brown' gutterBottom sx={{ fontWeight: '400', }}> {topic}  </Typography>
      
              <Box sx={{mt:2}}> {authform} </Box>
        
                    {content}
        
        </CardContent> 
      </StyledCard>
    );
  };
  
  export default AuthCard;