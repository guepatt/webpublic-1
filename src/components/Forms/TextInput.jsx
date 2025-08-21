//import { useState, useEffect } from 'react';
import { useField } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

 
 const TextInput = ({ ...props }, {bgcolor}) => {
   
  const [field, meta] = useField(props);
   
  return (
     <>
      
    <Box sx={{'& .MuiTextField-root': { mt: 2, width: '35ch', } }}>
       <TextField variant="outlined" focused fullWidth color= "text" size = "small" InputProps={{ style: { borderRadius: "8px", },  }} {...field} {...props} 
                  sx={{ bgcolor: {bgcolor}, color: 'common.black', 
                          "& .MuiFilledInput-root": {bgcolor: {bgcolor}, }, 
                          "& .MuiFilledInput-root:hover": {bgcolor: {bgcolor},}, 
                          "& .MuiFilledInput-root.Mui-focused": {bgcolor: {bgcolor}},
                          '& .MuiInputBase-input': {borderRadius: '18px',}, 
                        }}/>
      </Box>


       {meta.touched && meta.error ? (
        <Alert icon={<ReportProblemIcon fontSize="inherit" />} severity="warning" sx={{fontWeight: '500', bgcolor: 'background.buttonhover', color: "common.black" }}>
                           {meta.error}
        </Alert>

       ) : null}

     </>
   );
 };

 export default TextInput;

     // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
