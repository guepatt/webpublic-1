import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function TextNumberOrange({ textnumberorange, color, metrics }) {
   
    return (
      <Box sx={{minWidth: '6rem', border: '1px solid', borderColor: 'grey.C300', borderRadius: '6px', pl: '8px', pr: '8px', }}>
              <Typography variant="h6" textAlign={'right'} 
                        sx={{fontFamily: 'Poppins', fontWeight: '500',  color: 'traffic.orange', }}>
              {textnumberorange} <Typography component="span"> {metrics} </Typography>
            </Typography>
            </Box>
    );
  }