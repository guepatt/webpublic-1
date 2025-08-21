import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { cb9 } from "../../constants"


export default function SectionNewborn() {

    return (


   
        <Grid container spacing={0} sx={{  mt:16, mb: 16, pb: 4, }}>
   
        <Grid item xs={3}></Grid>
   
    <Grid  item xs={3} sx={{ }}>
     <Card sx={{ maxWidth: 'auto',  borderRadius: '16px', }}>
            <CardMedia
                sx={{ height: 800, pb: 0 }}
                image={cb9}
            />
        </Card>
    </Grid>

    <Grid  item xs={4} sx={{   pl: { xs: 0, sm: 0, md: 0, lg: 0, xl: 16 }, pt: 16, pb: 4, }} >

    <Typography variant="h1" color='text.brown' gutterBottom align='center'> newborns </Typography>
    <Typography variant="h2"color='text.brown' align='center' sx={{  }} > parents, start the baby's lifetime health record </Typography>

    <Typography variant="h4"color='text.brown' align='center' sx={{  }} > 
          
          <br /><br /><br />
                
                After genetic counseling with doctors and reviewing family history, <br />
                with parents' consent the baby's genetic germline variants <br />are analyzed and documented. <br /><br />
                The baby's genomic signature is the foundation <br />for the lifetime precision health record.


        

          </Typography>

     </Grid>

     <Grid item xs={1}></Grid>


    </Grid>





)}