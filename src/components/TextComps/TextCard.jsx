import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material";


export default function TextCard({ textcard, color }) {

    const theme = useTheme();
   
    return (

        theme.palette.mode === "light" ? (
               
          <Typography variant="subtitle2" color= 'common.black'>
              {textcard} 
          </Typography>

        ) : (

        <Typography variant="subtitle2" color= 'common.white'>
            {textcard} 
        </Typography>

        )

 );
}