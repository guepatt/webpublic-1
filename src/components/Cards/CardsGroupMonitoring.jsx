import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
  backgroundColor: theme.palette.primary.C500, 
  borderRadius: '24px',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  marginTop: '2rem',
  
  
  [theme.breakpoints.up('xs')]: {
      width: 445,
      height: 'auto',
    },
  [theme.breakpoints.up('sm')]: {
    width: 445,
    height: 'auto',
    },
  [theme.breakpoints.up('md')]: {
    width: 445,
    height: 'auto',
   },[theme.breakpoints.up('lg')]: {
      width: 445,
    height: 'auto',
    },
  [theme.breakpoints.up('xl')]: {
      width: 660,
      height: 'auto',
     
    },

}));

const CardsGroupMonitoring = (props) => {
    const { content } = props
  
    return (
      <StyledCard>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardsGroupMonitoring;