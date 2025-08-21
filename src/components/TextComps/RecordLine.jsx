import Grid from '@mui/material/Grid';
import TextCard from './TextCard';
import DiaImageRecord from '../../ProtectedPages/HealthRecords/DiaImageRecord';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useTheme } from "@mui/material";


export default function RecordLine({ date, incident, content, images}) {
   
  const theme = useTheme();

    return (
     
      theme.palette.mode === "light" ? (

      <Grid container sx={{mb:2, pl:2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'grey.C200', borderRadius: '20px'}}> 
                   
          <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  <TextCard textcard={date} /> </Grid> 
          <Grid item xs={4}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  <TextCard textcard={incident} /> </Grid> 
          <Grid item xs={4}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  <TextCard textcard={content} /> </Grid> 
          <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  <DiaImageRecord incident_images={ <ImageGallery items={images} /> } /> </Grid> 
      
      </Grid>   
      
      ) : (

        <Grid container sx={{mb:2, pl:2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', bgcolor: 'secondary.C800', borderRadius: '20px'}}> 
                   
        <Grid item xs={2}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  <TextCard textcard={date} /> </Grid> 
        <Grid item xs={4}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  <TextCard textcard={incident} /> </Grid> 
        <Grid item xs={4}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  <TextCard textcard={content} /> </Grid> 
        <Grid item xs={1}  sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>  <DiaImageRecord incident_images={ <ImageGallery items={images} /> } /> </Grid> 
    
    </Grid>   

      )
      
    );
  }