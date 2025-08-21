import { useField } from 'formik';
import Box from '@mui/material/Box';
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import TextField from '@mui/material/TextField';


const SelectInput = ({ label, value0, value1, value2, value3, text0, text1, text2, text3, ...props }) => {
    
const [field, meta] = useField(props);

return (
<>

<Box sx={{ '& .MuiTextField-root': {mt:2, width: '35ch' } }} noValidate autoComplete="off">
    
    <TextField select size="small" variant="outlined" label={label} focused fullWidth color= "text" defaultValue="SELECT"
              InputProps={{ style: { borderRadius: "8px", },  }} {...field} {...props} 
              sx={{ color: 'common.black', 
                          '& .MuiInputBase-input': {borderRadius: '18px',}, 
                        }}>
                  
                    <MenuItem value={value1} sx={{color: 'common.white', '&:hover': { bgcolor: 'secondary.main'} }}>{text1}</MenuItem>  
                    <MenuItem value={value2} sx={{color: 'common.white',  '&:hover': { bgcolor: 'secondary.main'} }}>{text2}</MenuItem>  
                    <MenuItem value={value3} sx={{color: 'common.white',  '&:hover': { bgcolor: 'secondary.main'} }}>{text3}</MenuItem>  
        
    </TextField>

</Box>
      
        {meta.touched && meta.error ? (
          <Alert icon={<ReportProblemIcon fontSize="inherit" />} severity="warning" sx={{fontWeight: '500', bgcolor: 'background.default', color: "warning.main" }}>
                            {meta.error} </Alert>
       ) : null}

</>
);
};

export default SelectInput;