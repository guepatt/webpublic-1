
import Box from '@mui/material/Box';
import igv from "https://cdn.jsdelivr.net/npm/igv@2.15.11/dist/igv.esm.min.js"
//import igv from '../../../node_modules/igv/dist/igv.esm.js'

export default function IgvAlignments(data) {

  const url = data.data[0][0]
  const indexURL = data.data[1][0]
  const name = data.data[2][0]
  
  const container = document.getElementById("container");
    // Avoid that document.getElementbyId is returning a null without attribute named appendChild --> would throu an error !
    //  container.appendChild(container);
  
  const options = { 
          genome: 'hg38', 
          locus: 'chr17:43,106,487',
          'tracks': [
            {
              type: 'alignment',
              format: 'cram',
              url: url,
              indexURL: indexURL, 
              name: name,
              color: '#E1BEE7',
              colorBy: 'strand',
              height: 600
            },  
          ],
        }
        
  if (container !== null) 
    igv.createBrowser(container, options)
  
        
          return (

            <Box id="container" sx={{ p: '1rem'   }} />
          
          );
        }
    