import React from 'react'
import { StyleSheet, View, Text, Image, Button, Alert } from 'react-native'


const Card = ( { userName, userPhoto, photo, children } ) => (
	<View style={styles.card}>

		<View style={styles.userInfo}>
			<Image
				style={styles.userPhoto}
				source={{ uri: userPhoto }}
			/>
			<Text style={styles.userName}> { userName.toString()} </Text>
		</View>

		<View style={styles.photoContainer}>
			<Image
				style={styles.photo}
				source={{ uri: photo }}
			/>
		</View>

		<View>
			<Button 
				title="Лайк" 
				onPress={() => Alert.alert(`Вы оценили фотографию ${userName}`)}
			/>
		</View>

		<View style={styles.description}>{children}</View>
	</View>
)


Card.defaultProps = {
  userName: 'Неизветсный пользователь',
  userPhoto: 'https://picsum.photos/id/723/40',
  photo: 'https://picsum.photos/id/723/500'
}

export default Card

const styles = StyleSheet.create({
	card: {
		marginTop: 30
	}, 
	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10
	}, 
	userPhoto: {
		width: 40,
		height: 40,
		borderRadius: 20
	}, 
	userName: {
		marginHorizontal: 10
	},
	photoContainer: {
		aspectRatio: 1
	},
	photo: {
		...StyleSheet.absoluteFill
	},
	
	description: {
		paddingHorizontal: 10
	}
})