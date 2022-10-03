import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
      <StatusBar style="auto" />
    </View>
    </ThemeProvider>
  );
}