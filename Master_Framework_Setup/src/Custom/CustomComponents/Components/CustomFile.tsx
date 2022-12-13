import { IconButton, TextField, Typography } from '@mui/material';
import { Card} from '@mui/material';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const CustomFile = ({ data, value, updateValue }: any) => {
  let color = "inherit";
  data.content.required&&(value===""||value === undefined)?color="red":"inherit";
  const saveData = async (value: any) => {

    if (data.content.saveApi) {
      const result: any = await axios.post(`${data.content.saveApi}`, { "file": value });
      updateValue(value)
    } else {
      updateValue(value)
    };
  }
  return (
    <Paper elevation={6} sx={{ width: "90%",margin: "15px auto", outline:`1px solid ${color}`,outlineOffset:5,...data.style,  border: "3px solid whitesmoke", borderBottom: "none",backgroundColor:"#F0F1FF" }} >
      {
                    data.content.required === true && (value === "" &&
                         (<Card sx={{ backgroundColor: "#F2F7FF", paddingBottom: "10px" }}>
                              <Typography color="error">{`${data.content.label} Can't be Empty !`}</Typography>
                         </Card>)
                    )
               }
      <Typography variant='h6' sx={{ marginLeft: "15px", color: "gray" }}>{data.content.required?data.content.label:`${data.content.label}*`}</Typography>
      <TextField
        required={data.content.required}
        fullWidth
        onChange={(e) => {
          saveData(e.target.value)

        }}
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
        size={data.content.size && "medium"}
        type={"file"}
      >
      </TextField>
      {value &&
        <IconButton color="error" onClick={() => updateValue("")}><DeleteIcon /></IconButton>
      }
    </Paper>
  )

}

export default CustomFile