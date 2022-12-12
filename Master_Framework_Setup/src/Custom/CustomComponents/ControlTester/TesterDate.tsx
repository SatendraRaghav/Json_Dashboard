import { rankWith, scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


export const myDateTester: RankedTester = rankWith(200, optionIs("dateType", true));
export default rankWith(
  3, //increase rank as needed
  scopeEndsWith("Date")
);