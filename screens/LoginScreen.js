import React from "react";
import {
	Text, 
	View, 
	StyleSheet,
	Button,
} from "react-native";

const LoginScreen = ({navigation}) => {
	const clickHandle = () => {
		console.log("btn clicked");
		navigation.navigate("Home")
	}
	return (
		<View style={styles.container}>
			<Text>hello from Login</Text>
			<Button
				title="home"
				color="red"
				onPress={clickHandle}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#333"
	}
})

export default LoginScreen;
