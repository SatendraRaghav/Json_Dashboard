import React from 'react';
import { IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomFile = ({data,value,updateValue}:any) => {
     return(
      <Box sx={{width:"90%",...data.style, margin:"15px auto",border:"3px solid whitesmoke",borderBottom:"none",backgroundColor:"#E7EBF0"}} >
      <Typography variant='h6' sx={{marginLeft:"15px",color:"gray"}}>{data.content.label}</Typography>    
      <TextField
      required={data.content.required}
      fullWidth
      onChange={(e)=>updateValue(e.target.value)}
      value={value}
      color='primary'
      InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <AttachFileIcon />
            </InputAdornment>
          ),
        }}
      helperText={data.content.helperText}
      size={data.content.size}
      type={data.content.type}
      // variant={data.content.variant}
    >
    </TextField>
    {value&&
     <IconButton  color="error" onClick={()=>updateValue("")}><DeleteIcon /></IconButton>
}
    </Box>
     )
}

export default CustomFile