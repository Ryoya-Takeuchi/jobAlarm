import * as React from 'react';
import {View,SafeAreaView,StyleSheet, Dimensions} from 'react-native';
import {Store} from '../contexts/app';
import Circle from '../components/Circle';
import { Text } from 'native-base';


export default function AddJob() {
	const {name , setUser} = React.useContext(Store);
	const {width , height} = Dimensions.get("window")

	React.useEffect(()=> {
		setUser('コップ')
	},[])

	return (
		<SafeAreaView style={styles.container}>
			<Circle
				baseDirection = {"left"}
				positionVertical = {-40}
				positionHorizontal = {-100}
				widthRate = {2}
				heightRate = {2}
				backCircleTop = {5}
				backCircleHorizontal = {5}/>
			<Circle
				baseDirection = {"right"}
				positionVertical = {50}
				positionHorizontal = {50}
				widthRate = {2.5}
				heightRate = {2}
				backCircleTop = {5}
				backCircleHorizontal = {-5}/>
			<Circle
				baseDirection = {"left"}
				positionVertical = {300}
				positionHorizontal = {100}
				widthRate = {10}
				heightRate = {2}
				backCircleTop = {3}
				backCircleHorizontal = {3}/>
			<Circle
				baseDirection = {"right"}
				positionVertical = {340}
				positionHorizontal = {120}
				widthRate = {8}
				heightRate = {2}
				backCircleTop = {3}
				backCircleHorizontal = {-3}/>
			<Circle
				baseDirection = {"left"}
				positionVertical = {400}
				positionHorizontal = {10}
				widthRate = {6}
				heightRate = {2}
				backCircleTop = {3}
				backCircleHorizontal = {3}/>
			<Text style={[styles.title_test,{marginTop : height/3}]}> Add </Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent : "space-between",
		alignItems : "center",
		backgroundColor : '#86DEC6',
		position : "relative"
	},
	title_test : {
		color : '#ffffff',
		fontSize : 30,
		fontWeight : "700",
	},
	footer_test : {
		color : '#ffffff',
		fontSize : 30,
		fontWeight : "600",
	}
})