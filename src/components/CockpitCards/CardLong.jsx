import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';



const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
 
  backgroundColor: theme.palette.grey.C050,
  borderColor: theme.palette.grey.C500,
  borderRadius: "12px",  
  
  [theme.breakpoints.up('xs')]: {
      width: 300,
      height: 'auto',
    },
  [theme.breakpoints.up('sm')]: {
    width: 340,
      height: 'auto',
    },
  [theme.breakpoints.up('md')]: {
    width: 340,
      height: 'auto',
   },[theme.breakpoints.up('lg')]: {
    width: 340,
      height: 'auto',
    },
  [theme.breakpoints.up('xl')]: {
    width: 300,
    height: 'auto',
    },

}));



export default function CardLong(props) {
  
  const {headline, subtext, icon_1, icon_2, content, } = props

return(
<>

<StyledCard variant="outlined" >
    <CardContent>

     <Grid container>     
     
     <Grid item xs={12}> <Typography variant="h3" textAlign='left' gutterBottom sx={{color: 'common.black'}}>{headline} </Typography>  </Grid>
     <Grid item xs={12}> <Typography variant="body2" textAlign='left' gutterBottom sx={{pl: 0.5,color: 'common.black', }}>{subtext} </Typography>  </Grid>
    
     <Grid item xs={12} sx={{pt:2, borderRadius: '8px'}} >  {content}    </Grid> 
      
    </Grid>
    </CardContent>
</StyledCard>
</>
)
}2

