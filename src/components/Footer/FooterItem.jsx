import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

export default function FooterItem({ text, footerlink, textcolor  }) {
   
    return (
     
      <ListItem disablePadding sx={{p:'0.4em', display: "block", width: "auto"}}> <Link href={footerlink} underline = 'none' target="_blank" rel="noreferrer">  
        <Typography variant="subtitle1" color={textcolor} > {text} </Typography>  </Link> 
      </ListItem>
      
    );
  }