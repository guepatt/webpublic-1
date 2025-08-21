import { pedigree } from '../../constants';

import { styled } from '@mui/material/styles';

const ImageRoot = styled('div')(({ theme }) => ({

  
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center', 
  justifyContent: 'center',
  //opacity: 1,

  '@media (min-width:1px)': {
      
      height: 'auto',
    },
  '@media (min-width:600px)': {
      
      height: 'auto',
    },
  '@media (min-width:960px)': {
      
      height: 'auto',
    },
  '@media (min-width:1280px)': {
     
      height: 'auto',
    },
  '@media (min-width:1740px)': {
    height: 'auto',
    
    },

  
}));

export const Pedigree = () => {
  
    return (

    <ImageRoot >  
                <img style={{ borderRadius: '16px'}}
                
                    src={pedigree} 
                    component="img"
                    loading="lazy"
                    alt="Foto"
                    width="100%"
                    
                  
                
                />
    </ImageRoot>
)}

