import Button from '@mui/material/Button';
import { useTheme } from "@mui/material";
import Grid from '@mui/material/Grid';


export default function ButtonForm({ name}) {

  const theme = useTheme();

  return (

    theme.palette.mode === "light" ? (


    <Grid container sx={{ mt: {xs:4, md: 4}, display: 'flex', justifyContent: 'center'}}>

      <Button variant="outlined" type="submit" size="large" 
      
              sx={{
              
                  minWidth: {xs: 80, sm: 90, md: 100, lg: 100, xl: 100},
                  p: '10px 12px',
                  color: 'common.white',
                  bgcolor: 'greydark.C900',
                  borderColor: 'greydark.C900',
                  borderRadius: '20px',
                  transition: 'transform 0.2s ease',
            
                  '&:hover': {
                  color: 'common.white',
                  bgcolor: 'greydark.C900',
                  borderColor: 'greydark.C900',
                  borderRadius: '20px',
                  transform: 'scale(1.2)',
                  },

                }}>
          {name}  
      </Button>
     
   </Grid>

  ) : (

    <Grid container sx={{ mt: {xs:4, md: 4}, display: 'flex', justifyContent: 'center'}}>

    <Button variant="outlined" type="submit" size="large" 
    
            sx={{
            
                minWidth: {xs: 80, sm: 90, md: 100, lg: 100, xl: 100},
                p: '10px 14px',
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
 </Grid>

  )

  );
}