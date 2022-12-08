
import { resolveSchema } from '@jsonforms/core/lib/util';
import { composePaths, ControlElement, Resolve } from '@jsonforms/core';
import { rankWith,scopeEndsWith, isStringControl,formatIs,and } from '@jsonforms/core';


export default rankWith(
  3, //increase rank as needed
  scopeEndsWith("File")
);
// const TesterFile = 

// export default TesterFile;