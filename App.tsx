import React from "react"
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { theme } from "./src/styles/theme";
import { Button } from './src/components/core/buttons/button'
import { timedPromise } from "./src/test/utils/timed-promise";
import { Box } from "./src/components/core/layout/box/box";
import { Typography } from "./src/components/core/text/typography";
import { Paper } from "./src/components/core/layout/cards/paper";

export default function App() {
  const handleSubmit = async () => await timedPromise(5000)

  return (
    <ThemeProvider theme={theme}>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        <StatusBar style="auto" />
        <Paper sx={{ elevation: 5 }}>
          <Box sx={{columns: 2, gap: 2}}>
            <Typography>test 1</Typography>
            <Typography>test 2</Typography>
            <Typography>test 3</Typography>
            <Typography>test 4</Typography>
            <Typography>test 5</Typography>
            <Typography>test 6</Typography>
            <Typography>test 7</Typography>
          </Box>
        </Paper>
      </View>
    </ThemeProvider>
  )
}
