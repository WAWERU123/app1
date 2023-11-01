import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ClotheScreen from "../screens/ClotheScreen";
import HomeScreen from "../screens/HomeScreen";
import RegScreen from "../screens/RegScreen";

const stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name="Reg"
          component={RegScreen}
          options={{ headerShown: false }}
        />

        <stack.Screen
        name="buy"
        component={ClotheScreen}
        options={{ headerShown: false }}
      />



      </stack.Navigator>
      

      
    </NavigationContainer>
  )
}
export default Navigation

