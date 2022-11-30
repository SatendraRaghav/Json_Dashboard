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

export const renders = [
    ...materialRenderers,
    { tester:TesterAppbar,renderer:ControlAppbar },
    { tester:TesterButton,renderer:ControlButton },
    { tester:TesterInput,renderer:ControlInput },
    { tester:TesterEmail,renderer:ControlInput },
    {tester:TesterEmptyBox,renderer:ControlEmptyBox },
    {tester:materialHorizontalLayoutTester,renderer:MaterailLayoutHorizontal}
  ];