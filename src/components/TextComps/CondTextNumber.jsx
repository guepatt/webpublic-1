import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledBox = styled((props) => (
  <Box {...props} />
))(({ theme }) => ({

  padding: '4.7px', 
  borderRadius: '10px', 
  backgroundColor: theme.palette.grey.C500, 

  [theme.breakpoints.up('xs')]: {
    minWidth: '4.7rem', 
  },
  [theme.breakpoints.up('sm')]: {
  minWidth: '5.3rem', 
  }, 
  
}));


export default function CondTextNumber({ p_value, green_0, green_1, orange_0, orange_1, orange_2, orange_3, red_0, red_1, metrics }) {

  
    return (

      <StyledBox sx={{
           
           
           ...(p_value < Math.max(green_0, green_1)  && p_value > Math.min(green_0, green_1) && {bgcolor: 'traffic.green'}),
           
           ...(p_value < Math.max(orange_0, orange_1)  && p_value > Math.min(orange_0, orange_1) && {bgcolor: 'traffic.orange'}),
           ...(p_value < Math.max(orange_2, orange_3)  && p_value > Math.min(orange_2, orange_3) && {bgcolor: 'traffic.orange'}),

           ...(p_value < red_0 | p_value > red_1 && {bgcolor: 'traffic.red'}),
           
                   
          }}>
     
   <Typography variant="subtitle2" textAlign="center" sx={{fontFamily: 'Poppins', fontWeight: '500',
                   color: 'common.white',
                  
                   }}>
     {p_value}    <Typography component="span" variant="body2"> {metrics} </Typography>                      
 </Typography>

</StyledBox>

    );
  }
