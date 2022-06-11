import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native-web";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
export default function App() {
  return <SafeAreaProvider>
    <Navigation />
  </SafeAreaProvider>;
}
