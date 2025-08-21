import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material";


const WhiteCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({

  backgroundColor: theme.palette.common.white,
  borderColor: theme.palette.grey.C100,
  borderRadius: "10px",
  padding: "1.3em",  
   
  [theme.breakpoints.up('xs')]: {
      width: 230,
      height: 200,
    },
  [theme.breakpoints.up('sm')]: {
      width: 230,
      height: 'auto',
    },
  [theme.breakpoints.up('md')]: {
      width: 230,
      height: 'auto',
   },
   [theme.breakpoints.up('lg')]: {
    width: 230,
      height: 'auto',
    },
  [theme.breakpoints.up('xl')]: {
    width: 230,
    height: 'auto',
    },

}));

const BlackCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({

  backgroundColor: theme.palette.greydark.C700,
  borderColor: theme.palette.greydark.C700,
  borderRadius: "10px",
  padding: "1.3em",  
   
  [theme.breakpoints.up('xs')]: {
      width: 230,
      height: 200,
    },
  [theme.breakpoints.up('sm')]: {
      width: 230,
      height: 'auto',
    },
  [theme.breakpoints.up('md')]: {
      width: 230,
      height: 'auto',
   },
   [theme.breakpoints.up('lg')]: {
    width: 230,
      height: 'auto',
    },
  [theme.breakpoints.up('xl')]: {
    width: 230,
    height: 'auto',
    },

}));



export default function CardMarkerSlim(props) {

  const theme = useTheme();
  
  const {headline, subtext, list, add, info, addtextright, cardlines } = props

return(
<>

{theme.palette.mode === "light" ? (

<WhiteCard variant="outlined" >
    

      <Grid container>   
     
            <Grid item xs={12}> <Typography variant="h3" textAlign='left' gutterBottom sx={{color: 'common.black', }}>{headline} </Typography>  </Grid>
            <Grid item xs={12}> <Typography variant="body2" textAlign='left' gutterBottom sx={{pl: 0.5,color: 'common.black', }}>{subtext} </Typography>  </Grid>
            <Grid item xs={4} sx={{mb:2, display:'flex', justifyContent:'left' }}><Stack direction="row"> {list} {add} {info} </Stack></Grid>
            <Grid item xs={8} sx={{mb:2, display:'flex', justifyContent:'right', alignItems: 'center', }}>{addtextright} </Grid>
            <Grid item xs={12}>{ cardlines }</Grid>  

     </Grid>        
    
</WhiteCard>

):(

<BlackCard variant="outlined" >
    

    <Grid container>   
   
          <Grid item xs={12}> <Typography variant="h3" textAlign='left' gutterBottom sx={{color: 'grey.C010', }}>{headline} </Typography>  </Grid>
          <Grid item xs={12}> <Typography variant="body2" textAlign='left' gutterBottom sx={{pl: 0.5,color: 'grey.C010', }}>{subtext} </Typography>  </Grid>
          <Grid item xs={4} sx={{mb:2, display:'flex', justifyContent:'left' }}><Stack direction="row"> {list} {add} {info} </Stack></Grid>
          <Grid item xs={8} sx={{mb:2, display:'flex', justifyContent:'right', alignItems: 'center', }}>{addtextright} </Grid>
          <Grid item xs={12}>{ cardlines }</Grid>  

   </Grid>        
  
</BlackCard>





)}

</>
)
}

