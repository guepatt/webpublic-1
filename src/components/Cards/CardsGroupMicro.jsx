import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({
  
  backgroundColor: theme.palette.primary.C700, 
  borderRadius: '24px',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  marginTop: '2rem',
  
  [theme.breakpoints.up('xs')]: {
    width: 450,
    height: 'auto',
    marginTop: '2rem',
    },
  [theme.breakpoints.up('sm')]: {
      width: 450,
    height: 'auto',
    marginTop: '2rem',
    },
  [theme.breakpoints.up('md')]: {
      width: 450,
    height: 'auto',
    marginTop: '2rem',
   },[theme.breakpoints.up('lg')]: {
      width: 450,
    height: 'auto',
    marginTop: '2rem',
    },
  [theme.breakpoints.up('xl')]: {
      width: 960,
      height: 'auto',
     
    },

}));


const CardGroupMicro = (props) => {
    const { content } = props
  
    return (
      <StyledCard>
       
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default CardGroupMicro;