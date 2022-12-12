import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


export const mySelectTester: RankedTester = rankWith(200, optionIs("selectType", true));

export default rankWith(
  3, //increase rank as needed
  scopeEndsWith("Select")
);