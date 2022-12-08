import Button from '@mui/material/Button';
import React from "react";
import { logicHolder } from '../../../Logic/Logic';


export  const CustomButton = ({data}:any)=>{
     return(
      <div style={{width:"100%",...data.style, margin:"auto auto"}}>
     <Button
     fullWidth
     type={data.content.type} 
     color={data.content.color}
     variant={data.content.variant&&"contained"}
     size={data.content.size&&"medium"}
     onClick = {()=>logicHolder(data.content.eventName)}
    >{data.content.name}</Button> </div>)
  }