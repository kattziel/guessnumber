import { View, Image, StyleSheet, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onGameOver }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game over!</Title>
      <View style={styles.imageContainer}>
        {/* <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        /> */}
      </View>
      <Text style={styles.externalText}>
        Your phone needed{" "}
        <Text style={styles.internalText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.internalText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onGameOver}>Start new game!</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    heigh: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  externalText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  internalText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
