import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import BoxInput from "../../Components/Forms/BoxInput";
import SubmitButton from "../../Components/Forms/SubmitButton";

// states
const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [loading, setloading] = useState(true);

  // btn function.

  const HandleSubmit = () => {
    try {
      setloading(true);
      if (!name) {
        Alert.alert("Please Fill Name");
        setloading(false);
        return;
      }
      if (!email) {
        Alert.alert("Please Fill Email-ID");
        setloading(false);
        return;
      }
      if (!mobileNo) {
        Alert.alert("Please Fill Mobile No.");
        setloading(false);
        return;
      }
      if (!password) {
        Alert.alert("Please Fill Password");
        setloading(false);
        return;
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
      <Text style={Styles.alreadyLoginBtn}>
        Already Regestered Please{"  "}
        <Text
          style={{ color: "white", fontWeight: "bold" }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#9ccbd9",
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
  alreadyLoginBtn: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default Register;
