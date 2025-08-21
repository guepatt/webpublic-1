import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CustomDialog from "../Dialog/DiaComp";
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import FetchFiles from "./FetchFiles";


export default function DiaIGVbright() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};

return(
<>      
<Tooltip title="Genome Browser" placement="bottom">
    <IconButton onClick={handleOpen} color='primary'>
            <BrowserUpdatedIcon sx={{color: 'common.white', '&:hover': { color: 'primary.light'},}} />
    </IconButton>
</Tooltip>

<CustomDialog open={open} onClose={handleClose}

title="Genome Browser - Alignments Visualization"
content={ <FetchFiles />} 

/>

</>
)}