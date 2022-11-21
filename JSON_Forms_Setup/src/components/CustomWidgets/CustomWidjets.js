import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const CustomButton = (props)=>{
    const {options} = props;
    const {value} = options;
     return(
     <Button
     type={value.type}
     sx={value.style.style}  variant="contained" 
     onClick= {()=>props.formContext.handler(value.eventName,props)}
    >{value.content}</Button>) 
  }
  const CustomLabel = (props)=>{
    const {options} = props;
    const {value} = options;
     return(
      <Box sx={{ flexGrow: 1 ,marginBottom:"15vh"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            sx={{width:"20vw",paddingLeft:"150px", mr: 2,}}
          >
           <img src="../Act21-logo.png" alt="company Image" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button type={value.content.buttonType} sx={{display:{xs:"none",sm:"inline-block"}}}color="inherit" varient="filled">  {value.content.buttonContent}</Button>
        </Toolbar>
      </AppBar>
    </Box>
    ) 
  }
  const CustomTextbox = (props)=>{
    const {options} = props;
    const {value} = options;
     return(
      <Box sx={value.style} >
      <TextField
      required={value.content.required}
      value={props.value}
      fullWidth
      onChange={(event) => {
        props.onChange(event.target.value)
        props.formContext.tempChange(event)}}
      
    
      label= {value.content.label}
      type={value.content.type}
      // variant={value.style.mui.varient}
    >
    </TextField>
    </Box>
    ) 
  }
 
  export const widgets = {
    CustomButton: CustomButton,
    CustomLabel: CustomLabel,
    CustomTextbox:CustomTextbox
  };

