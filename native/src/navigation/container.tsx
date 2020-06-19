import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/Home';
import AddJob from '../screens/AddJob';
import Setting from '../screens/setting';
import LeftTab from '../components/Button';

export default createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
		  title: 'ホーム',
		  tabBarIcon : <LeftTab></LeftTab>,
		},
	},
	AddJob: {
		screen: AddJob,
		navigationOptions: {
		  title: 'ジョブ追加',
		  tabBarIcon : <LeftTab></LeftTab>

		},
	},
	Setting: {
		screen: Setting,
		navigationOptions: {
			title: '設定',
			tabBarIcon : <LeftTab></LeftTab>
		},
	},
});