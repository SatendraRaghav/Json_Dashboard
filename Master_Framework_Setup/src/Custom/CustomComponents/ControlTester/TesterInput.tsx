import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


export const myInputTester: RankedTester = rankWith(200, optionIs("inputType", true));
export default rankWith(
  3, //increase rank as needed
  scopeEndsWith("Input")
);