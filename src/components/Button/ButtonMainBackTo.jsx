import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ButtonMain = styled(Button)(({ theme }) => ({
  zIndex: 5,
  boxShadow: 'rgba(0,0,0,0.15) 1.95px 1.95px 2.6px',
  textTransform: 'none',
  backgroundColor: theme.palette.background.button,
  borderColor: theme.palette.common.white,
  border: '0px solid',
  borderRadius: '20px',
  transition: 'transform 0.2s ease',
  
  '&:hover': {
    //color: theme.palette.common.black,
    backgroundColor: theme.palette.background.buttonhover,
    borderColor: theme.palette.background.buttonhover,
    boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px',
    transform: 'scale(1.1)',
  },

  '&:active': {
    backgroundColor: theme.palette.background.buttonhover,
    borderColor: theme.palette.background.buttonhover,
    boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px',
    transform: 'scale(1.1)',
  },

  '&:focus': {
    backgroundColor: theme.palette.background.buttonhover,
    borderColor: theme.palette.background.buttonhover,
    boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px',
    transform: 'scale(1.1)',
  },


  [theme.breakpoints.up('xs')]: {
   padding: '6px 16px',
   minWidth: 80,
    },
  [theme.breakpoints.up('sm')]: {
   padding: '8px 18px',
   minWidth: 90,
    },
  [theme.breakpoints.up('md')]: {
    padding: '8px 18px',
    minWidth: 100,
   },
   [theme.breakpoints.up('lg')]: {
    padding: '8px 18px',
    minWidth: 100,
    },
  [theme.breakpoints.up('xl')]: {
   padding: '9px 20px',
   minWidth: 100,
    },


}));




export default function ButtonsMainBackTo({ to }) {
  return (
    
<Link component={RouterLink} to={ to }>
      <ButtonMain variant="outlined" type="submit" size="large" >
        <Typography >BACK</Typography>
      </ButtonMain>
</Link>
    
  );
}

