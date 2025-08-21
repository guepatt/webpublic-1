import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function BaseFooter() {
    
return (
<>
<AppBar position="fixed" sx={{width: '100dvw', height: {xs: '20svh', md: '12svh'}, zIndex: 1, top: 'auto', bottom: 0, bgcolor: 'background.greydark2', p: '2rem',  }}>
<Toolbar sx={{  ml: {xs: 2, sm: 4, md: 8, lg: 8, xl: 8 }, 
                          mr: {xs: 2, sm: 4, md: 8, lg: 8, xl: 8 }, 
                          maxWidth: {xs: '98%', sm: '98%', md: '98%', lg: '98', xl: '98'}, }}>
    <Grid container>

        <Grid item xs={4} sm={3} md={2} lg={2}>  <Stack direction="column" spacing={1}> 
            
                                    <Typography variant="body2" color='common.white' > Terms of Service</Typography>    
                                    <Typography variant="body2" color='common.white' > Privacy Policy</Typography>     
                                    <Typography variant="body2" color='common.white' > Security</Typography>
                                    <Typography variant="body2" color='common.white' > Legal Disclosure</Typography>
        
                                </Stack>   
        </Grid>
        
        <Grid item xs={4} sm={2} md={2} lg={2}>  <Stack direction="column" spacing={1}> 
            
                                    <Typography variant="body2" color='common.white' > About us</Typography>    
                                    <Typography variant="body2" color='common.white' > Contact</Typography>     
                                    
                                   
                                    <Typography variant="body2" color='common.white' > Press</Typography>
                                    <Typography variant="body2" color='common.white' > Career</Typography>
        
        
                                </Stack>   
        </Grid>
        
        <Grid item xs={4} sm={3} md={2} lg={1} xl={2}>  <Stack direction="column" spacing={1}> 
                                  
                                            <Typography variant="body2" color='common.white' > FAQ</Typography>
                                            <Typography variant="body2" color='common.white' > Service Center</Typography>
                                            <Typography variant="body2" color='common.white' > Community</Typography>    
                                            <Typography variant="body2" color='common.white' > Blog</Typography>     
    
                                        </Stack>   
        </Grid>
        
        <Grid item xs={12} md={3} lg={3} xl={3} sx={{pt: {xs: 2, md: 0}, pl: {md: 4, lg: 8, xl: 16} }}> <Stack direction="row" spacing={4}>

                            <LinkedInIcon sx={{color: 'common.white'}} />
                            <FacebookIcon sx={{color: 'common.white'}} />
                            <InstagramIcon sx={{color: 'common.white'}} />
                            <TwitterIcon sx={{color: 'common.white'}} />

                        </Stack>   </Grid>
    
        <Grid item xs={12} md={3} sx={{pt: {xs: 2, md: 0}, pl: {md: 4, lg: 8, xl: 8} }}>  
            <Typography variant="body2" color='common.white' >
                {"copyright © speak23"} &nbsp;&nbsp; - &nbsp;&nbsp;{"all rights reserved"}&nbsp; {new Date().getFullYear()}
            </Typography> 
        </Grid>

    </Grid>
  </Toolbar>
</AppBar>
</>
)}