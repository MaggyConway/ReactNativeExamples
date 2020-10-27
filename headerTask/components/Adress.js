import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import SvgUri from "expo-svg-uri"

const Adress = ({ deliveryAdress }) => (
	<View style={styles.adress_container}>
		<SvgUri 
			style={styles.adress_icon}
			source={require('../assets/adress_icon.svg')}
		/>
		<Text style={styles.txt}>{ deliveryAdress }</Text>
	</View>
)

const styles = StyleSheet.create({
	adress_icon: {
		width: 17,
		height: 23,
		backgroundColor: '#fff'
	},
	txt: {
		fontFamily: 'Roboto',
		fontSize: 16,
		fontWeight: '500',
		color: '#898A8D',
		marginLeft: 10
	},
	adress_container: {
		flexDirection: 'row'
	}

});

export default Adress