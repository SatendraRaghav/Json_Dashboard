import TesterButton from './Custom/CustomComponents/ControlTester/TesterButton';
import ControlButton from './Custom/CustomComponents/Control/ControlButton';
import TesterAppbar from './Custom/CustomComponents/ControlTester/TesterAppbar';
import ControlAppbar from './Custom/CustomComponents/Control/ControlAppbar';

import {
    materialRenderers,
  } from '@jsonforms/material-renderers';
import ControlInput from './Custom/CustomComponents/Control/ControlInput';
import TesterInput from './Custom/CustomComponents/ControlTester/TesterInput';
import TesterEmail from './Custom/CustomComponents/ControlTester/TesterEmail';
import TesterEmptyBox from './Custom/CustomComponents/ControlTester/TesterEmptyBox';
import ControlEmptyBox from './Custom/CustomComponents/Control/ControlEmptyBox';
import MaterailLayoutHorizontal from './Custom/CustomLayout/MaterailLayoutHorizontal';
import { materialHorizontalLayoutTester } from './Custom/CustomLayout/MaterailLayoutHorizontal';
import TesterSelect from './Custom/CustomComponents/ControlTester/TesterSelect';
import ControlSelect from './Custom/CustomComponents/Control/ControlSelect';
import ControlFile from './Custom/CustomComponents/Control/ControlFile';
import TesterFile from './Custom/CustomComponents/ControlTester/TesterFile';
import ControlDate from './Custom/CustomComponents/Control/ControlDate';
import TesterDate from './Custom/CustomComponents/ControlTester/TesterDate';
import { TableLayout, tableLayoutTester } from './Custom/CustomLayout/TableLayout';
export const renders = [
    ...materialRenderers,
    { tester:TesterAppbar,renderer:ControlAppbar },
    { tester:TesterButton,renderer:ControlButton },
    { tester:TesterInput,renderer:ControlInput },
    { tester:TesterEmail,renderer:ControlInput },
    {tester:TesterEmptyBox,renderer:ControlEmptyBox },
    {tester:TesterSelect,renderer:ControlSelect },
    {tester:TesterFile,renderer:ControlFile },
    {tester:TesterDate,renderer:ControlDate },
    {tester:materialHorizontalLayoutTester,renderer:MaterailLayoutHorizontal},
    {tester:tableLayoutTester,renderer:TableLayout}
  ];