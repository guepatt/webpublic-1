import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ButtonMain = styled(Button)(({ theme }) => ({
  padding: '10px',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.greydark.C200,
  borderColor: theme.palette.greydark.C200,
  //boxShadow: 'rgba(0,0,0,0.15) 1.95px 1.95px 2.6px',
  //boxShadow: 'none',
  textTransform: 'none',
  borderRadius: '20px',
  transition: 'transform 0.2s ease',
  transform: 'scale(1.1)',

  '&:hover': {
   color: theme.palette.common.white,
   backgroundColor: theme.palette.greydark.C200,
   borderColor: theme.palette.greydark.C200,
   //boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px',
   transform: 'scale(1.2)',
  },

  [theme.breakpoints.up('xs')]: {
    minWidth: 90,
     },
   [theme.breakpoints.up('sm')]: {

    minWidth: 90,
     },
   [theme.breakpoints.up('md')]: {
     minWidth: 100,
    },
    [theme.breakpoints.up('lg')]: {
     minWidth: 100,
     },
   [theme.breakpoints.up('xl')]: {
    minWidth: 100,
   },


}));



export default function ButtonsWeb({ name, action }) {
  return (
    
      <ButtonMain variant="contained" size="large" onClick={action} >
        <Typography variant="button">{name}</Typography>
      </ButtonMain>
    
  );
}