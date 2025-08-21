import React, {useState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CustomDialog from "../Dialog/DiaComp";
import CustomDialogSmall from "../Dialog/DiaCompSmall";


export default function ButtonActionComponent({ListTitle, ListComponent, AddTitle, AddComponent, InfoTitle, InfoComponent}) {

const [dialogOpen, setdialogOpen] = useState(false);
const handleDialogOpen = () => {setdialogOpen(true);};
const handleDialogClose = () => {setdialogOpen(false);};

const [dialogOpen1, setdialogOpen1] = useState(false);
const handleDialogOpen1 = () => {setdialogOpen1(true);};
const handleDialogClose1 = () => {setdialogOpen1(false);};

const [dialogOpen2, setdialogOpen2] = useState(false);
const handleDialogOpen2 = () => {setdialogOpen2(true);};
const handleDialogClose2 = () => {setdialogOpen2(false);};

const buttons = [        
                <Button key="one" onClick={handleDialogOpen2} sx={{ color: 'common.white', bgcolor: 'primary.C900', '&:hover': {color: 'common.black', bgcolor: 'background.default_var1'} }} >List</Button>,
                <Button key="two" onClick={handleDialogOpen} sx={{ color: 'common.white', bgcolor: 'primary.C900', '&:hover': {color: 'common.black', bgcolor: 'background.default_var1'} }}>Add</Button>,
                <Button key="three" onClick={handleDialogOpen1} sx={{ color: 'common.white', bgcolor: 'primary.C900', '&:hover': {color: 'common.black', bgcolor: 'background.default_var1'} }}>Info</Button>,
                ];

return(
<>      

<ButtonGroup variant="text" orientation="vertical" > {buttons}  </ButtonGroup>

        <CustomDialogSmall open={dialogOpen2} onClose={handleDialogClose2}
                 title={ListTitle}
                content={ListComponent}
        />

        <CustomDialogSmall open={dialogOpen} onClose={handleDialogClose}
                title={AddTitle}
                content={AddComponent}
        />

        <CustomDialog open={dialogOpen1} onClose={handleDialogClose1}
                 title={InfoTitle}
                content={InfoComponent}
        />

</>
)}