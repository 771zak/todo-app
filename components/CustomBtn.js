import React from "react";
import {
	TouchableOpacity, 
	Text,
	StyleSheet,
} from "react-native";

const CustomBtn = ({text, onPress}) => {
	return (
		<TouchableOpacity 
			style={styles.btn}
			onPress={onPress}
		>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {
		width: "90%",
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "orange",
		borderRadius: 5,
		marginVertical: 10,
	},
	text: {
		fontSize: 16,
		color: "black",
		fontWeight: "700",
	}
})

export default CustomBtn;
