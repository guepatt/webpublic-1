import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
  backgroundColor: theme.palette.grey.C700, 
  borderRadius: '24px',
    
  [theme.breakpoints.up('xs')]: {
    width: 380,
    height: 360,
    paddingTop: '1rem',    
    },
  [theme.breakpoints.up('sm')]: {
    width: 380,
    height: 400,
   
    },
  [theme.breakpoints.up('md')]: {
     width: 380,
    height: 400,
   
   },[theme.breakpoints.up('lg')]: {
    width: 380,
    height: 400,
  
    },
  [theme.breakpoints.up('xl')]: {
      width: 440,
      height: 420,
    },

}));

const CardsGroupDashboard = (props) => {
    const {header1, card11, card12, card13, } = props
  
    return (
      <StyledCard>
       
        <CardContent>
        
        <Grid container >   
                      <Grid item  xs={12} sx={{ display: 'flex', justifyContent:'center', color: 'common.white', }}>{header1} </Grid>
                        
                        <Grid item  xs={12}>
                        <Grid container spacing={4} sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                            <Grid item> {card11} </Grid>
                            <Grid item> {card12} </Grid>
                            <Grid item> {card13} </Grid>
                          </Grid>
                        </Grid>
                    </Grid>
        
        </CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardsGroupDashboard;