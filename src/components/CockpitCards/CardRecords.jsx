import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
   
    backgroundColor: theme.palette.grey.C050,
    borderColor: theme.palette.grey.C500,
    borderRadius: "12px",  
    
    [theme.breakpoints.up('xs')]: {
      width: 320,
      height: 220,
      },
    [theme.breakpoints.up('sm')]: {
      width: 320,
      height: 220,
      },
    [theme.breakpoints.up('md')]: {
      width: 320,
      height: 220,
     },[theme.breakpoints.up('lg')]: {
      width: 320,
      height: 220,
      },
    [theme.breakpoints.up('xl')]: {
        width: 340,
        height: 240,
      },

}));

const CardRecords = (props) => {
    const {headline, subtext, content } = props
  
    return (
      <StyledCard raised elevation= {12}>
   
        <CardContent>
        
        <Grid container>   
     
            <Grid item xs={12}> <Typography variant="h3" textAlign='left' gutterBottom sx={{color: 'common.black', }}>{headline} </Typography>  </Grid>
            
            <Grid item xs={12}> <Typography variant="body2" textAlign='left' gutterBottom sx={{pl: 0.5,color: 'common.black', }}>{subtext} </Typography>  </Grid>
            
            <Grid item xs={12}> {content}  </Grid>
        
        </Grid>

        </CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardRecords;