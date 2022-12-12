import { Card, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const CustomInput = ({ data, value, updateValue }: any) => {
     return (

          <Paper elevation={2} sx={{ width: "80%",margin: "auto auto" , ...data.style}} >
               {
                    data.content.required === true && (value === "" ?
                         (<Card sx={{ backgroundColor: "#F5FFD6", padding:"10px 0" }}>
                              <Typography color="error">{`${data.content.label} Can't be Empty !`}</Typography>
                         </Card>) :
                         (typeof data.content === "object" && (typeof data.content.customValidate === "object"
                              && (
                                   (new RegExp(JSON.parse(JSON.stringify(data.content.customValidate)).logic.slice(1, -1)).test(value) === false && typeof value !== "undefined") && (
                                        <Card sx={{ backgroundColor: "#F5FFD6", padding:"10px 0" }}>
                                             <Typography color="error">{`Invalid ${data.content.label}`}</Typography>
                                        </Card>
                                   )
                              )))

                    )
               }
               <TextField
                    required={data.content.required && true}
                    fullWidth
                    onChange={(e) => updateValue(e.target.value)}
                    value={value}
                    label={data.content.label}
                    helperText={data.content.helperText}
                    size={data.content.size }
                    type={data.content.type }
                    variant={data.content.variant}
               >
               </TextField>


          </Paper>
     )
}

export default CustomInput