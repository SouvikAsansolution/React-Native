import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>souvik</Text>
      <Text>bhattacharji</Text>
      <Text style={styles.textStyle1}>color boxgit </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f004',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle1: {
    color:'#00f8'    
  },
});












