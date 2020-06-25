import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import Modal from "react-native-modal";

interface Props {
	color : string,
	isVisible : boolean
}

export default function ColorPickerModal(props : Props) {
	const {color , isVisible} = props;
	return (
		<Modal isVisible={isVisible}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent : "center", backgroundColor: "#fff" }}>
					<Form>
						<Item stackedLabel style={{borderBottomWidth : 0}}>
							<Label>仕事名</Label>
							<Input style={{ width: 200, height: 44, padding: 8, borderWidth : 2, borderColor : '#c5c5c5',borderRadius : 20, marginTop : 10 }}/>
						</Item>
						<Item stackedLabel style={{borderBottomWidth : 0}}>
							<Label>時刻</Label>
							<Input style={{ width: 200, height: 44, padding: 8, borderWidth : 2, borderColor : '#c5c5c5',borderRadius : 20, marginTop : 10 }}/>
						</Item>
						<Item stackedLabel last  style={{borderBottomWidth : 0}}>
							<Label>曜日</Label>
							<Input style={{ width: 200, height: 44, padding: 8, borderWidth : 2, borderColor : '#c5c5c5',borderRadius : 20, marginTop : 10 }}/>
						</Item>
					</Form>
			</View>
		</Modal>
	);
}