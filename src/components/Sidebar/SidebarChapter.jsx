import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const DividerRoot = styled('div')(({ theme }) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(1), 
    //borderRadius: 14,
    //borderColor: theme.palette.common.white, 
    //color: theme.palette.primary.dark,
    //backgroundColor: theme.palette.background.paper, 
    //textAlign: 'center',
    //width: '90%',
    
  }));

export const SidebarChapter = (props) => {

    const { chapter } = props
  
    return (

<DividerRoot>
      <Typography variant="h6" sx={{color: 'common.white', }} >{chapter}</Typography>
</DividerRoot>

  )}