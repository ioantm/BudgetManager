import React, { Component } from 'react'
import {
	View, 
	Text,
	StyleSheet
} from 'react-native'

const AddButton = ({ children }) => 
{
	console.log(children);
	return (
	<View>
		{
			children || (
				<View style={styles.button}>
					<Text>
						Tap
					</Text>
					<Text>
						 to add income
					</Text>
				</View>
			)
		}
		{ /*view used as target for pan handlers*/ }
		<View style={styles.cover}></View>
	</View>);
}

const styles = StyleSheet.create({
	button: {
		height: 100,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},

	cover: {
		position: 'absolute',
		width: 100, 
		height: 100, 
		top: 0
	}
});

export default AddButton;