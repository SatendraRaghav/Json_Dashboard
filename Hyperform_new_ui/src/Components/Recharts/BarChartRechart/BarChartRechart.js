
import React from 'react'
import { BarChart,Bar,Tooltip,Legend, ResponsiveContainer,Label, LabelList,XAxis, YAxis, CartesianGrid, Cell } from 'recharts'
import { data } from '../RechartData'

const BarChartRechart = () => {

  return (
    <div className='BarChartRechartContainer'>
      <h1 style={{textAlign:"center",textDecoration:"underline"}}>Bar Chart BY Rechart</h1>
        <ResponsiveContainer width={"100%"} height={320}>
          
            <BarChart data={data}  >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='name' stroke='blue'  fontSize={"1.5vw"} >
              </XAxis>
              <YAxis stroke='blue' />
              <Tooltip  contentStyle={{backgroundColor:"#D2C9F5"}}/>
              <Legend />
              <Bar dataKey='fees'  startOffset="none" top={120}>
              <LabelList dataKey="name" position="top" offset={-2} fontSize={"3vw"} stroke="gray" />
              {
                data.map((elem)=>{
                   let color = elem.fees>25?"green":"red";
                  return (
                  <Cell  fill={color}></Cell>
                )})
              }
              </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default BarChartRechart