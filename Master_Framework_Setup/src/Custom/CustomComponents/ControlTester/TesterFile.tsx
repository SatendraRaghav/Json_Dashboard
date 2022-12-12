
import { rankWith,scopeEndsWith } from '@jsonforms/core';
import { RankedTester,optionIs } from '@jsonforms/core';


export const myFileTester: RankedTester = rankWith(200, optionIs("fileType", true));

export default rankWith(
  3, //increase rank as needed
  scopeEndsWith("File")
);
// const TesterFile = 

// export default TesterFile;