import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const SidebarItem = (props) => {

  const { drawerlink, itemicon, draweritem } = props

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return (

<ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton component={RouterLink} to={drawerlink} sx={{ '&:hover, &:focus': { bgcolor: colors.greydark[800], borderRadius: '4px'},   }}>
            <ListItemIcon sx={{ color: 'common.white'}} >
              {itemicon}
            </ListItemIcon>
            <ListItemText primary={draweritem} primaryTypographyProps={{variant: 'subtitle1', color: 'common.white', }}/>  
      </ListItemButton>
  </ListItem>

  )}