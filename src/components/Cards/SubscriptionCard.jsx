import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import CardMedia from '@mui/material/CardMedia';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import HeaderCardSmall from '../Header/HeaderCardSmall';


const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    
    //backgroundImage: {CVD_GenFoto},
    backgroundColor: theme.palette.primary.C900, 
    borderRadius: '14px',
    minHeight: "350px", 
    
    [theme.breakpoints.up('xs')]: {
        width: 340,
        height: 105,
      },
    [theme.breakpoints.up('sm')]: {
        width: 340,
        height: 105,
      },
    [theme.breakpoints.up('md')]: {
        width: 340,
        height: 105,
     },[theme.breakpoints.up('lg')]: {
       width: 340,
        height: 105,
      },
    [theme.breakpoints.up('xl')]: {
        width: 340,
        height: 120,
       
      },

}));

const CardMediaStyled = styled((props) => (
  <CardMedia {...props} />
))(({ theme }) => ({
  
  
 //opacity: 0.5,
    

  '@media (min-width:1px)': {
      width: theme.spacing(16),
      height: 'auto',
    },
  '@media (min-width:600px)': {
      width: theme.spacing(16),
      height: 'auto',
    },
  '@media (min-width:960px)': {
      width: theme.spacing(16),
      height: 'auto',
    },
  '@media (min-width:1280px)': {
      width: theme.spacing(16),
      height: 'auto',
    },
  '@media (min-width:1740px)': {
    height: theme.spacing(16),
    width: 'auto'
    },
}));


const SubscriptionCard = (props) => {
    const { cardheader, content, action} = props
  
    return (
      <StyledCard raised elevation= {12}>
       
       <CardHeader sx={{ bgcolor: 'tertiary.dark' }} > {cardheader} </CardHeader>                                      
                                      
                                      
        <CardContent> {content} </CardContent>  

        <CardActions> {action} </CardActions>
    
    </StyledCard>
    );
  };
  
  export default SubscriptionCard;

  // CSS flex: 1 1 auto --> size according to width and height, grows to absorb extra free space in flex container, shrinks to minimum size to fit the container