import Typography from '@mui/material/Typography';


export default function HeaderCardSmall({ cardheadline }) {
   
    return (
      
              <Typography variant="h4" textAlign='left' sx={{ fontFamily: 'Arial', fontWeight: '600', color:'common.white'}}> 
                  {cardheadline}  
              </Typography>   
              
    );
  }