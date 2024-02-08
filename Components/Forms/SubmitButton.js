import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function SubmitButton({ HandleSubmit, btnTitle, loading }) {
  return (
    <TouchableOpacity style={stylesCss.SubmitBTN} onPress={HandleSubmit}>
      <Text style={stylesCss.btnText}>
        {loading ? "Please Wait..." : btnTitle}
      </Text>
    </TouchableOpacity>
  );
}

const stylesCss = StyleSheet.create({
  SubmitBTN: {
    backgroundColor: "black",
    height: 50,
    marginHorizontal: 50,
    borderRadius: 80,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
  },
});
