import { View, Image, StyleSheet, Text, ScrollView, useWindowDimensions } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onGameOver }) {

  const {width, height} = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>Game over!</Title>
      <View style={[styles.imageContainer, {imageStyle}]}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.externalText}>
        Your phone needed{" "}
        <Text style={styles.internalText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.internalText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onGameOver}>Start new game!</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // heigh: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
    flex: 1
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
  screen: {
    flex: 1
  }
});
