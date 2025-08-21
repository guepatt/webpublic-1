import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ButtonMain = styled(Button)(({ theme }) => ({
 
  color: theme.palette.common.white,
  backgroundColor: theme.palette.background.sidebar,
  minWidth: 100,
  boxShadow: 'none',
  textTransform: 'none',
  padding: '8px 18px',
  border: '1px solid',
  borderRadius: '20px',
  borderColor: theme.palette.background.button,
  '&:hover': {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.primary.main,
    boxShadow: 'none',
  },
 
}));



export default function ButtonsCard({ name, action }) {
  return (
    
      <ButtonMain variant="outlined" size="large" onClick={action}>
        <Typography variant="h6" sx={{fontWeight: '500'}} >{name}</Typography>
      </ButtonMain>
    
  );
}