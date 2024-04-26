import { Alert, StyleSheet, Text, TextInput,ToastAndroid, View } from "react-native";
import React, { useState,useContext } from "react";
import { AuthContext } from "../../context/authContext";
import BoxInput from "../../Components/Forms/BoxInput";
import SubmitButton from "../../Components/Forms/SubmitButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  
  // global state
  const [state,setState]= useContext(AuthContext);
  
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async() => {
    try {
      
      // api

      const { data } = await axios.post("/auth/login",{email,password});
      setState(data);
      await AsyncStorage.setItem('@auth',JSON.stringify(data));
      alert(data && data.message);

      // ToastAndroid.show("Successfully Login", ToastAndroid.LONG);
      navigation.navigate("Home");


      console.log("Login Data ==> ", { email, password });
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  // temp fn.
  const getLocalStorage = async ()=> {
    let data = await AsyncStorage.getItem('@auth')
    console.log('local Storage ==> ', data);
  }
  getLocalStorage();

  return (
    <View style={Styles.container}>
      <Text style={Styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <BoxInput
          inputTitle={"Email"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
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
        btnTitle={"Login"}
        HandleSubmit={HandleSubmit}
      />
      <Text style={Styles.alreadyLoginBtn}>
        You Have not Registered{"  "}
        <Text
          style={{ color: "white", fontWeight: "bold" }}
          onPress={() => navigation.navigate("Register")}
        >
          Create Account
        </Text>
      </Text>
    </View>
  );
}

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
