import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
	return (
			<TextInput 
				placeholder={placeholder}
				value={value}
				onChangeText={setValue}
				style={styles.input}
				secureTextEntry={secureTextEntry}
			/>
	)
}

const styles = StyleSheet.create({
	input: {
		width: "90%",
		backgroundColor: "#fff",
		padding: 10,
		fontSize: 16,
		borderRadius: 5,
		elevation: 2,
		marginVertical: 5,
	}
}) 

export default CustomInput;
