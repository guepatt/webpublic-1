import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({

  backgroundColor: theme.palette.grey.C050,
    borderColor: theme.palette.grey.C500,
    borderRadius: "12px",  
   
  [theme.breakpoints.up('xs')]: {
      width: 340,
      height: 'auto',
    },
  [theme.breakpoints.up('sm')]: {
    width: 340,
      height: 'auto',
    },
  [theme.breakpoints.up('md')]: {
    width: 340,
      height: 'auto',
   },
   [theme.breakpoints.up('lg')]: {
    width: 340,
      height: 'auto',
    },
  [theme.breakpoints.up('xl')]: {
    width: 500,
    height: 'auto',
    },

}));



export default function CardSmall(props) {
  
  const {headline, subtext, icon_1, icon_2, leftcontent, rightcontent, chart, textlines, cardlines, forms } = props

return(
<>

<StyledCard variant="outlined" >
    <CardContent>

     <Grid container>   
     
            <Grid item xs={12}> <Typography variant="h3" textAlign='left' gutterBottom sx={{color: 'common.black', }}>{headline} </Typography>  </Grid>
            
            <Grid item xs={12}> <Typography variant="body2" textAlign='left' gutterBottom sx={{pl: 0.5,color: 'common.black', }}>{subtext} </Typography>  </Grid>
            
            <Grid container>
            
                  <Grid item xs={5}>    
                    <Grid container direction="column">  
                    <Grid item xs={12}> <Stack direction="row"> {icon_1} {icon_2} </Stack></Grid>
                        <Grid item > {leftcontent} </Grid> 
                        <Grid item > {textlines} </Grid> 
                    </Grid>
                  </Grid>

                  <Grid item xs={7} sx={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center' }}>     
                      <Grid container direction="column">     
                          <Grid item>{chart}</Grid>
                          <Grid item > {rightcontent} </Grid>
                      </Grid>
                  </Grid>      
            </Grid>
          
            <Grid item xs={12} sx={{pl:1, pt:2, }}>{ cardlines }</Grid>  
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center' }}>{ forms }</Grid>  

     </Grid>        
    </CardContent>
</StyledCard>
</>
)
}

