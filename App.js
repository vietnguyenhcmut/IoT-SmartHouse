import { StyleSheet, Text, View } from 'react-native';
import LightsControl from './src/LightsControl';

export default function App() {
    return (
        <View style={styles.container}>

            <LightsControl/>
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
