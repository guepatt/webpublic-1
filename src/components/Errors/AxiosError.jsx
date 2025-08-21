import React, {useState} from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';


export default function AxiosError(props) {
  const [open, setOpen] = useState(props.openAlert);
  React.useEffect(() => {
    if (props.openAlert) {
      setOpen(props.openAlert);
    }
  }, [props.openAlert]);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>

        <Alert onClose={() => {setOpen(false);}}  severity={props.severity}  icon={<ReportProblemIcon fontSize="inherit" />} sx={{ mb: 2, mt: 2, borderRadius: '24px' }} >
          {props.message}
        </Alert>
      
      </Collapse>
    </Box>
  );
}