import React from 'react';
import {
  LayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
  VerticalLayout,
} from '@jsonforms/core';
import {
  MaterialLayoutRenderer,
  MaterialLayoutRendererProps
} from './Layout';
import { withJsonFormsLayoutProps } from '@jsonforms/react';

/**
 * Default tester for a vertical layout.
 * @type {RankedTester}
 */
export const materialVerticalLayoutTester: RankedTester = rankWith(
  200,
  uiTypeIs('VerticalLayout')
);

export const MaterialLayoutVertical = ({ uischema, schema, path, enabled, visible, renderers, cells }: LayoutProps) => {
  const verticalLayout = uischema as VerticalLayout;
  const childProps: MaterialLayoutRendererProps = {
    elements: verticalLayout.elements,
    schema,
    path,
    enabled,
    direction: 'column',
    visible
  };

  return <MaterialLayoutRenderer {...childProps} renderers={renderers} cells={cells} />;
};

export default withJsonFormsLayoutProps(MaterialLayoutVertical);