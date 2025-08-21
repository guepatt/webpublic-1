import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CVD_GenFoto } from '../Images/CVD_GenFoto';

const StyledCard = styled((props) => (
    <Card {...props} />
  ))(({ theme }) => ({
   
    backgroundColor: theme.palette.primary.dark, 
    borderRadius: '16px',
    padding: '1rem',
    //boxShadow: "7px 7px 7px #181b1d, -7px -7px 7px #24292d", 
    
    [theme.breakpoints.up('xs')]: {
      width: 320,
      height: 160,
      },
    [theme.breakpoints.up('sm')]: {
      width: 320,
      height: 160,
      },
    [theme.breakpoints.up('md')]: {
      width: 420,
      height: 160,
     },[theme.breakpoints.up('lg')]: {
      width: 420,
      height: 160,
      },
    [theme.breakpoints.up('xl')]: {
        width: 420,
        height: 160,
      },

}));

const MainCardSmall = (props) => {
    const { content } = props
  
    return (
      <StyledCard raised elevation= {12}>
   
        <CardContent>{content}</CardContent>
       
      </StyledCard>
    );
  };
  
  export default MainCardSmall;