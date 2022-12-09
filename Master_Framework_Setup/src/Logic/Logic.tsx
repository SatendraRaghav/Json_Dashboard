import React,{useContext} from 'react'
import axios from "axios";
import { actions,DataContext } from '../Context';
const demo =[{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '55555', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '55555', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'},
{id:Math.random(),CRNInput: '123444', VenndorCodeInput: '555555', AgencyTypeSelect: 'MULTICITY', RoleCategorySelect: 'DSA', NameOfAgencyInput: 'raghav'}
]
export const LogicHolder = (eventName:string| null,dispatch=({})=>{}) => {
    // const { dispatch,state } = useContext(DataContext);
    console.log( window.sessionStorage.getItem("formData"))
    if(eventName==="submitForm"){
     const data =  window.sessionStorage.getItem("formData");
     const config = {
        headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }
    const Api = "https://hyperform.act21.io/hyperform_2/api/auth/login"
    const callApi = async ()=>{
    await axios.post(Api,data,config).then(
        (res)=>{ window.sessionStorage.setItem("token",`${res.data.accessToken}`)
                   console.log(window.sessionStorage.getItem("token"))}
    ).catch((err)=>console.log(`The error is ${err}`))
    }
    callApi();
    }
    if(eventName==="BackToAgencyApproveRecords"){
        let stateObj = { id: "100" };
        
      window.history.pushState(stateObj,
               "Page 2", "/AgencyRecords");
               dispatch({type:actions.changeUrl}),
      dispatch({type:actions.resetFormData,payload:{}});
      dispatch({type:actions.resetRecordsApi,payload:demo})
      }
      if(eventName==="BackToAgencyPendingRecords"){
      //   let stateObj = { id: "100" };
      // window.history.pushState(stateObj,
      //          "Page 2", "/AgencyRecords");
      //          dispatch({type:actions.changeUrl}),
      // dispatch({type:actions.resetFormData,payload:{}});
      dispatch({type:actions.resetRecordsApi,payload:" "});
      }
      if(eventName==="BackToAgencyRejectRecords"){
      //   let stateObj = { id: "100" };  
      // window.history.pushState(stateObj,
      //          "Page 2", "/AgencyRejectRecords");
      //          dispatch({type:actions.changeUrl}),
      // dispatch({type:actions.resetFormData,payload:{}});
      dispatch({type:actions.resetRecordsApi,payload:" "})
      }
      
      return;
    }