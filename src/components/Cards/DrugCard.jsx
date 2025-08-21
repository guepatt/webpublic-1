import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    
    backgroundColor: theme.palette.primary.C800, 
    borderRadius: '16px',
    padding: 4,
    
    [theme.breakpoints.up('sx')]: {
      width: 250,
      height: 650,
      },
    [theme.breakpoints.up('sm')]: {
      width: 250,
      height: 650,
      },
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 650,
     },[theme.breakpoints.up('lg')]: {
      width: 250,
      height: 650,
      },
    [theme.breakpoints.up('xl')]: {
        width: 400,
        height: 680,
        
      },

}));

const Drugcard = (props) => {
    const { content } = props
  
    return (
      <StyledCard raised>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default Drugcard;