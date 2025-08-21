import { useField } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

// input type is defined as type="checkbox"

const CheckboxInput = ({ children, ...props }) => {
    
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <>
        <label className="checkbox-input">
          <Checkbox type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <Alert icon={<ReportProblemIcon fontSize="inherit" />} severity="warning" sx={{fontWeight: '500', bgcolor: 'background.default', color: "warning.main" }}>
                 {meta.error}
        </Alert>

       ) : null}
      </>
    );
  };

  export default CheckboxInput;

  // React treats radios and checkbox inputs differently from other input types: select and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`