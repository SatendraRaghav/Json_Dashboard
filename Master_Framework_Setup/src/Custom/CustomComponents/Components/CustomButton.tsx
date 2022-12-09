import Button from '@mui/material/Button';
import { Navigate } from "react-router-dom";
import React,{useContext} from "react";
import { LogicHolder } from '../../../Logic/Logic';
import { actions,DataContext } from '../../../Context';


export  const CustomButton = ({data}:any)=>{
    const { dispatch,state } = useContext(DataContext);
     return(
      <div style={{width:"100%",...data.style, margin:"auto auto"}}>
     <Button
     fullWidth
     type={data.content.type} 
     color={data.content.color}
     variant={data.content.variant}
     size={data.content.size&&"medium"}
     onClick = {()=>{
      <Navigate to="/Agency" />
      LogicHolder(data.content.eventName,dispatch)}}
    >{data.content.name}</Button> </div>)
  }