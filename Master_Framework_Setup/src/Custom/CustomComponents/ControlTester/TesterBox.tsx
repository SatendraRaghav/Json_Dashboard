import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';



export const myBoxTester: RankedTester = rankWith(200, optionIs("boxType", true));
// export const myBoxTester = rankWith(3, and(isStringControl, formatIs('Box')));
export default rankWith(
  3, //increase rank as needed
  scopeEndsWith("Box")
);