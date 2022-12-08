import React,{useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import { Card, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';

export default function CustomSelect({ data, value, updateValue }: any) {
const [apiOption,setApiOption] = React.useState<Array<any>>([])
useEffect(()=>{
  const apiCall = async()=>{
     const result:Array<String> = await axios.get(data.content.optionApi);
     console.log(result)
     const arr = result.data.map((elem:any)=>{
        return elem.name;
     })
     setApiOption(arr)
  }
  data.content.optionApi?apiCall():setApiOption(data.content.options)
},[])

    return (
        <Paper elevation={2} sx={{ width: "80%", ...data.style,  margin: "auto auto" }} >
              {
                    data.content.required === true && (value === "" ?
                         (<Card sx={{ backgroundColor: "#F5FFD6", paddingBottom: "10px" }}>
                              <Typography color="error">{`${data.content.label} Can't be Empty !`}</Typography>
                         </Card>) :
                         (typeof data.content === "object" && (typeof data.content.customValidate === "object"
                              && (
                                   (new RegExp(JSON.parse(JSON.stringify(data.content.customValidate)).logic.slice(1, -1)).test(value) === false && typeof value !== "undefined") && (
                                        <Card sx={{ backgroundColor: "#F5FFD6", paddingBottom: "10px" }}>
                                             <Typography color="error">{`Invalid ${data.content.label}`}</Typography>
                                        </Card>
                                   )
                              )))

                    )
               }
            {
                data.content.type === "radio" ? (<FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{paddingLeft:"20px"}}>{data.content.label}</FormLabel>
                    <RadioGroup
                       sx={{paddingLeft:"20px"}}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) =>{
                            updateValue(e.target.value)
                            // console.log(e.target.value)
                           
                        }}
                    >
                    {
                      apiOption.map((elem: any, i: number) => ( <FormControlLabel value={elem} control={<Radio />} label={elem} />))
                    }
                    </RadioGroup>
                </FormControl>) : (
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{data.content.label}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            label={data.content.label}
                            onChange={(e) =>{ updateValue(e.target.value)
                                console.log(e.target.value)
                            }}
                        >
                            {
                           apiOption.map((elem: string, i: number) => (<MenuItem key={elem + i} value={elem}>{elem}</MenuItem>))
                            }
                        </Select>
                    </FormControl>
                )
            }

        </Paper>
    );
}