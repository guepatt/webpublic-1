import React, {useState} from "react";
import Alert from "@mui/material/Alert";
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import ButtonsMain from "../Button/ButtonMain";

// Request made but the server responded with an error
export function ErrorResponse({ error, resetErrorBoundary }) {
    
    const [open, setOpen] = useState(false)
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return}
        setOpen(false)
        }
    
    return (

        <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                <Typography variant="h6">Something went wrong:</Typography>
                <Typography variant="h6" sx={{color: 'warning.main'}}> {error.response.statusText}, 'Status:', {error.response.status}</Typography>
                <ButtonsMain action={resetErrorBoundary}> Try again </ButtonsMain>
            </Alert>
        </Snackbar>
  )
}

// Request made but no response is received from the server
export function ErrorRequest({ error, resetErrorBoundary }) {
    
    const [open, setOpen] = useState(false)
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return}
        setOpen(false)
        }
    
    return (

        <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                <Typography variant="h6">Something went wrong:</Typography>
                <Typography variant="h6" sx={{color: 'warning.main'}}> Error: {error.request}</Typography>
                <ButtonsMain action={resetErrorBoundary}> Try again </ButtonsMain>
            </Alert>
        </Snackbar>
  )
}

// Error occured while setting up the request
export function ErrorMessage({ error, resetErrorBoundary }) {
    
    const [open, setOpen] = useState(false)
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return}
        setOpen(false)
        }
    
    return (

        <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                <Typography variant="h6">Something went wrong:</Typography>
                <Typography variant="h6" sx={{color: 'warning.main'}}> Error: {error.message}</Typography>
                <ButtonsMain action={resetErrorBoundary}> Try again </ButtonsMain>
            </Alert>
        </Snackbar>
  )
}