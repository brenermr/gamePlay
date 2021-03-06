import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useFonts, 
  Rajdhani_400Regular, 
  Rajdhani_500Medium, 
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'
import {Inter_500Medium} from '@expo-google-fonts/inter'

import AppLoading from 'expo-app-loading';


import theme from './src/global/styles/theme';
import { Login } from './src/screens/Login';
import Routes from './src/routes/routes';

export default function App() {
  const [fontsLoaded] = useFonts ({
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold, 
    Inter_500Medium
  })
  if(!fontsLoaded){
    return(
      <AppLoading/>
      )
  }else{
      return (
       <ThemeProvider theme={theme}>
         <Routes/>
       </ThemeProvider>
      );
  }
}

