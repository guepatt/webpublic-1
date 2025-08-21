import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ButtonMain = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.greydark.C200,
  borderColor: theme.palette.greydark.C200,
  boxShadow: 'rgba(0,0,0,0.15) 1.95px 1.95px 2.6px',
  //boxShadow: 'none',
  textTransform: 'none',
  borderRadius: '24px',
  transition: 'transform 0.2s ease',

  '&:hover': {
    color: theme.palette.common.white,
  backgroundColor: theme.palette.greydark.C200,
  borderColor: theme.palette.greydark.C200,
    boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px',
    transform: 'scale(1.2)',
  },


  [theme.breakpoints.up('xs')]: {
    padding: '10px 12px',
    minWidth: 80,
     },
   [theme.breakpoints.up('sm')]: {
    padding: '10px 18px',
    minWidth: 90,
     },
   [theme.breakpoints.up('md')]: {
     padding: '10px 18px',
     minWidth: 100,
    },
    [theme.breakpoints.up('lg')]: {
     padding: '14px 18px',
     minWidth: 100,
     },
   [theme.breakpoints.up('xl')]: {
    padding: '14px 20px',
    minWidth: 100,
   },


}));



export default function ButtonsWebHighlight({ name, action }) {
  return (
    
      <ButtonMain variant="outlined" size="large" onClick={action} >
        <Typography variant="button">{name}</Typography>
      </ButtonMain>
    
  );
}