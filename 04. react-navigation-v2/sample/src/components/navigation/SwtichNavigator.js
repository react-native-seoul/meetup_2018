import { createSwitchNavigator } from 'react-navigation';

import Switch1 from '../screen/Switch1';
import Switch2 from '../screen/Switch2';

export default createSwitchNavigator(
  {
    Switch1: Switch1,
    Switch2: Switch2,
  },
  {
    initialRouteName: 'Switch1',
  },
);
