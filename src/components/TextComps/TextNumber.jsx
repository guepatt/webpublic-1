import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function TextNumber({ textnumber, warning_1, warning_2, metrics }) {


  
    return (
               
              <Box sx={{minWidth: '6rem', border: '1px solid', borderColor: 'grey.C300', borderRadius: '8px', p: '3.3px',
                                
                                }}>
                  
                <Typography variant="subtitle1" textAlign="center" sx={{fontFamily: 'Poppins', fontWeight: '400', 
                                color: 
                                textnumber < warning_1 ? 'traffic.green' :
                                textnumber > warning_1 ? 'traffic.orange' :
                                textnumber > warning_2 ? 'traffic.red' : 
                                'common.black'
                              }}>
                                            {textnumber}    <Typography component="span"> {metrics} </Typography>                      
              </Typography>

            </Box>
    );
  }

  /*
   //...({textnumber} > {warning_1} && {color: 'traffic.orange'}), 
                                //...({textnumber} > {warning_2} && {color: 'traffic.red'}),  
  */