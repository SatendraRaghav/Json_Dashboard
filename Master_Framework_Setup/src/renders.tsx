import TesterButton from './Custom/CustomComponents/ControlTester/TesterButton';
import ControlButton from './Custom/CustomComponents/Control/ControlButton';
import TesterAppbar from './Custom/CustomComponents/ControlTester/TesterAppbar';
import ControlAppbar from './Custom/CustomComponents/Control/ControlAppbar';
import { myInputTester } from './Custom/CustomComponents/ControlTester/TesterInput';
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
import ControlDataTable from './Custom/CustomComponents/Control/ControlDataTable';
import TesterDataTable from './Custom/CustomComponents/ControlTester/TesterDataTable';
import TesterBox from './Custom/CustomComponents/ControlTester/TesterBox';
import ControlBox from './Custom/CustomComponents/Control/ControlBox';
import { myBoxTester } from './Custom/CustomComponents/ControlTester/TesterBox';
import { myFileTester } from './Custom/CustomComponents/ControlTester/TesterFile';
import { myDateTester } from './Custom/CustomComponents/ControlTester/TesterDate';
import { mySelectTester } from './Custom/CustomComponents/ControlTester/TesterSelect';

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
    // {tester:TableLayoutTester,renderer:TableLayout}
    {tester:TesterDataTable,renderer:ControlDataTable},
    {tester:TesterBox,renderer:ControlBox},
    {tester:myBoxTester,renderer:ControlBox},
    { tester:myInputTester,renderer:ControlInput },
    { tester:myFileTester,renderer:ControlFile },
    { tester:myDateTester,renderer:ControlDate },
    { tester:mySelectTester,renderer:ControlSelect }
  ];