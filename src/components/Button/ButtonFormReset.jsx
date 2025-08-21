import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const ButtonMain = styled(Button)(({ theme }) => ({
 
  color: theme.palette.common.white,
  backgroundColor: theme.palette.background.bluedark,
  minWidth: 140,
  boxShadow: 'none',
  textTransform: 'none',
  padding: '8px 32px',
  border: '1px solid',
  borderRadius: '20px',
  borderColor: theme.palette.primary.dark,
  fontFamily: [
    'Arial Regular',
  ].join(','),
  '&:hover': {
    color: theme.palette.background.button,
    fontWeight: '500',
    //lineHeight: '1.5rem',
    backgroundColor: theme.palette.background.sidebar,
    borderColor: theme.palette.primary.main,
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
//    backgroundColor: '#0062cc',
//    borderColor: '#005cbf',
  },
  '&:focus': {
 //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
 
}));



export default function ButtonFormReset({ name}) {
  return (

    <Grid container sx={{ mt: 4, display: 'flex', justifyContent: 'center'}}>

      <ButtonMain variant="outlined" type="reset" size="large" >
          <Typography > Reset Form </Typography>  
      </ButtonMain>
     
   </Grid>
  );
}