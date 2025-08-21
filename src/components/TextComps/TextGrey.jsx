import Typography from '@mui/material/Typography';


export default function TextGrey({ textgrey }) {
   
    return (
               
        <Typography component="span" variant="h2" sx={{ color: 'grey.C400',  }}>
              {textgrey} 
          </Typography>
    );
  }