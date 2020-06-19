import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export default function Button(props) {
	const {focused} = props;
	React.useEffect(() => {
		console.log("focused",focused);
	},[focused])
	return (
		<View style={styles.base}>
			<View style={[focused ? styles.button_active : styles.button_sub]}></View>
			{/* <View style={styles.button_back}></View> */}
		</View>
	)
}

const styles = StyleSheet.create({
	base : {
		position : "relative",
	},
	button_active : {
		width : 100,
		height : 100,
		backgroundColor : "#ffffff",
		borderRadius : 50,
		zIndex : 1,
		marginTop : 50,

	},
	button_sub : {
		width : 100,
		height : 100,
		backgroundColor : "#5a73c9",
		borderRadius : 50,
		zIndex : 1,
		marginTop : 50,
	}
});