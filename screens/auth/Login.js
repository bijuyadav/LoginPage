import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import BoxInput from "../../Components/Forms/BoxInput";
import SubmitButton from "../../Components/Forms/SubmitButton";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(true);

  const HandleSubmit = () => {
    try {
      setloading(true);
      if (!email) {
        Alert.alert("Please Fill ");
        setloading(false);
        return;
      }
      if (!password) {
        Alert.alert("Please Fill Password");
        setloading(false);
        return;
      }

      setloading(false);
      console.log("Regester Data ==> ", { email, password });
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <BoxInput
          inputTitle={"Email id"}
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
        loading={loading}
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
