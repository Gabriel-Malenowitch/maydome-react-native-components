import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { theme } from "./src/styles/theme";
import { NoStyledButton as Button } from './src/components/core/button'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        <StatusBar style="auto" />
        <Button title="Test" />

      </View>
    </ThemeProvider>
  );
}