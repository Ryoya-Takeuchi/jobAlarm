import * as React from 'react';
import {View,SafeAreaView,StyleSheet, Dimensions} from 'react-native';
import {Store} from '../contexts/app';
import Circle from '../components/Circle';
import { Text } from 'native-base';
import Calendar from '../components/Calendar';
// import Calendar from '../components/calendar';

const {width , height} = Dimensions.get("window")

export default function Home() {
	const {name , setUser} = React.useContext(Store);

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
			{/* <View style={styles.calendar_base_area}> */}
				<View style={styles.calendar_base_area}>
					<Calendar/>
				</View>
			{/* </View> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent : "center",
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
	},
	calendar_base_area : {
		position : "relative",
		width : width/1.2,
		height : height/1.5
	},
	// calendar_area : {
	// 	position : "absolute",
	// 	width : width/1.2,
	// 	height : width/1.1,
	// 	top : 10,
	// 	left : 10,
	// 	// borderTopRightRadius : 100,
	// 	borderTopEndRadius : 100,
	// 	borderTopStartRadius : 100,
	// }
	
})