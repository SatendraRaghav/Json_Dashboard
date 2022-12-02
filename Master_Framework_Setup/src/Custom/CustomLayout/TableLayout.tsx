import React from 'react';
import {
  LayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
  VerticalLayout,
} from '@jsonforms/core';

import {renderTableElementsProps, TableLayoutRender } from './TableLayoutParent';
import { withJsonFormsLayoutProps } from '@jsonforms/react';

/**
 * Default tester for a vertical layout.
 * @type {RankedTester}
 */
export const tableLayoutTester: RankedTester = rankWith(
  200,
  uiTypeIs('VerticalLayout')
);

export const TableLayout = ({ uischema, schema, path, enabled, visible, renderers, cells }: LayoutProps) => {
  const verticalLayout = uischema as VerticalLayout;
  const childProps: renderTableElementsProps = {
    elements: verticalLayout.elements,
    schema,
    path,
    enabled,
    visible
  };

  return <TableLayoutRender {...childProps} renderers={renderers} cells={cells} />;
};

export default withJsonFormsLayoutProps(TableLayout);