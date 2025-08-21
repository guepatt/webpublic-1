import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material";


export default function TextCardRef({ textcardref }) {

    const theme = useTheme();
   
    return (

        theme.palette.mode === "light" ? (
               
          <Typography variant="subtitle2" color= 'common.black'>
              {textcardref} 
          </Typography>

        ) : (

        <Typography variant="subtitle2" color= 'common.white'>
            {textcardref} 
        </Typography>

        )

 );
}