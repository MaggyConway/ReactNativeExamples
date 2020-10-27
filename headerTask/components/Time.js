import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import SvgUri from "expo-svg-uri"

const Time = ({ deliveryTime }) => (
	<View style={styles.time_container}>
		<SvgUri 
			style={styles.time_icon}
			source={require('../assets/time_icon.svg')}
		/>
		<Text style={styles.txt}>{ deliveryTime }</Text>
	</View>
)

const styles = StyleSheet.create({
	time_icon: {
		width: 23,
		height: 23
	},
	txt: {
		fontFamily: 'Roboto',
		fontSize: 16,
		fontWeight: '500',
		color: '#898A8D',
		marginLeft: 10
	},
	time_container: {
		flexDirection: 'row'
	}
});

export default Time

