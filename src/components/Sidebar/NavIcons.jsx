import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export default function NavIcons({ title, to, onClick, iconselect }) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

<Tooltip title={title}>
    <Link   component={RouterLink} to={to}>   
        <IconButton onClick={onClick} >     
            <Avatar sx={{ width: 36, height: 36, color: 'common.white', bgcolor: colors.greydark[900] }}> {iconselect} </Avatar>            
        </IconButton> 
    </Link>
</Tooltip>

);
}