import ButtonsMain from '../Button/ButtonMain';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";


export default function CustomDialog({ open, onClose, title, content, image, sources, action }) {
   
    return (
     
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl"
            sx={{ '& .MuiDialog-paper': { borderRadius: '16px'},
                  '& .MuiDialogContent-root': { display: 'flex', flexDirection: 'column', m: 'auto', width: '100%', }, 
                  '& .MuiDialogActions-root': { padding: 0,}, 
                  '& .MuiDialogTitle-root': { display:'flex', justifyContent:'center', alignItems:'center', p:6, color: 'common.white', fontWeight: '600', fontSize: '260%'}, }}>


        <DialogTitle sx={{ bgcolor: 'background.dialog'}}>

                <Typography variant='h4' sx={{pl:8, pr:8, color: 'common.black'}}> {title} </Typography>
              
                <IconButton aria-label="close" onClick={onClose}
                            sx={{position: "absolute", right: 16, top: 16, color: 'common.black' }}
                >
                
                                <CloseIcon />
            
                </IconButton>
            
        </DialogTitle>
      
        <DialogContent sx={{ bgcolor: 'background.dialog'}}>
        
             <Typography variant='h6'sx={{pl:8, pr:8, fontFamily: 'Inter', color: 'common.black'}}> 
             
                {content}                  
            </Typography>
  
          <div>{image}</div>

            <Typography sx={{pl:8, pr:8, fontFamily: 'Inter', color: 'common.black', fontWeight: '400'}}>
              {sources}
            </Typography>

        </DialogContent>

        <DialogActions sx={{ bgcolor: 'background.dialog'}}>
        
        <Grid container sx={{justifyContent: 'flex-end', m: '4rem'}}>   <ButtonsMain name="BACK" action={onClose} ></ButtonsMain> </Grid>
 
        </DialogActions>
   
      </Dialog>
    );
  }