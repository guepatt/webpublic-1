import Grid from '@mui/material/Grid';


export default function SectionStructure(props) {

    const {sectiontext, sectioncards} = props

return (
    <>

<Grid container sx={{p: {sm:'2em'}}}>
  
    <Grid item xs={12} lg={4} xl={4} display='flex' justifyContent='center' alignItems= 'flex-start' sx={{ p:{xs: '0em', lg: '2em'}, }}> 
            {sectiontext}
    </Grid>
    
    
    <Grid item xs={12} lg={8} xl={8} display='flex' justifyContent={{xs:'center', lg:'flex-start'}} alignItems='center' flexWrap='wrap' sx={{ p:{xs: '2em', lg: '4em',} }}> 
            
            {sectioncards}
           
            </Grid>

    </Grid>

</>
)
}