import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Start from '../screens/Start';
import TabContainer from './container';

const stack = createSwitchNavigator(
	{
		Start: { screen: Start },
		Tab: { screen: TabContainer }
	},
	{
		initialRouteName: 'Start',
	}
)

export default createAppContainer(stack)