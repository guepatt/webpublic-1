import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
  backgroundColor: theme.palette.primary.C700, 
  borderRadius: '24px',
    
  [theme.breakpoints.up('xs')]: {
     width: 380,
    height: 920,
    paddingTop: '1rem',    
    },
  [theme.breakpoints.up('sm')]: {
    width: 380,
    height: 950,
    
    },
  [theme.breakpoints.up('md')]: {
      width: 380,
    height: 950,
    
   },[theme.breakpoints.up('lg')]: {
      width: 380,
    height: 950,
   
    },
  [theme.breakpoints.up('xl')]: {
      width: 1200,
      height: 420,
    
    },

}));

const CardsGroupDashboard2 = (props) => {
    const {header2, card21, card22, card23, card24, card25, card26, } = props
  
    return (
      <StyledCard>
       
        <CardContent>
        
        <Grid container> 
                          
                          <Grid item  xs={12} sx={{ display: 'flex', justifyContent:'center', color: 'common.white',}}>{header2} </Grid>
                          <Grid container spacing={4} sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                                <Grid item> {card21} </Grid>
                                <Grid item> {card22} </Grid>
                                <Grid item> {card23} </Grid>
                                <Grid item> {card24} </Grid>
                                <Grid item> {card25} </Grid>
                                <Grid item> {card26} </Grid>
                            </Grid>
                         </Grid>
        
        </CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardsGroupDashboard2;