import Typography from '@mui/material/Typography';


export default function TextCenter({ text, textcolor, textsize }) {
   
    return (
     
          
      <Typography variant={textsize} color={textcolor} textAlign='center'> {text} </Typography>
      
    );
  }