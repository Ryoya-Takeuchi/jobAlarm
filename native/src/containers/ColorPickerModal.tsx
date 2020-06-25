import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import Modal from "react-native-modal";
import { ColorPicker } from 'react-native-color-picker'

interface Props {
	color : string,
	isVisible : boolean
}

export default function ColorPickerModal(props : Props) {
	const {color , isVisible} = props;
	return (
		<Modal isVisible={isVisible}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
				<ColorPicker
					onColorSelected={color => alert(`Color selected: ${color}`)}
					style={{width : 200, height : 200}}
				/>
			</View>
		</Modal>
	);
}