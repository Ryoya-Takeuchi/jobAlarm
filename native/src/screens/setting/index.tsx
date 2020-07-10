import * as React from 'react';
import {View,SafeAreaView,StyleSheet, Dimensions, FlatList,} from 'react-native';
import {Store} from '../../contexts/app';
import Circle from '../../components/Circle';
import { Text, Thumbnail,Icon } from 'native-base';
// import { SketchPicker } from 'react-native-color';

export default function Setting() {
	const {name , setUser} = React.useContext(Store);
	const {width , height} = Dimensions.get("window")
	// const {hue,sat,val} = {0,0,0};

	React.useEffect(()=> {
		setUser('コップ')
	},[])

	const data = [
		{id : 1,title : 'TK', icon : "account-circle" , font_color : '#ffffff' ,back_color : '#54D3C9',type : "MaterialIcons"},
		{id : 2,title : 'ヘルプ' ,icon : "error-outline" , font_color : '#ffffff' ,back_color : '#54D3C9',type : "MaterialIcons"},
		{id : 3,title : 'ログアウト' ,icon : "log-out" , font_color : '#ffffff' ,back_color : '#FF6373',type : "Entypo"},
	]

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
				<FlatList
					data={data}
					style={{marginTop : width/5, width : width/1.9 , height : height, position : "absolute"}}
					// keyExtractor={item => item.id}
					renderItem={({ item }) => 
					<View style={[styles.setting_area]}>
						<View style={{width : width/7 , height : width/7, backgroundColor : item.back_color, borderRadius : 100,alignItems : "center", justifyContent : "center"}}>
							<Icon name={item.icon} type={item.type} style={{color: item.font_color}}/>
						</View>
						<View style={{flex : 1,alignItems : "center", justifyContent : "center"}}>
							<Text>{item.title}</Text>
						</View>
					</View>
				}
				/>
			
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
	},
	setting_area : {
		flex : 1,
		backgroundColor : '#ffffff',
		padding : 10,
		flexDirection : "row",
		marginTop : 10,
		borderRadius : 100
		
	}
	
})