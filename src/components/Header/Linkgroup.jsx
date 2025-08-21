import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import ButtonsMain from '../Button/ButtonMain';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


export const Linkgroup = ({destination, button_name}) => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
  
   return (
<>

    <Link component={RouterLink} to={destination} > <ButtonsMain name={ button_name } /> </Link>

</> 
)}