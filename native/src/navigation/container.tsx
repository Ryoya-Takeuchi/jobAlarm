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
			tabBarIcon :({focused}) => (<LeftTab focused={focused}></LeftTab>),
			
		},
	},
	AddJob: {
		screen: AddJob,
		navigationOptions: {
			title: 'ジョブ追加',
			tabBarIcon :({focused}) => (<LeftTab focused={focused}></LeftTab>),
		},
	},
	Setting: {
		screen: Setting,
		navigationOptions: {
			title: '設定',
			tabBarIcon :({focused}) => (<LeftTab focused={focused}></LeftTab>),
		},
	},
},{
	tabBarOptions : {
		style : {
			backgroundColor : '#86DEC6',
			borderTopColor : '#86DEC6',
		},
		activeTintColor: '#ffffff',
		inactiveTintColor: '#5a73c9',
		tabStyle: {
			width: 'auto'
		},
		labelStyle: {
			fontSize: 15,
			fontWeight: 'bold',
		},
	}
});