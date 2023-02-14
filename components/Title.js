import { Text, StyleSheet } from "react-native";
import Colors from '../constants/colors';

function Title() {
  return <Text style={styles.title}> Opponents guess </Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
  },
});
