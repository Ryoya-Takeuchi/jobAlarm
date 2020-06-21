import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars';
export default function CalendarCom() {
	React.useEffect(() => {
		LocaleConfig.locales['jp']  = {
			monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
			monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
			dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','月曜日'],
			dayNamesShort: ['日','月','火','水','木','金','土'],
		  };
	},[])
	return (
		<Calendar
			// style={styles.calendar_area}
			style={{
				borderWidth: 1,
				// borderColor: 'gray',
				borderRadius: 5,
			  }}
			  theme={{
				// selectedDayBackgroundColor: '#000000',
				selectedDayTextColor: '#ffffff',
			  }}
			/>
	);
}

export const styles = StyleSheet.create({
	calendar_area : {
		// borderRadius : 30,
		backgroundColor : '#ff0000'
	}
})
