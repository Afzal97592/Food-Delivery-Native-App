import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/loginSignupScreens/WelcomeScreen';
import LoginScreen from './src/screens/loginSignupScreens/LoginScreen';
import RootNavigation from './src/RootNavigation';

export default function App() {
  return (
    // <View>
    //  <WelcomeScreen />
    // <LoginScreen />
    <RootNavigation />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
