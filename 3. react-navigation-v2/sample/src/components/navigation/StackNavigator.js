import { createStackNavigator } from 'react-navigation';

import Switch1 from '../screen/Switch1';
import Switch2 from '../screen/Switch2';

export default createStackNavigator(
  {
    Switch1,
    Switch2,
  },
  {
    initialRouteName: 'Switch1',
    headerMode: 'none',
  },
);
