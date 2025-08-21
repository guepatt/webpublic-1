import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
    
    backgroundColor: theme.palette.greydark.C900, 
    borderRadius: '12px',

    
    [theme.breakpoints.up('xs')]: {
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
        width: 1000,
        height: 300,
        padding: 2,
      },

}));

const CVDMikroCards = (props) => {
    const { content } = props
  
    return (
      <StyledCard raised elevation= {12}>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default CVDMikroCards;