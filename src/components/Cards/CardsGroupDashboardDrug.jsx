import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
  backgroundColor: theme.palette.quartiary.C600, 
  borderRadius: '24px',
    
  [theme.breakpoints.up('xs')]: {
    width: 380,
    height: 'auto',
    paddingTop: '1rem',    
    },
  [theme.breakpoints.up('sm')]: {
    width: 380,
    height: 'auto',
   
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
      paddingLeft: '1rem',
    },

}));

const CardsGroupDashboardDrug = (props) => {
    const {header4, card41, card42, card43, } = props
  
    return (
      <StyledCard>
       
        <CardContent>
        
        <Grid container >   
                      <Grid item  xs={12} sx={{ display: 'flex', justifyContent:'center', color: 'common.white', }}>{header4} </Grid>
                        
                        <Grid item  xs={12}>
                        <Grid container spacing={4} sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                            <Grid item> {card41} </Grid>
                            <Grid item> {card42} </Grid>
                            <Grid item> {card43} </Grid>
                          </Grid>
                        </Grid>
                    </Grid>
        
        </CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardsGroupDashboardDrug;