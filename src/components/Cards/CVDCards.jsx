import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import HeaderCard from '../Header/HeaderCard';

const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    //backgroundImage: {CVD_GenFoto},
    backgroundColor: theme.palette.quartiary.C900, 
    borderRadius: '16px',
    //boxShadow: "7px 7px 7px #181b1d, -7px -7px 7px #24292d",
    padding: '1rem', 
    
    [theme.breakpoints.up('xs')]: {
        width: 'auto',
        height: 'auto',
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
        width: 520,
        height: 200,
      },

}));

const CVDCards = (props) => {
    const { cardheadline, content } = props
  
    return (
      <StyledCard raised elevation={12}>
   
      <Grid container>
      
        <Grid item xs={3} sx={{ p: '0.5rem'}}> <HeaderCard cardheadline={cardheadline} />  </Grid>
        <Grid item xs={9}> {content} </Grid>
       
        </Grid>
      </StyledCard>
    );
  };
  
  export default CVDCards;