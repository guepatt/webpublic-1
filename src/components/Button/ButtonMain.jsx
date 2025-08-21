import Button from '@mui/material/Button';
import { useTheme } from "@mui/material";


export default function ButtonsMain({ name, action }) {

  const theme = useTheme();

  return (
    
    theme.palette.mode === "light" ? (

      <Button size="large" onClick={action} 
      
                sx={{
                  minWidth: {xs: 80, sm: 90, md: 100, lg: 100, xl: 100},
                  p: '10px',
                  color: 'common.white',
                  bgcolor: 'greydark.C900',
                  borderColor: 'greydark.C900',
                  borderRadius: '20px',
                  transition: 'transform 0.2s ease',
            
                  '&:hover': {
                  color: 'common.white',
                  bgcolor: 'greydark.C900',
                  borderColor: 'greydark.C900',
                  transform: 'scale(1.2)',
                  },

                }}
                
                >
        {name}
      </Button>
    
  ) : (


    <Button size="large" onClick={action} 
      
            sx={{
              minWidth: {xs: 80, sm: 90, md: 100, lg: 100, xl: 100},
              p: '10px',
              color: 'common.black',
              bgcolor: 'grey.C200',
              borderColor: 'grey.C200',
              borderRadius: '20px',
              transition: 'transform 0.2s ease',

              '&:hover': {
              color: 'common.black',
              bgcolor: 'grey.C200',
              borderColor: 'grey.C200',
              transform: 'scale(1.2)',
              },

            }}
          >
        
        {name}
        
    </Button>
  )
  );
}