import Grid from '@mui/material/Grid';


export default function SectionDashboard(props) {

    const {colorContainer, colorSection_1, Section_1, colorSection_2, Section_2, colorSection_3, Section_3, colorSection_4, Section_4, colorSection_5, Section_5,  } = props

return (
    <>

    <Grid container 
                
                backgroundColor={colorContainer} 
                display='flex' justifyContent='center' 
                margin= 'auto' 
                marginBottom='4em'
                sx={{maxWidth: {xs: '100%', sm: '85%', lg: '77%',}, }}

                >

            <Grid item xs={12} backgroundColor={colorSection_1} >  {Section_1}   </Grid>
            <Grid item xs={12} backgroundColor={colorSection_2} >  {Section_2}   </Grid> 
            <Grid item xs={12} backgroundColor={colorSection_3} >  {Section_3}   </Grid>  
            <Grid item xs={12} backgroundColor={colorSection_4} >  {Section_4}   </Grid>  
            <Grid item xs={12} backgroundColor={colorSection_5} >  {Section_5}   </Grid>
            
            
    </Grid>

</>
)
}