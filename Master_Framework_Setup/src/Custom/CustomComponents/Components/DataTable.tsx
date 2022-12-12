import React,{useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridEventListener,GridColDef  } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataContext,actions } from '../../../Context';
import { Paper } from '@mui/material';
import {  styled } from '@mui/material/styles';
import { gridClasses } from '@mui/x-data-grid';



const demo =[{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '55555', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '55555', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'},
{id:Math.random(),CRN_Number: '123444', Venndor_Code: '555555', Agency_Type: 'MULTICITY', Role_Category: 'DSA', Name_Of_Agency: 'raghav'}
]



 function DataTable({data}:any) {

  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    fontWeight:"bolder",
    color:"white",
    backgroundColor:"#1976d2",
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: "#F5FCFF",
      color:"black",
      fontWeight:"500",
      '&:hover, &.Mui-hovered': {
        backgroundColor: "#D3F5eF",
        
    }
  },
    [`& .${gridClasses.row}.odd`]: {
      backgroundColor: "#FCF5FF",
      color:"black",
      fontWeight:"500",
      '&:hover, &.Mui-hovered': {
        backgroundColor: "#D3F5eF",
    }
  },
  // '&:hover, &.Mui-hovered': {
  //       backgroundColor: alpha(theme.palette.primary.light, ODD_OPACITY),
  //   }
  }));
  const { dispatch,state } = useContext(DataContext);
  useEffect(()=>{
    dispatch({type:actions.resetRecordsApi,payload:demo})
  },[])
  const rows = state.recordsApi;
  const columns: GridColDef[] = data.content.column;
  // const {  loading } = useDemoData({
  //   dataSet: 'Employee',
  //   rowLength: 500,
  // });
  console.log(state)
   const handleEvent: GridEventListener<'rowClick'> = ( params, event, details 
  ) => {
    function addState() {
      let stateObj = { id: "100" };
        
      window.history.pushState(stateObj,
               "Page 2", `${data.content.redirectPage}`);
      }
      addState()
      dispatch({type:actions.changeUrl}),
      dispatch({type:actions.resetFormData,payload:params.row});
      console.log(state.formData)
  };
  return (
    <Paper elevation={6} sx={{ height: "600px", width: '95%',margin:"0 auto" }}>
      {
        rows.length<2?(<Box sx={{height:"300px",paddingTop:"150px",textAlign:"center",width:"50%",margin:"auto auto"}}>No Records Found</Box>):(
      <StripedDataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        onRowClick={handleEvent}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        // loading={loading}
        // {...data}
      />)
      }
    </Paper>
  );
}

export default DataTable