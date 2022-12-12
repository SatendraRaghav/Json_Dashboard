import React from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const CustomDate = ({ data, value, updateValue }: any) => {
     return (
          <Paper elevation={2} sx={{ width: "80%", ...data.style, backgroundColor: "white", display: "flex", justifyContent: "center", margin: "auto auto" }} >
               {
                    data.content.required === true && (value === "" ?
                         (<Card sx={{ backgroundColor: "#F5FFD6", padding: "10px 0" }}>
                              <Typography color="error">{`${data.content.label} Can't be Empty !`}</Typography>
                         </Card>) :
                         (typeof data.content === "object" && (typeof data.content.customValidate === "object"
                              && (
                                   (new RegExp(JSON.parse(JSON.stringify(data.content.customValidate)).logic.slice(1, -1)).test(value) === false && typeof value !== "undefined") && (
                                        <Card sx={{ backgroundColor: "#F5FFD6", padding: "10px 0" }}>
                                             <Typography color="error">{`Invalid ${data.content.label}`}</Typography>
                                        </Card>
                                   )
                              )))

                    )
               }
               <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth sx={{ margin: "auto auto" }}>
                    <DesktopDatePicker
                         label={data.content.label}
                         inputFormat="MM/DD/YYYY"
                         value={value}
                         onChange={(newValue) => {

                              updateValue(newValue)
                         }}
                         renderInput={(params) => <TextField {...params} label={data.content.label} />}
                    />
               </LocalizationProvider>

          </Paper>
     )
}

export default CustomDate