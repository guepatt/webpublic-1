import CardMedia from '@mui/material/CardMedia';
import imgUrl from '../../assets/family2.jpg'
import { styled } from '@mui/material/styles';

const ImageRoot = styled((props) => (
  <CardMedia {...props} />
))(({ theme }) => ({

  color: 'transparent',
  borderRadius: '16px',
      
  [theme.breakpoints.up('xs')]: {
      width: '14rem',
      height: 'auto',
      borderRadius: '8px',
      margin: 2,
    },
    [theme.breakpoints.up('sm')]: {
      width: '14rem',
      height: 'auto',
      borderRadius: '12px',
    },
    [theme.breakpoints.up('md')]: {
      width: '18rem',
      height: 'auto',
      borderRadius: '12px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '24rem',
      height: 'auto',
      borderRadius: '16px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '24rem',
      height: 'auto',
      borderRadius: '16px',
    },

  
}));

export const Image1 = () => {
    
    return(


  <ImageRoot component="img" image={imgUrl} alt="foto" />
    
)}