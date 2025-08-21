import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import CustomDialog from "../Dialog/DiaComp";

//import WebIcon from '@mui/icons-material/Web';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import FetchFiles from "./FetchFiles";


export default function Dia_IGV() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};

return(
<>      
    <IconButton onClick={handleOpen} size="small" color='primary'>
            <BrowserUpdatedIcon sx={{fontSize: '250%', color: 'common.white', }} />
    </IconButton>

<CustomDialog open={open} onClose={handleClose}

    title = 'Genome Browser'
    content = { <FetchFiles /> }

/>

</>
)}