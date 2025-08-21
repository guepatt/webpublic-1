import Typography from '@mui/material/Typography';

export default function HeaderMainProtected({ specify, headline }) {
  
    return (
     <>

       <Typography variant= {"h3"} textAlign='center' 
                    sx={[ { color: 'common.black', fontWeight: '300' }, (theme) => theme.applyStyles('dark', {color: 'common.white', fontWeight: '300' }), ]}>

          {headline} 
       
            <Typography component="span" variant="h3" sx={[ {color: 'common.black', fontWeight: '600'}, (theme) => theme.applyStyles('dark',{color: 'common.white', fontWeight: '600'})  ]}> 
            {specify} 
            </Typography>

       </Typography>   
                  
  </>
    );
  }