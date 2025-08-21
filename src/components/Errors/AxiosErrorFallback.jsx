"use client";

import * as React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



// ErrorBoundary with fallbackRender prop
// Call resetErrorBoundary() to reset the error boundary and retry the render.
export default function ErrorFallbackAxios({ error, resetErrorBoundary }) {
    console.error(error.message)

    return (

        <Box sx={{ width: "100%" }}>

            <Alert>
                <Typography variant="h6">Something went wrong!</Typography>
                <Button onClick={resetErrorBoundary}> Try again </Button>
            </Alert>
        
        </Box>
  )
}

