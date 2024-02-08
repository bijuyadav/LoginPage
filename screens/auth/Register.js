import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import BoxInput from "../../Components/Forms/BoxInput";
import SubmitButton from "../../Components/Forms/SubmitButton";

// states
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [loading, setloading] = useState(true);

  // btn function.

  const HandleSubmit = () => {
    try {
      setloading(true);
      if (!name || !email || !mobileNo || !password) {
        return Alert.alert("Please Fill All The Fields");
        setloading(false);
      }

      setloading(false);
      console.log("Regester Data ==> ", { name, email, mobileNo, password });
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <BoxInput inputTitle={"Name"} value={name} setValue={setName} />
        <BoxInput
          inputTitle={"Email-ID"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <BoxInput
          inputTitle={"Mobile No."}
          keyboardType="numeric"
          value={mobileNo}
          setValue={setMobileNo}
        />
        <BoxInput
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text>
        {JSON.stringify({ name, email, mobileNo, password }, null, 4)}
      </Text> */}

      <SubmitButton
        btnTitle={"Submit"}
        loading={loading}
        HandleSubmit={HandleSubmit}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#aa61d4",
  },
  pageTitle: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "green",
  },
});

export default Register;
