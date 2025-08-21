import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import HeaderCard from '../Header/HeaderCard';


const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
  backgroundColor: theme.palette.grey.C050,
  borderColor: theme.palette.grey.C500,
  borderRadius: "12px",  
  padding: '1rem',
    
    [theme.breakpoints.up('xs')]: {
        width: 380,
        height: 'auto',
      },
    [theme.breakpoints.up('sm')]: {
      width: 380,
      height: 'auto',
      },
    [theme.breakpoints.up('md')]: {
      width: 380,
      height: 'auto',
     },[theme.breakpoints.up('lg')]: {
      width: 380,
      height: 'auto',
      },
    [theme.breakpoints.up('xl')]: {
        width: 380,
        height: 'auto',
      },

}));

const CVDCardGenetics = (props) => {
    const { cardheadline, content } = props
  
    return (
      <StyledCard variant="outlined">
   
      <Grid container>
      
        <Grid item xs={12} sx={{ p: '0.5rem'}}> <HeaderCard cardheadline={cardheadline} color='primary'></HeaderCard>  </Grid>
        <Grid item xs={12}> {content} </Grid>
       
        </Grid>
      </StyledCard>
    );
  };
  
  export default CVDCardGenetics;