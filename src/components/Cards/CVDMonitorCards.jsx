import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    
    backgroundColor: theme.palette.primary.C900, 
    borderRadius: '16px',

    
    [theme.breakpoints.up('xs')]: {
        width: 420,
        height: 'auto',
      },
    [theme.breakpoints.up('sm')]: {
      width: 420,
        height: 'auto',
      },
    [theme.breakpoints.up('md')]: {
     width: 420,
        height: 'auto',
     },[theme.breakpoints.up('lg')]: {
      width: 420,
        height: 'auto',
      },
    [theme.breakpoints.up('xl')]: {
        width: 570,
        height: 'auto',
        
      },

}));

const CVDMonitorCards = (props) => {
    const { content } = props
  
    return (
      <StyledCard raised elevation= {16}>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default CVDMonitorCards;