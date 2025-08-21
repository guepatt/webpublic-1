import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import List from '@mui/material/List';
import FooterItem from './FooterItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function FooterEnd() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
        });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
    
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

return (
<>

{theme.palette.mode === "light" ? (

    <Grid container sx={{ bgcolor: colors.greydark[900], p: '4rem'  }}>
        
        <Grid item xs={4} sm={3} md={2} lg={2} sx={{display:'center', justifyContent:'center'}}>  
        
            <List sx={{marginBottom: "0", padding: "0", marginTop: "0" }}>
                <FooterItem text="Terms of Service" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Privacy Policy" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Security" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Legal Disclosure" footerlink="#" textcolor={colors.grey[10]} />
            </List>                 
        </Grid>
        
        <Grid item xs={4} sm={2} md={2} lg={2}  xl={3} sx={{display:'center', justifyContent:'center'}}>  

            <List sx={{marginBottom: "0", padding: "0", marginTop: "0" }}>
                <FooterItem text="About us" footerlink="#" textcolor={colors.grey[10]}/>
                <FooterItem text="Contact" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Press" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Career" footerlink="#" textcolor={colors.grey[10]} />
            </List>                            
        </Grid>
        
        <Grid item xs={4} sm={3} md={2} lg={2} xl={2} sx={{display:'center', justifyContent:'center'}}>  
            
            <List sx={{marginBottom: "0", padding: "0", marginTop: "0" }}>
                <FooterItem text="FAQ" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Service Center" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Community" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Blog" footerlink="#" textcolor={colors.grey[10]} />
            </List>     
        </Grid>
        
        <Grid item xs={12} md={3} lg={4} xl={3} sx={{pt: {xs: 2, md: 0}, pl: {md: 4, lg: 8, xl: 16}, display:'center', justifyContent:'center' }}> 
        <Stack direction="column" spacing={4}>
            <Stack direction="row" spacing={4}>

                            <LinkedInIcon sx={{ color: colors.grey[10] }} />
                            <FacebookIcon sx={{ color: colors.grey[10] }} />
                            <InstagramIcon sx={{ color: colors.grey[10] }} />
                            <TwitterIcon sx={{ color: colors.grey[10] }} />

            </Stack>
         

                <Typography variant="subtitle1" color={colors.grey[10]} >
                    {"copyright © speak23"} &nbsp;&nbsp; - &nbsp;&nbsp;{"all rights reserved"}&nbsp; {new Date().getFullYear()}
                </Typography> 

            </Stack>
        </Grid>

    </Grid>

) : (

    <Grid container sx={{p: '4rem', minWidth: '100%', bgcolor: colors.greydark[800],   }}>
        <Grid item xs={4} sm={3} md={2} lg={2} sx={{display:'center', justifyContent:'center'}}>  
        
            <List sx={{marginBottom: "0", padding: "0", marginTop: "0" }}>
                <FooterItem text="Terms of Service" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Privacy Policy" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Security" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Legal Disclosure" footerlink="#" textcolor={colors.grey[10]} />
            </List>                 
        </Grid>
        
        <Grid item xs={4} sm={2} md={2} lg={2}  xl={3} sx={{display:'center', justifyContent:'center'}}>  

            <List sx={{marginBottom: "0", padding: "0", marginTop: "0" }}>
                <FooterItem text="About us" footerlink="#" textcolor={colors.grey[10]}/>
                <FooterItem text="Contact" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Press" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Career" footerlink="#" textcolor={colors.grey[10]} />
            </List>                            
        </Grid>
        
        <Grid item xs={4} sm={3} md={2} lg={2} xl={2} sx={{display:'center', justifyContent:'center'}}>  
            
            <List sx={{marginBottom: "0", padding: "0", marginTop: "0" }}>
                <FooterItem text="FAQ" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Service Center" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Community" footerlink="#" textcolor={colors.grey[10]} />
                <FooterItem text="Blog" footerlink="#" textcolor={colors.grey[10]} />
            </List>     
        </Grid>
        
        <Grid item xs={12} md={3} lg={4} xl={3} sx={{pt: {xs: 2, md: 0}, pl: {md: 4, lg: 8, xl: 16}, display:'center', justifyContent:'center' }}> 
        <Stack direction="column" spacing={4}>
            <Stack direction="row" spacing={4}>

                            <LinkedInIcon sx={{ color: colors.grey[10] }} />
                            <FacebookIcon sx={{ color: colors.grey[10] }} />
                            <InstagramIcon sx={{ color: colors.grey[10] }} />
                            <TwitterIcon sx={{ color: colors.grey[10] }} />

            </Stack>
         

                <Typography variant="subtitle1" color={colors.grey[10]} >
                    {"copyright © speak23"} &nbsp;&nbsp; - &nbsp;&nbsp;{"all rights reserved"}&nbsp; {new Date().getFullYear()}
                </Typography> 

            </Stack>
        </Grid>

    </Grid>
)}

</>
)}

{/*}
<AppBar position="relative" sx={{width: '100dvw', p: '2rem', top: 'auto', bottom: 0, bgcolor: 'background.greydark2',  }}></AppBar>
<Toolbar sx={{  ml: {xl: 16 }, mr: {xl: 8 }, maxWidth: {xs: '99%', sm: '99%', md: '99%', lg: '98%', xl: '98%'}, }}></Toolbar>
*/}