import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const {width , height} = Dimensions.get('window');
interface Props {
	baseDirection : string,
	positionVertical : number,
	positionHorizontal : number,
	widthRate : number,
	heightRate  : number,
	backCircleTop : number,
	backCircleHorizontal : number
}
export default function Circle(props:Props) {
	const {baseDirection,positionVertical,positionHorizontal,widthRate,heightRate,backCircleHorizontal,backCircleTop,} = props;
	
	return (
		<View style={[{position : "absolute",top : positionVertical},baseDirection == "right" ? {right : positionHorizontal} : {left : positionHorizontal}]}>
			<View style={{flex : 1 , position : "relative"}}>
				<View style={[styles.circle_white,{width : width / widthRate , height : width / widthRate , borderRadius : width / widthRate}]}></View>
				<View style={[styles.circle_gray,{width : width / widthRate , height : width / widthRate , borderRadius : width / widthRate, top : backCircleTop, left : backCircleHorizontal}]}></View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	circle_white : {
		backgroundColor : '#ffffff',
		position : "absolute",
		zIndex : 1
	},
	circle_gray : {
		width : width / 2,
		height : width / 2,
		borderRadius : width /2,
		backgroundColor : '#c5c5c5',
		position : "absolute",
		zIndex : 0
		// left : -50
	}
})