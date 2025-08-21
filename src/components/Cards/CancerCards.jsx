import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    
    backgroundColor: theme.palette.primary.dark, 
    borderRadius: '16px',
    [theme.breakpoints.up('xs')]: {
        width: 280,
        height: 280
      },
    [theme.breakpoints.up('sm')]: {
      width: 280,
      height: 280
      },
    [theme.breakpoints.up('md')]: {
      width: 280,
      height: 280
     },[theme.breakpoints.up('lg')]: {
      width: 280,
      height: 280
      },
    [theme.breakpoints.up('xl')]: {
        width: 280,
        height: 280,
        padding: 2,
      },

}));

const CancerCards = (props) => {
    const {content, actions } = props
  
    return (
      <StyledCard raised>
        <CardContent sx={{mb:0, height: {sx: 60, sm: 60, md: 88, lg: 290, xl: 290},  }}>{content}</CardContent>
        <CardActions>{actions}</CardActions>
      </StyledCard>
    );
  };
  
  export default CancerCards;