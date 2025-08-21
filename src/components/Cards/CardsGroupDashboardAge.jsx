import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';



const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
  backgroundColor: theme.palette.tertiary.C600, 
  borderRadius: '24px',
    
  [theme.breakpoints.up('xs')]: {
    width: 380,
    height: 'auto',
    padding: '0.1rem',
    marginBottom: '1rem',    
    },
  [theme.breakpoints.up('sm')]: {
    width: 380,
    height: 'auto',
   
    },
  [theme.breakpoints.up('md')]: {
     width: 820,
    height: 'auto',
   
   },[theme.breakpoints.up('lg')]: {
    width: 820,
    height: 'auto',
  
    },
  [theme.breakpoints.up('xl')]: {
      width: 820,
      height: 'auto',
      marginBottom: '2rem',
    },

}));

const CardsGroupDashboardAge = (props) => {
    const {header0, age, card31 } = props
  
return (

<StyledCard>
      
      <CardContent>
      
      <Grid container >   
          <Grid item  xs={12} sx={{ display: 'flex', justifyContent:'center', color: 'common.white', pb: {xs: '2rem', lg: '0.5rem'} }}>{header0} </Grid>
         
          <Grid container spacing={4} sx={{display: 'flex', justifyContent:'center', alignItems: 'center',  ml: {xs: '0.5rem', lg: '0.8rem'}, pt: {lg: '0.8rem'} }}>
         
            <Stack direction = {{xs: "column", md: "row"}} spacing={4}>
              <Grid item> {age} </Grid>
              <Grid item> {card31} </Grid>     
            </Stack>
          
          </Grid>
      
      </Grid>
      
      </CardContent>
      
</StyledCard>

);
  };
  
  export default CardsGroupDashboardAge;