import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const TextButton = styled(Button)(({ theme }) => ({
 
  color: theme.palette.common.white,
  padding: '4px 4px',
  minWidth: 60,
  boxShadow: 'none',
  textTransform: 'none',
  

  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey.C900,
    borderColor: theme.palette.grey.C900,
    borderRadius: '12px',
    transform: 'scale(1.1)',
   
  },
 
}));



export default function ButtonsText({ size, name, onClick, color, variant }) {

  return (
    
      <TextButton variant="text" size={size} onClick={onClick}>
          <Typography variant={variant} color={color} sx={{fontWeight: 600, '&:hover': {color: 'common.white'} }}>{ name }</Typography>
      </TextButton>

    
  );
}

