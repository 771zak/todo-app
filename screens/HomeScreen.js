import React, {useState} from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	TextInput,
	TouchableOpacity,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({navigation}) => {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");

	const handleLogOut = () => {
		navigation.navigate("Login")
	}
	const addTask = (value) => {
		let task = {
			text: value,
			id: new Date(),
			checked: false,
		}
		tasks.push(task)
		setTask("")
	}

	return (
		<View style={styles.container}>
			<View style={styles.tasksContainer}>
				<Text>hello</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput 
					style={styles.textInput}
					onChangeText={text => setTask(text)}
					value={task}
				/>
				<TouchableOpacity 
					style={styles.addIcon}
					onPress={() => addTask(task)}
				>
					<Icon name="plus-circle" color="pink" size={40} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	tasksContainer: {
		width: "100%",
		height: "90%",
	},
	inputContainer: {
		position: "absolute",
		bottom: 20,
		width: "90%",
	},
	textInput: {
		padding: 10,
		backgroundColor: "#f32ac2",
		fontSize: 18,
		borderRadius: 15,
		color: "#333"
	},
	addIcon: {
		position: "absolute",
		bottom: 5,
		right: 5,
	}
});

export default HomeScreen;
