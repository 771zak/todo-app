import React, {useState} from "react";
import {
	Text, 
	View, 
	StyleSheet,
	Button,
	Image,
	useWindowDimensions,
	TouchableOpacity,
	Pressable,
} from "react-native";
import Logo from "../assets/logo.png";
import CustomInput from "../components/CustomINput";
import CustomBtn from "../components/CustomBtn";

import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const LoginScreen = ({navigation}) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const clickHandle = () => {
		console.log("btn clicked");
		navigation.navigate("Home")
	}

	const handleLogin = () => {
		const auth = getAuth(app);

		signInWithEmailAndPassword(auth, email, password)
			.then((userCred) => {
				console.log(userCred.user);
			})
			.catch((err) => {
				console.log(err.message);
			})
	}

	const logUpLink = () => {
		navigation.navigate("Home")
	}

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={Logo}
					resizeMode="contain"
				/>
			</View>
			<View style={styles.inputContainer}>
				<CustomInput 
					placeholder="Email"
					value={email}
					setValue={setEmail}
				/>
				<CustomInput 
					placeholder="Password"
					value={password}
					setValue={setPassword}
					secureTextEntry={true}
				/>
				<CustomBtn
					text="Login"
					onPress={handleLogin}
				/>
				<Text style={styles.text}>Don't have an account ? 
					<Text
						style={styles.link}
						onPress={logUpLink}
					>  Create one.</Text>
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	logoContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		height:  50
	},
	inputContainer: {
		width: "100%",
		alignItems: "center", 
		justifyContent: "center",
	},
	logo: {
		width: "70%",
		maxWidth: 300,
		maxHeight: 200,
	},
	link: {
		color: "blue",
		fontSize: 15,
	},
	text: {
		fontSize: 15,
	}
})

export default LoginScreen;
