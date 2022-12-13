import { Card, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const CustomInput = ({ data, value, updateValue }: any) => {
     let color = "inherit";
     data.content.required && (value === "" || value === undefined) ? color = "red" : "inherit";
     return (

          <Paper elevation={2} sx={{ width: "80%", margin: "auto auto", outline: `1px solid ${color}`, outlineOffset: 5, ...data.style }} >
               {
                    data.content.required === true &&
                    (value === "" &&
                         (<Card sx={{ backgroundColor: "#F2F7FF", padding: "10px 0",borderRadius:"4px",textAlign:"center" }}>
                              <Typography color="error">{`${data.content.label} Can't be Empty !`}</Typography>
                         </Card>)

                    )}
               {(typeof data.content === "object" && (typeof data.content.customValidate === "object"
                    && ((value !== undefined && value !== "") && (
                         (value.length > data.content.customValidate.max 
                              || value.length < data.content.customValidate.min 
                              ||value.length !== data.content.customValidate.length
                              || data.content.customValidate.logic 
                              && new RegExp(JSON.parse(JSON.stringify(data.content.customValidate)).logic.slice(1, -1)).test(value) === false) && (
                              <Card sx={{ backgroundColor: "#F2F7FF", padding: "10px 0",borderRadius:"4px",textAlign:"center" }}>
                                   <Typography color="error">{`Invalid ${data.content.label} `}</Typography>
                              </Card>
                         )
                    ))))

               }
               <TextField
                    // inputProps={{min:2,max:4}}
                    required={data.content.required}
                    fullWidth
                    onChange={(e) => updateValue(e.target.value)}
                    value={value}
                    label={data.content.label}
                    helperText={data.content.helperText}
                    size={data.content.size}
                    type={data.content.type}
                    variant={data.content.variant}
                    color={data.content.required && (value === "" || value === undefined) ? "error" : "primary"}

               >
               </TextField>


          </Paper>
     )
}

export default CustomInput