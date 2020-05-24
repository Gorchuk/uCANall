import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View, SafeAreaView } from 'react-native';
// import { styles } from './stylesheet';

// COMPONENTS START
// COMPONENTS END

// PAGES START
import TimerScreen from './pages/TimerScreen';
import DetailsScreen from './pages/DetailsScreen';
import {styles} from "./stylesheet";
// PAGES END

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Button
					title="Go to Timer"
					onPress={() => navigation.navigate('Timer')}
				/>
				<Button
					title="Go to Details"
					onPress={() => navigation.navigate('Details')}
				/>
			</View>
		</SafeAreaView>
	);
}


function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Timer" component={TimerScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}


export default App;