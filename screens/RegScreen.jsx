import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

//firebase imports

import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebaseConfig } from "../firebase-configure";




const HomeScreen = ({ navigation }) => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const Register = () =>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      Alert.alert("Account created successfully");
    })
    .catch((error)=>{
      console.log(error);
      Alert.alert("Account creation failed");
    })
  }
  



  //create user function
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
      <Text style={{fontSize:23,fontWeight:'bold',alignItems:'center',marginVertical:12}}>Register</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="pasword"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={Register}
            style={{backgroundColor:'black',justifyContent:'center',alignItems:'center',width:'40%',height:40,borderRadius:12}}
          >
            <Text style={styles.btntext}>Create Account </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('home')}>
          <Text style={{color:'blue',paddingVertical:10,}}>Already have account?Sign In</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    justifyContent:'center',
    alignItems:'center'
    
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3",
  },
  inputContainer: {
    width: "60%",
  },
  buttons: {
    backgroundColor: "yellow",
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "100%",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "blue",
    borderWidth: 2,
  },
  btnregister: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  btntext: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
  },
  input:{
    borderColor:'black',
    borderWidth:0.5,
    height:35,
    width:'80%',
    borderRadius:12,
    marginBottom:10,
    paddingHorizontal:12,
  }
});
