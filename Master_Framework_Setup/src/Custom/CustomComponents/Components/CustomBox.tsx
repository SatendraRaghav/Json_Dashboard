import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const CustomBox = ({data}:any) => {
  return (
   <Box sx={{...data.style}}>
   <Typography variant={data.content.variant}>{data.content.heading}</Typography>
   </Box>
  )
}

export default CustomBox;