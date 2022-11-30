import Button from '@mui/material/Button';
import React from "react";
import { logicHolder } from '../../../Logic/Logic';


export  const CustomButton = ({data}:any)=>{
     return(
      <div>
     <Button
     type={data.content.type}
     sx={data.style}  
     color={data.content.color}
     variant={data.content.variant}
     size={data.content.size}
     onClick = {()=>logicHolder(data.content.eventName)}
    >{data.content.name}</Button>  </div>)
  }