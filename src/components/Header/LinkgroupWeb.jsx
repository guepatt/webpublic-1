import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import ButtonsWeb from '../Button/ButtonWeb';


export const LinkgroupWeb = ({destination, button_name}) => {

    return (
<>
         <Link component={RouterLink} to={destination} > <ButtonsWeb name={ button_name } /> </Link>

</> 
)}