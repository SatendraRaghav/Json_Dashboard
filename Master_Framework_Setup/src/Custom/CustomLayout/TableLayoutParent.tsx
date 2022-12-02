import React from 'react';
import isEmpty from 'lodash/isEmpty';
import type { UISchemaElement } from '@jsonforms/core';
import {
  JsonFormsCellRendererRegistryEntry,
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  OwnPropsOfRenderer,
} from '@jsonforms/core';
import { JsonFormsDispatch, useJsonForms } from '@jsonforms/react';
import { Hidden } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const renderTableElements = (
  elements:any,
  schema: JsonSchema|undefined,
  path: string|undefined,
  enabled: boolean|undefined,
  renderers?: JsonFormsRendererRegistryEntry[],
  cells?: JsonFormsCellRendererRegistryEntry[]
) => {
    return (
      <>
      <h1>vhgvjhbjhbjbhjhbjhbhj</h1>
      <TableHead>
      <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align="right">Calories</TableCell>
        <TableCell align="right">Fat&nbsp;(g)</TableCell>
        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        <TableCell align="right">Protein&nbsp;(g)</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
       <TableRow>
    {
      elements.map((child:any, index:number) => {
      // const {xs,sm,md,lg} = child.layout;
      return(
         <TableCell key={`${index}-${Math.random()}`}>
        <JsonFormsDispatch
          uischema={child}
          schema={schema}
          path={path}
          enabled={enabled}
          renderers={renderers}
          cells={cells}
        />
     </TableCell>
    )})
      }
     </TableRow>
    </TableBody>
    </>
  )};

export interface renderTableElementsProps extends OwnPropsOfRenderer {
  elements: UISchemaElement[];
}
const TableLayoutComponent =
  ({
    visible,
    elements,
    schema,
    path,
    enabled,
    renderers,
    cells
  }:renderTableElementsProps) => {
    if (isEmpty(elements)) {
      return null;
    } else {
      return (
        <Hidden xsUp={!visible}>
         <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {renderTableElements(
              elements,
              schema,
              path,
              enabled,
              renderers,
              cells
            )}
          </Table>
         </TableContainer>
         
        </Hidden>
      );
    }
  };
export const TableLayoutRender = React.memo(TableLayoutComponent);
