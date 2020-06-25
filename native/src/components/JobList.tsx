import * as React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';


interface Props {
	job : string,
	time : string,
	week : string,
	color : string
}

export default function Button(props : Props) {
	const {job, time, week, color} = props;
	return (
		<View style={styles.base}>
			<View style={{flexDirection : "column" , flex : 1 , marginBottom : 10 , borderRadius : 10}}>
				<View><Text>{`・${job}`}</Text></View>
				<View><Text>{`・${time}`}</Text></View>
				<View><Text>{`・${week}`}</Text></View>
			</View>
			{/* <View style={{flexDirection : "column" , flex : 1 , marginBottom : 10 , backgroundColor : '#ff0000', borderRadius : 10,padding :10,borderWidth : 2, borderColor : '#c5c5c5'}}>
				<Button style={{backgroundColor : color , width : 20, height : 20 , borderRadius : 20}}></Button>
			</View> */}
			<View style={{flexDirection : "column" , flex : 1, justifyContent : "center" , alignItems : "center"}}>
				<View style={{backgroundColor : color, width : 50 , height : 50, borderRadius : 50}}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	base : {
		// position : "relative",
		flexDirection : "row",
		flex : 1,
		backgroundColor : '#ffffff',
		borderRadius : 5,
		borderWidth : 2,
		borderColor : '#c5c5c5',
		marginBottom : 10,
		padding : 10

	},
	button_active : {
		width : 100,
		height : 100,
		backgroundColor : "#5a73c9",
		borderRadius : 50,
		zIndex : 1,
		marginTop : 50,

	},
	button_sub : {
		width : 100,
		height : 100,
		backgroundColor : "#ffffff",
		borderRadius : 50,
		zIndex : 1,
		marginTop : 50,
	}
});