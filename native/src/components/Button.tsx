import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export default function Button() {
	return (
		<View style={styles.button}>
			
		</View>
	)
}

const styles = StyleSheet.create({
	button : {
		position : "absolute",
		top : 0,
		width : 100,
		height : 100,
		backgroundColor : "#00ff00",
		borderRadius : 50
	}
});