import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
  backgroundColor: theme.palette.grey.C700, 
  borderRadius: '24px',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  marginRight: '2rem',
  marginTop: '2rem',
  
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
     width: 445,
      height: 'auto',
      marginTop: '2rem',
   },[theme.breakpoints.up('lg')]: {
      width: 480,
      height: 'auto',
      marginTop: '2rem',
    },
  [theme.breakpoints.up('xl')]: {
    width: 480,
    height: 'auto',
     
    },

}));

const CardGroupGenetics = (props) => {
    const { content } = props
  
    return (
      <StyledCard elevation= {24}>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardGroupGenetics;