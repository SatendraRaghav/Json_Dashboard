import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CustomSelect({ data, value, updateValue }: any) {
const [demoData,setDemoData] = React.useState<string|Array<string>>([])

    return (
        <Box sx={{ width: "80%", ...data.style, backgroundColor: "white", margin: "auto auto" }} >
            {
                data.content.type === "radio" ? (<FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{paddingLeft:"20px"}}>{data.content.label}</FormLabel>
                    <RadioGroup
                       sx={{paddingLeft:"20px"}}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) =>{
                            data.content.save&&(setDemoData([...demoData,e.target.value]))
                            demoData[0]?window.sessionStorage.setItem(`${data.content.label}`,JSON.stringify({data:demoData})):(window.sessionStorage.setItem(`${data.content.label}`,"No Data available"))
                            updateValue(e.target.value)}}
                    >
                    {
                        data.content.options.map((elem: any, i: number) => ( <FormControlLabel value={elem} control={<Radio />} label={elem} />))
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
                            onChange={(e) => updateValue(e.target.value)}
                        >{
                                data.content.options.map((elem: string, i: number) => (<MenuItem key={elem + i} value={elem}>{elem}</MenuItem>))
                            }
                        </Select>
                    </FormControl>
                )
            }

        </Box>
    );
}