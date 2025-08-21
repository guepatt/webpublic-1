import React, {useState} from "react";
import useSafeState from "../../useSafeState";
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from '@mui/material/Stack';
import ButtonsMain from "../Button/ButtonMain";
import DiaPwChange from "../../Pages/AuthPage/BaseData/DiaPwChange";
import DiaUserUpdate from "../../Pages/AuthPage/BaseData/DiaUserUpdate";

export default function UpdateDialog({ open, onClose, title, content, image, sources }) {
   
      return (
     <>

      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md"
            sx={{ '& .MuiDialog-paper': { borderRadius: '16px'}, '& .MuiDialogContent-root': { display: 'flex', flexDirection: 'column', m: 'auto', width: '100%', }, 
                 '& .MuiDialogActions-root': { padding: 0,},  }}>


        <DialogTitle sx={{ bgcolor: 'background.default', pt:4}}>
                 
                <Typography  variant='h3' color='primary' align= 'center' 
                                                    sx={{p:4, color: 'text.brown', fontWeight: '800'}} > 
                                {title} 
                </Typography>
    
                <IconButton aria-label="close" onClick={onClose}
                            sx={{position: "absolute", right: 16, top: 16, color: 'common.black' }}
                >
                
                                <CloseIcon />
            
                </IconButton>
            
        </DialogTitle>
      
        <DialogContent sx={{ bgcolor: 'background.default'}}>
        
             <Typography variant="h5" sx={{pl:8, pr:8, fontFamily: 'Inter', color: 'common.black'}}> 
             
                {content}  <br /><br />
                
            </Typography>
  
          <div>{image}</div>

            <Typography variant="h6" sx={{pl:8, pr:8, fontFamily: 'Inter', color: 'common.black', fontWeight: '400'}}>
              {sources}
            </Typography>

        </DialogContent>

        <DialogActions sx={{ bgcolor: 'background.default'}}>

              <Stack direction="column" spacing={3} sx={{mr:'2rem', p:'3rem'}}>
                
                      <DiaUserUpdate />
                      <DiaPwChange />
                      <ButtonsMain name='Back' action={onClose} />

                </Stack>


        </DialogActions>
   
      </Dialog>
</>
    );
  }