import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function ButtonGene({ name, action, }) {

  return (
    
    <Box sx={{ '& button': {  } }}>
      <Button size="small" onClick={action} disabled 
      
      sx={{
                  minWidth: {xs: 50, sm: 70, md: 70, lg: 70, xl: 70},
                  p: '6px',
                  color: 'common.white',
                  bgcolor: 'greydark.C700',
                  borderColor: 'greydark.C700',
                  borderRadius: '10px',
                  transition: 'transform 0.2s ease',
                }}
      >
        <Typography variant="body2" sx={{color: 'common.white', fontWeight: 400}} >{name}</Typography>
      </Button>
    </Box>
  );
}