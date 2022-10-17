import React from "react"
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { theme } from "./src/styles/theme";
import { timedPromise } from "./src/test/utils/timed-promise";
import { Paper } from "./src/components/core/layout/cards/paper";
import { DataGrid } from "./src/components/smart/datagrid/datagrid";
import { TextField } from "./src/components/smart/fields/text-field";
import { DateField } from "./src/components/smart/fields/date-field";
import { Hr } from "./src/components/core/layout/hr";

export default function App() {
  const handleSubmit = async () => await timedPromise(5000)
  const recordList = [...new Array(15)].map((_, index) => ({ name: `Test-${index}`, age: index, date: new Date(index)}))

  return (
    <ThemeProvider theme={theme}>
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <StatusBar style="auto" />
          <Paper>
            <DataGrid<{name: string, age: number}>  recordList={recordList}>
              <TextField source="name" />
              <TextField source="age" />
              <DateField source="date" />
            </DataGrid>
          </Paper>
        </View>
    </ThemeProvider>
  )
}
