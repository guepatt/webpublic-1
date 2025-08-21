import { useEffect, useState } from "react"
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


export default function GetImageGallery(props) {

    const {exam_url, } = props
  
       const [data, setData] = useState([])  
       const [loading, setLoading] = useState(false);   
       const [error, setError] = useState();

      useEffect(() => {

        setLoading(true)
        axios.get(exam_url, data)
          .then((response) => {
            setData(response.data);
            setLoading(false)
            }) 
          .catch(function (error) {
            setLoading(false)
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
        }, []);

//  const addresses = data.map(i => i.selectedImage)

const docs = data.map(i => {
    return {'original': i.selectedImage, 'thumbnail': i.selectedImage}
    })

  //console.log(docs)

  return (
    <>   

      <ImageGallery items={docs} showIndex={true}/>
      
      {error  ? (
        <Alert severity="error" sx={{mt:2}}>
            <Typography variant="body2"  sx={{fontWeight: '500'}}> {error.message} </Typography>
        </Alert>
        ) : (null)}

  </>
  )
}

