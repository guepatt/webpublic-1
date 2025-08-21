import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTheme } from "@mui/material";


export default function CardMarkerSmall(props) {

  const theme = useTheme();  
  const {headline, subtext, list, add, info, addtextright, cardlines } = props

return(
<>

{theme.palette.mode === "light" ? (

<Card variant="outlined" sx={{  width: {xs: 440, sm: 540, md: 540, lg: 540, xl: 400}, 
                                height: {xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto', xl: 'auto'}, 
                                bgcolor: 'grey.C50', borderColor: 'grey.C700', borderRadius: "12px",  
                                 }}>
  <CardContent>

      <Grid container>   
     
            <Grid item xs={12}> <Typography variant="h3" textAlign='left' gutterBottom sx={{color: 'common.black', }}>{headline} </Typography>  </Grid>
            <Grid item xs={12}> <Typography variant="body1" textAlign='left' gutterBottom sx={{pl: 0.5,color: 'common.black', }}>{subtext} </Typography>  </Grid>
            <Grid item xs={6} sx={{mb:2, display:'flex', justifyContent:'left' }}><Stack direction="row"> {list} {add} {info} </Stack></Grid>
            <Grid item xs={6} sx={{mb:2, pr:2,  display:'flex', justifyContent:'right', alignItems: 'center' }}>{addtextright} </Grid>
            <Grid item xs={12} >{ cardlines }</Grid>  

     </Grid>        

    </CardContent>
</Card>

):(

  <Card variant="outlined"sx={{   width: {xs: 440, sm: 540, md: 540, lg: 540, xl: 400}, 
                                  height: {xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto', xl: 'auto'}, 
                                  bgcolor: 'secondarydark.C500', borderColor: 'secondarydark.C500', borderRadius: "12px",  
                               }}>
   <CardContent>

      <Grid container>   
     
            <Grid item xs={12}> <Typography variant="h3" textAlign='left' gutterBottom sx={{color: 'common.white', }}>{headline} </Typography>  </Grid>
            <Grid item xs={12}> <Typography variant="body1" textAlign='left' gutterBottom sx={{pl: 0.5,color: 'common.white', }}>{subtext} </Typography>  </Grid>
            <Grid item xs={12} sx={{p:1, pt:4, }}>{ cardlines }</Grid>  

     </Grid>        

</CardContent>
</Card>

)}

</>
 )
}

