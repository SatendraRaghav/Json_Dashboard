import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


const CustomInput = ({ data, value, updateValue }: any) => {

     return (
          <Box sx={{ width: "80%", ...data.style, backgroundColor: "white", margin: "auto auto" }} >
               {
                    data.content.type === "date" ? (
                         <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth sx={{ margin: "auto auto"}}>
                              <DesktopDatePicker
                                   label={data.content.label}
                                   inputFormat="MM/DD/YYYY"
                                   
                                   value={value}
                                   onChange={(e) => updateValue(e.target.value)}
                                   renderInput={(params) => <TextField {...params}  label={data.content.label} />}
                              />
                         </LocalizationProvider>) : (
                         <TextField
                              required={data.content.required}
                              fullWidth
                              onChange={(e) => updateValue(e.target.value)}
                              value={value}
                              label={data.content.label}
                              helperText={data.content.helperText}
                              size={data.content.size}
                              type={data.content.type}
                         //  variant={data.content.variant}
                         >
                         </TextField>)
               }

          </Box>
     )
}

export default CustomInput