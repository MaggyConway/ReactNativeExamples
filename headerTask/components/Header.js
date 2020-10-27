import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Adress from './Adress.js'
import Time from './Time.js'


const Header = ({ deliveryAdress, deliveryTime }) => (
	<View style={styles.header}>
		<Adress deliveryAdress={deliveryAdress} />
		<Time deliveryTime={deliveryTime} />
	</View>
)

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#fff',
	    flexDirection: 'row',
	    alignItems: 'stretch',
	    justifyContent: 'space-between',
	    paddingHorizontal: 10,
	    paddingTop: 30,
	    paddingBottom: 10,
	    marginHorizontal: 40,
	    marginTop: 15,
	    borderBottomWidth: 1,
	    borderBottomColor: '#9A7C48',
	    //borderTopWidth: 1,
	    //borderTopColor: 'silver'
	}
});

export default Header