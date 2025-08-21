import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    
    backgroundColor: theme.palette.greydark.C900, 
    borderRadius: '12px',

    
    [theme.breakpoints.up('xs')]: {
        width: 400,
        height: 520,
      },
    [theme.breakpoints.up('sm')]: {
      width: 400,
      height: 520,
      },
    [theme.breakpoints.up('md')]: {
      width: 400,
      height: 520,
     },[theme.breakpoints.up('lg')]: {
      width: 400,
      height: 520,
      },
    [theme.breakpoints.up('xl')]: {
        width:  420,
        height: 520,
        
      },

}));

const CvdMikroCardssmall = (props) => {
    const { content } = props
  
    return (
      <StyledCard raised elevation= {12}>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default CvdMikroCardssmall;