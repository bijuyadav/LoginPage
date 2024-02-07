import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function SubmitButton() {
  return (
    <TouchableOpacity style={stylesCss.SubmitBTN}>
      <Text style={stylesCss.btnText}>Submit</Text>
    </TouchableOpacity>
  );
}

const stylesCss = StyleSheet.create({
  SubmitBTN: {
    backgroundColor: "#d6c563",
    height: 50,
    marginHorizontal: 50,
    borderRadius: 80,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#253094",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
  },
});
