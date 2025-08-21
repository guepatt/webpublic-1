import React, { useState } from "react";
import { useAuth } from "../../provider";
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import TextInput from "./TextInput";
import ButtonForm from "../Button/ButtonForm";



const ExamUploadForm = (props) => {

  const {exam_url, } = props

    const { state } = useAuth();

    const [selectedImage, setSelectedImage] = useState([]);
    const [loaded, setLoaded] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [info, setInfo] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [buttontext, setButtontext] = useState('Select File');

    const handleFileChange = (event) => {
        setSelectedImage(event.target.files[0])
        setLoaded(0) 
        setUploading(false)
        
        setButtontext(selectedImage.name)
    }

    const handleSubmit = (values) => {
    
      setUploading(true)

      
      const upload_data = new FormData();
      upload_data.append('date', values.date);
      upload_data.append('title', values.title);
      upload_data.append('content', values.content);
      upload_data.append('selectedImage', selectedImage, selectedImage.name);
      upload_data.append('owner', state.user.id);
      
      axios.post( exam_url , upload_data, {
        onUploadProgress: (ProgressEvent) => { 
            setLoaded( ( ProgressEvent.loaded / ProgressEvent.total ) * 100 ) 
            }
        })
      .then((response) => {
          setMessage(response);
          setInfo('Upload successful !')
          setUploading(false)
          setSelectedImage(null)
          }) 
      .catch(function (error) {
        setUploading(false)
        //throw new Error(error)
        setError(error.toJSON());
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          //console.log(error.response.data, error.response.status);
          
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
          //console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          //console.log('Error', error.message);
        }
        //console.log(error.config);
        console.log("Error")
      })
    }

return (
<>

  <Formik

          initialValues={{ date: '', title: '', content: ''  }}

          validationSchema={validationUploadForm}

          onSubmit={(values, { setSubmitting }) => { 
            handleSubmit(values); 
            setSubmitting(false);  
            }}

        > 

<Grid container sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

<Form>

    <TextInput label="date" name="date" type="date" placeholder="select date" />
    <TextInput label="title" name="title" type="text" placeholder="insert title" />
    <TextInput label="additional info" name="content" type="text" placeholder="insert additional info" />

    <Button component="label" role={undefined} variant="contained" tabIndex={-1} onChange={handleFileChange} startIcon={<CloudUploadIcon />}
                sx={{m:4, p: 1, pl:4, pr:4, borderRadius: '20px', color: 'common.white', bgcolor: 'background.greydark'}}>
                <Typography>{buttontext}</Typography>
                <VisuallyHiddenInput id="file" type="file" name="file"/>
        </Button>

          <ButtonForm name={ 'Submit' } disabled={Formik.isSubmitting} />
</Form>

</Grid>
</Formik>

    {error  ? (
        <Alert severity="error" sx={{mt:2}}>
            <Typography variant="body2"  sx={{fontWeight: '500'}}> {error.message} </Typography>
        </Alert>
        ) : (null)}

        {message  ? (
        <Alert severity="info" icon={<CheckIcon fontSize="inherit" />} sx={{mt:2}}>
            <Typography variant="body2"  sx={{fontWeight: '500'}}> {info} </Typography>
        </Alert>
        ) : (null)}
</>
)};

export default ExamUploadForm;


const validationUploadForm = Yup.object().shape({
  
  date: Yup.date()
    .required('Required'),
  
    title: Yup.string('Enter title')
    .required('title is required'),
  
    content: Yup.string('Enter additional info')
    .required('Additional info is required'),
  
  });


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});