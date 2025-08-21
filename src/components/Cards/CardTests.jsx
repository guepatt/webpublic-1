import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
backgroundColor: theme.palette.background.default, 
marginTop: '6em',
paddingTop: '6em', 
paddingBottom: '6em',
elevation: 0,
boxShadow: 'none',
  
  [theme.breakpoints.down('sx')]: {
    width: 'auto',
    height: 'auto',
    },
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    height: 'auto',
    },
  [theme.breakpoints.up('md')]: {
    width: 'auto',
    height: 'auto',
   },[theme.breakpoints.up('lg')]: {
    width: 'auto',
    height: 'auto',
    },
  [theme.breakpoints.up('xl')]: {
      width: '1600px',
      height: 'auto',
     
    },

}));

const CardTests = (props) => {
    const { content } = props
  
    return (
      <StyledCard>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardTests;