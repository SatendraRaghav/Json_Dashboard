import React from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const CustomInput = ({data,value,updateValue}:any) => {
     return(
      <Box sx={data.style} >
      <TextField
      required={data.content.required}
      fullWidth
      onChange={(e)=>updateValue(e.target.value)}
      value={value}
      label= {data.content.label}
      helperText={data.content.helperText}
      size={data.content.size}
      type={data.content.type}
      variant={data.content.variant}
    >
    </TextField>
    </Box>
     )
}

export default CustomInput