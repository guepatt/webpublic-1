import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function HeaderModule({ headline, subheadline, subheadline2, icon }) {
   
    return (
     
      <Grid container sx={{justifyContent:'center', color: 'common.white' }}>   
      
        <Grid item xs={12}> <Typography variant="h2" textAlign='center' gutterBottom> {headline} </Typography> </Grid>

        <Grid item xs={12}> 
            <Stack direction="column" spacing={0} sx={{mt: '2rem', mb: '2rem', justifyContent:'center'}}>
        
            <Typography variant="h5" textAlign='center' gutterBottom> {subheadline} </Typography> 
            <Typography variant="h5" textAlign='center' gutterBottom> {subheadline2} </Typography> 

            <Box sx={{ pl:4,  }}> {icon} </Box> 
        
            </Stack>
        </Grid>
 
      </Grid>
    );
  }