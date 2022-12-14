import Button from '@mui/material/Button';
import React,{useContext} from 'react';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { LogicHolder } from '../../../Logic/Logic';
import { DataContext } from '../../../Context';


export const CustomAppbar = ({Data}:any)=>{
  const { dispatch} = useContext(DataContext);
     return(
      <Box sx={{ flexGrow: 1 ,marginBottom:"2vh"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            sx={{width:"20vw",paddingLeft:"150px", mr: 2,}}
          >
           <img src="../Act21-logo.png" alt="company Image" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained"   color="primary" sx={{display:{xs:"none",sm:"inline-block"}}}  onClick = {()=>LogicHolder(Data.content.eventName,dispatch)}>{Data.content.ButtonName}</Button>
        </Toolbar>
      </AppBar>
    </Box>
    ) 
  }