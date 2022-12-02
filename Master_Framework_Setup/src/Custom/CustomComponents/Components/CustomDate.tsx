import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


const CustomDate = ({ data, value, updateValue }: any) => {
     const [demoValue, setDemoValue] = React.useState(value);
     return (
          <Box sx={{ width: "80%", ...data.style, backgroundColor: "white", display:"flex",justifyContent:"center",margin:"auto auto" }} >
                         <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth sx={{ margin: "auto auto"}}>
                              <DesktopDatePicker
                                   label={data.content.label}
                                   inputFormat="MM/DD/YYYY"
                                   value={value}
                                   onChange={(newValue) => {
                                        
                                   updateValue(newValue)}}
                                   renderInput={(params) => <TextField {...params}  label={data.content.label} />}
                              />
                         </LocalizationProvider> 

          </Box>
     )
}

export default CustomDate