import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BottomTabs } from "./components/BottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/login/Splash";
export default function App() {
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <Splash />
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     screenOptions={{ headerShown: true }}
    //     initialRouteName="HomeTabs"
    //   >
    //     <Drawer.Screen name="HomeTabs" component={BottomTabs} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
