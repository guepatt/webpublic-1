import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ButtonCardHeader({ name, action }) {
  return (
    <>
      <Button variant="text" onClick={action} sx={{color: 'common.white', '&:hover': {transform: 'scale(1.1)'}, }}>
            <Typography variant="h4" sx={{fontWeight: 600}}>{name}</Typography>
      </Button>
    </>
  );
}