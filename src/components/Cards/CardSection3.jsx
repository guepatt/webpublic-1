import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
  backgroundColor: theme.palette.background.default_var1, 

  paddingTop: '3em', 
  paddingBottom: '6em',
  elevation: 0,
  boxShadow: 'none',
  
  [theme.breakpoints.down('sx')]: {
      width: 184,
      height: 160
    },
  [theme.breakpoints.up('sm')]: {
      width: 184,
      height: 160
    },
  [theme.breakpoints.up('md')]: {
      width: 184,
      height: 160
   },[theme.breakpoints.up('lg')]: {
      width: 180,
      height: 400,
    },
  [theme.breakpoints.up('xl')]: {
      width: 'auto',
      height: 'auto',
     
    },

}));

const CardSection3 = (props) => {
    const { content } = props
  
    return (
      <StyledCard>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardSection3;