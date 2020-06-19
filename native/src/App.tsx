import React,{useState} from 'react';
import AppProvider from './contexts/app';
import Start from './screens/Start';
import AppScreen from './navigation';


console.disableYellowBox = true;

export default function App() {
	return (
	<AppProvider>
		<AppScreen/>
	</AppProvider>
	);
}