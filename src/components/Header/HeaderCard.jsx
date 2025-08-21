import Typography from '@mui/material/Typography';


export default function HeaderCard({ cardheadline }) {
   
    return (
              <Typography variant="h3" textAlign='left' gutterBottom sx={{color: 'common.black', }}> 
                  {cardheadline}  
              </Typography>   
              
    );
  }