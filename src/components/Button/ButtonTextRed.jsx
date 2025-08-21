import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.traffic.red,
  boxShadow: 'rgba(0,0,0,0.15) 1.95px 1.95px 2.6px',
  textTransform: 'none',
  border: '0px solid',
  borderRadius: '12px',
  borderColor: theme.palette.common.white,
  transition: 'transform 0.2s ease',
  
  '&:hover': {
    //color: theme.palette.common.black,
    color: theme.palette.background.button,
    backgroundColor: theme.palette.background.buttonhover,
    borderColor: theme.palette.background.buttonhover,
    boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px',
    transform: 'scale(1.1)',
  },

  [theme.breakpoints.up('xs')]: {
    padding: '10px 12px',
    minWidth: 80,
     },
   [theme.breakpoints.up('sm')]: {
    padding: '10px 18px',
    minWidth: 80,
     },
   [theme.breakpoints.up('md')]: {
     padding: '10px 18px',
     minWidth: 80,
    },
    [theme.breakpoints.up('lg')]: {
     padding: '8px 18px',
     minWidth: 80,
     },
   [theme.breakpoints.up('xl')]: {
    padding: '8px 20px',
    minWidth: 90,
   },


}));



export default function ButtonTextRed({ name, action, }) {
  return (
    
    <Box sx={{ '& button': { m: 0.7, } }}>
      <ButtonStyled size="small" onClick={action}>
        <Typography variant="button" >{name}</Typography>
      </ButtonStyled>
    </Box>
  );
}