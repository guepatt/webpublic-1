import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
  backgroundColor: theme.palette.primary.dark, 
  borderRadius: '24px',
  padding: '1rem',
    
  [theme.breakpoints.up('xs')]: {
      width: 445,
      height: 'auto',
      marginTop: '2rem',
    },
  [theme.breakpoints.up('sm')]: {
      width: 445,
      height: 'auto',
      marginTop: '2rem',
    },
  [theme.breakpoints.up('md')]: {
    width: 1000,
      height: 'auto',
     
   },[theme.breakpoints.up('lg')]: {
      width: 1000,
      height: 'auto',
     
    },
  [theme.breakpoints.up('xl')]: {
    width: 1450,
    height: 'auto',
     
    },

}));

const CardGroupDrugs = (props) => {
    const { content } = props
  
    return (
      <StyledCard elevation= {24}>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardGroupDrugs;