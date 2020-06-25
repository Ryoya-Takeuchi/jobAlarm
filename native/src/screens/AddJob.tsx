import * as React from 'react';
import {View,SafeAreaView,StyleSheet, Dimensions, FlatList} from 'react-native';
import {Store} from '../contexts/app';
import Circle from '../components/Circle';
import { Text, Button, Icon, Badge } from 'native-base';
import JobList from '../components/JobList';
import ColorPickerModal from '../containers/ColorPickerModal';
import InputModal from '../containers/InputModal';

const {width , height} = Dimensions.get("window")
export default function AddJob() {
	const {name , setUser} = React.useContext(Store);
	const {width , height} = Dimensions.get("window")
	const [isVisible , setVisible] = React.useState(false)

	React.useEffect(()=> {
		setUser('コップ')
	},[])

	const data = [
		{id : 1, job : '仕事1' , time :  '10:00' , week : '平日', color : '#ff0000'},
		{id : 2, job : '仕事2' , time :  '09:00' , week : '土,日', color : '#00ff00'},
		
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
				<View style={styles.job_list_area}>
					<View style={styles.job_list_area}>
					{/* <FlatList
						data={data}
						renderItem={({ item }) => <Text>{item.job}</Text>
						// keyExtractor={item => item.id}
					/> */}
					<FlatList
						data={data}
						renderItem={({ item }) => <JobList job={item.job} time={item.time} week={item.week} color={item.color} />}
						keyExtractor={item => item.id}
					/>
					</View>
					<View style={styles.job_add_button_area}>
						<Button onPress={() => setVisible(item => !item)} style={{backgroundColor : '#5a73c9',borderRadius : 100}}>
							<Icon name='add-alarm' type='MaterialIcons' style={{ width :25}}/>
						</Button>
					</View>
				</View>
				<InputModal color={'#ffc323'} isVisible={isVisible}/>
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
	job_list_base : {
		position : "relative",
		width : width/1.3,
		height : height/1.3,
		backgroundColor : '#ffffff',
		flexDirection : "column",
	},
	job_list_area : {
		width : width / 1.3,
		height  :height /1.4,
		marginTop : 10
	},
	job_add_button_area : {
		width : width / 1.3,
		height  :width /6,
		flexDirection  : "row-reverse"
	}
})