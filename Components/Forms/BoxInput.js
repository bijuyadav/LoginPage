import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function BoxInput({
  inputTitle,
  autoComplete,
  keyboardType,
  secureTextEntry,
  value,
  setValue,
}) {
  return (
    <View>
      <Text style={Styles.textStyle}>{inputTitle}</Text>
      <TextInput
        style={Styles.InputBox}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
}
const Styles = StyleSheet.create({
  InputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "green",
  },
  textStyle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 14,
  },
});
