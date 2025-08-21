import Container from '@mui/material/Container';
//import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';




export default function Footer() {
    




return (
<>
<footer >

<Box sx={{p: "1.875rem 0", textAlign: "center", display: "flex", zIndex: "2", position: "relative", "& ul": {mb: "15px", p: 0, listStyle: "none"},
            bgcolor: 'background.greydark2', }}>




<Container sx={{  
                     pr: '15px', pl: '15px', mr: 'auto', ml: 'auto', width: '100%',            //container fluid
                     maxWidth: {xs: '540px', md: '720px', lg: '992px', xl: '1140px'},          //container
                    
                    }}>
<Box>
<Box sx={{ float: "left!important", display: "block",}}>

<List sx={{ marginBottom: "0", padding: "0", marginTop: "0" }}>

    <ListItem sx={{ display: "inline-block", padding: "0px", width: "auto" }}>
        <Box sx={{ typography: 'body2', '& > :not(style) ~ :not(style)': { ml: 2, }, color: "inherit", p: "0.9375rem", fontWeight: "500", fontSize: "12px", borderRadius: "3px", textDecoration: "none", position: "relative", display: "block" }}>
            <Link href="#" underline="none"> Privacy Policy </Link>
         </Box>
    </ListItem>

    <ListItem sx={{ display: "inline-block", padding: "0px", width: "auto" }}>
        <Box sx={{ typography: 'body2', '& > :not(style) ~ :not(style)': { ml: 2, }, color: "inherit", p: "0.9375rem", fontWeight: "500", fontSize: "12px", borderRadius: "3px", textDecoration: "none", position: "relative", display: "block" }}>
            <Link href="#" underline="none"> Terms and Conditions </Link>
         </Box>
    </ListItem>

</List>

</Box>
</Box>
</Container>
</Box>
</footer>
</>
)}