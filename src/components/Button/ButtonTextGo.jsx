import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useTheme } from "@mui/material";



export default function ButtonsTextGoTo({ to, name }) {

  const theme = useTheme();

  return (
    
    theme.palette.mode === "light" ? (

        <Link component={RouterLink} to={ to }>
              <Button variant="text" size="large" 
              sx={{
                          minWidth: {xs: 80, sm: 90, md: 100, lg: 100, xl: 100},
                          p: '10px',
                          color: 'greydark.C900',
                          transition: 'transform 0.2s ease',
                    
                          '&:hover': {
                          color: 'greydark.C900',
                          borderRadius: '20x',
                          transform: 'scale(1.2)',
                          },

                        }}>
                { name }
              </Button>
        </Link>

  ) : (

    <Link component={RouterLink} to={ to }>
        <Button variant="text" size="large" 
            sx={{
                        minWidth: {xs: 80, sm: 90, md: 100, lg: 100, xl: 100},
                        p: '10px 12px',
                        color: 'grey.C200',
                        transition: 'transform 0.2s ease',
                  
                        '&:hover': {
                        color: 'grey.C200',
                        borderRadius: '20px',
                        transform: 'scale(1.2)',
                        },

                      }}
            >
          
          { name }
        
        </Button>
  </Link>


  )

  );
}

