import {dna_go} from '../../constants'

import { styled } from '@mui/material/styles';

const ImageRoot = styled('div')(({ theme }) => ({

  
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center', 
  justifyContent: 'center',
//opacity: 0.5,
    

  '@media (min-width:1px)': {
      width: theme.spacing(10),
      height: 'auto',
    },
  '@media (min-width:600px)': {
      width: theme.spacing(12),
      height: 'auto',
    },
  '@media (min-width:960px)': {
      width: theme.spacing(14),
      height: 'auto',
    },
  '@media (min-width:1280px)': {
      width: theme.spacing(10),
      height: 'auto',
    },
  '@media (min-width:1740px)': {
    height: 'auto',
    width: 'auto',
    
    },

  
}));

export const CVD_GenFoto = () => {
  
    return (

    <ImageRoot >  
                <img style={{padding: 2, marginTop: 2, borderRadius: '16px'}}
                
                    src={dna_go} 
                    component="img"
                    loading="lazy"
                    alt="bgFoto"
                    width="70%"
                  
                
                />
    </ImageRoot>
)}

