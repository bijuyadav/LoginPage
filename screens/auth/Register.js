import { Alert, StyleSheet, Text, TextInput,ToastAndroid, View } from "react-native";
import React, { useState } from "react";
import BoxInput from "../../Components/Forms/BoxInput";
import SubmitButton from "../../Components/Forms/SubmitButton";
import axios from "axios";

// states
const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");


  // btn function.

  const HandleSubmit = async () => {
    try {
            

      const {data} = await axios.post('/auth/register',
      { name, email, mobileNo, password }
      );
      alert(data && data.message);

      // ToastAndroid.show('Successfully account created', ToastAndroid.LONG)
      navigation.navigate('Login');


      console.log("Regester Data ==> ", { name, email, mobileNo, password });
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <BoxInput inputTitle={"Name"} value={name} setValue={setName} />
        <BoxInput
          inputTitle={"Email"}
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
