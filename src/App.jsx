"use client";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RoutesPages } from './Routes'
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./components/Errors/ErrorPage";
import { ColorModeContext, useMode } from "./theme";


function App() {

  const [theme, colorMode] = useMode();
 
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
                <ErrorBoundary FallbackComponent={ErrorPage} onReset={(details) => { }} >           
                            <RoutesPages />  
                </ErrorBoundary>    
        </ThemeProvider>
    </ColorModeContext.Provider>

  );  
}

export default App;