import React from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
import {styles} from "../stylesheet";
import { NavigationContainer } from '@react-navigation/native';

export default class DetailsScreen extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>Details Screen</Text>
					<Button
						title="Go to Home"
						onPress={() => this.props.navigation.navigate('Home')}
					/>
				</View>
			</SafeAreaView>
		)
	}
}