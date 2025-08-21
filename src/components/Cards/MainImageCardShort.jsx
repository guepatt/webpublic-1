import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import HeaderCardSmall from '../Header/HeaderCardSmall';


const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    
    //backgroundImage: {CVD_GenFoto},
    backgroundColor: theme.palette.primary.dark, 
    borderRadius: '16px',
    
    [theme.breakpoints.up('xs')]: {
        width: 340,
        height: 180
      },
    [theme.breakpoints.up('sm')]: {
      width: 340,
      height: 180
      },
    [theme.breakpoints.up('md')]: {
      width: 340,
      height: 180
     },[theme.breakpoints.up('lg')]: {
      width: 340,
      height: 180
      },
    [theme.breakpoints.up('xl')]: {
        width: 400,
        height: 180,
       
      },

}));

const CardMediaStyled = styled((props) => (
  <CardMedia {...props} />
))(({ theme }) => ({
  
  
 //opacity: 0.5,
    

  '@media (min-width:1px)': {
      width: theme.spacing(14),
      height: 'auto',
    },
  '@media (min-width:600px)': {
      width: theme.spacing(14),
      height: 'auto',
    },
  '@media (min-width:960px)': {
      width: theme.spacing(14),
      height: 'auto',
    },
  '@media (min-width:1280px)': {
      width: theme.spacing(14),
      height: 'auto',
    },
  '@media (min-width:1740px)': {
    height: theme.spacing(14),
    width: 'auto'
    },
}));


const MainImageCardShort = (props) => {
    const { cardheadline, content, iconbuttons, photo, action, bottomline} = props
  
    return (
      <StyledCard raised elevation= {12}>
       
            <Grid container sx={{display: 'flex',}}>    
              
                  <Grid item xs={8}>
            
                                <Grid container direction="column">
                                    
                                    <Grid item sx={{ p: '1.2rem',}}>
                                        <HeaderCardSmall cardheadline={cardheadline} /> 
                                        {content} 
                                    </Grid>
                                    
                                  <Grid item sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>
                                       <Stack direction="row" spacing={2} sx={{ p: '1rem'}}>{iconbuttons}</Stack> 
                                  </Grid>    
                                      
                              </Grid>  
              </Grid>           

                  <Grid item xs={4} >      
                    <CardMediaStyled component="img" image={photo} alt="Foto" /> 
                    <Grid item xs={12}>  {action}     </Grid>
                  </Grid>      

                  <Grid item xs={12}> {bottomline}   </Grid>
                
                 

            </Grid>      
    
    </StyledCard>
    );
  };
  
  export default MainImageCardShort;