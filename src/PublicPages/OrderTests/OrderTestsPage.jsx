import PagePublic from '../../components/Page/PagePublic';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import {Linkgroup} from '../../components/Header/Linkgroup'
import OnboardingStep4 from '../../ProtectedPages/MainWelcome/Onboarding/Steps/OnboardingSteps4';
import CartItemSuccess from './OrderTestsAux/CartItemSuccess';


export default function OrderTests() {

    return (

        
    <PagePublic linkgroup={<> <Linkgroup destination="/" button_name='HOME' />  </>}
    
    main={ 
    
      <Box>
        
        <Grid container sx={{mb:4, mt: {xs: '1rem', sm: '1rem', xl: '8rem'}, ml: {xs: '1rem', sm: '2rem', xl: '12rem'}, mr: {xs: '1rem', sm: '2rem', },}}>
    
            <Grid item xs={12}>  <Typography variant='h4' sx={{ml: {xs: 0, sm: 4}, p:1, }}> 
                Please wait for the test kits ...</Typography> 
            </Grid> 

            <Grid item xs={12} sm={5} sx={{mt: {xs: '1rem', lg: '0.5rem', xl: '4rem'}, mb: {xs: '4rem', lg: 1}, pl: {lg: '4rem', xl: '8rem'},  pr: {sm: '2rem', md: '0rem'} }}> 
              <OnboardingStep4 />
            </Grid> 
        
            <Grid item xs={12} sm={6} sx={{mr: {xl:'0'}, pr: {lg: '8rem', xl: '0rem'}, }}> 
                <Grid item xs={12}>   <CartItemSuccess />  </Grid>  
                
                <Grid item xs={12} xl={11} sx={{mr: {xs:4, sm: 0 }, mt: {xs:4, }, mb: {xs:2, sm: 0 }, display: 'flex', justifyContent: 'center',}}>  
                  
                  <Alert severity="info" sx={{borderRadius: '18px', p:2, bgcolor: 'primary.light'}}> 
                      <Typography variant="h6" align="center" sx={{ fontWeight: '300'}}>
                              Thank you for successful payment!<br />  A confirmation email was sent to you.<br /> 
                              Please wait for the test kits which are now shipped to you. 
                      </Typography> 
                  </Alert> 
                
                </Grid>
          
          </Grid>
        </Grid>
        
    </Box>
    }
/>
  )
}