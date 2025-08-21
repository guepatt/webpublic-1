//import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
//import { LinkgroupWeb } from '../../../../components/Header/LinkgroupWeb';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import ButtonsWebHighlight from '../../../../components/Button/ButtonWebHighlight';
import { REGISTER_URL } from '../../../../constants';
//import TextScrambler from '../../../../components/TextComps/TextScrambler';
import TextScramblerRepeat from '../../../../components/TextComps/TextScramblerRepeat';


export default function ParallaxContent() {


return (
<>

    <Container sx={{ zIndex: "9", pr: '15px', pl: '15px', mr: 'auto', ml: 'auto', width: '100%',}}>       
      <Container sx={{ maxWidth: {xs: '540px', md: '720px', lg: '992px', xl: '1240px'}, }}>    

        <Grid container sx={{mr: '-15px', ml: '-15px', width: 'auto',   }}>                         
            <Grid size={12} sx={{   position: 'relative', width: '100%', minHeight: '1px', pl:'15px', pr: '15px',  }}>

            <Stack direction="column" spacing={2} sx={{mt: {sm: '4rem'} }}>

                <Typography variant='h1' textAlign="left" sx={{color: 'common.white', }}>
                
                Live Long.&nbsp;Age Slow.
                
                </Typography>

                <Typography variant="h2" textAlign="left"  sx={{color: 'common.white'}}>

                    <TextScramblerRepeat text="Preventive Health Intelligence" speed={60} delayBetweenRepeats={4000}></TextScramblerRepeat> 

                </Typography>
                
                <Box sx={{pt:3,}}>
                    <Link component={RouterLink} to={REGISTER_URL} > <ButtonsWebHighlight name='Get Started'/> </Link>
                </Box>
            
            </Stack>

            <Stack direction="column" spacing={0} sx={{mt:'4rem',}}>
            <Typography variant="h5" textAlign="left"  sx={{color: 'common.white'}}>
                <br />Currently for testusers only  
                <br /> <br />Go live: &nbsp;&nbsp;&nbsp;&nbsp;December 2025 
                <br />Inquiries: &nbsp;&nbsp;office@speak23.com  </Typography>
               
            </Stack>
 
            </Grid>
        </Grid>

    </Container>
</Container> 
</>
)}