import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

console.log("Hello World!");

// View -> UIView
export default function App() {
  const handlePress = () => {
    console.log("Text clicked");
  };

  return (
    <SafeAreaView style={styles.container}></SafeAreaView>

    // Text & Image code
    // <SafeAreaView style={styles.container}>
    //   <Text numberOfLines={1} onPress={handlePress}>
    //     Hello React Native World!
    //   </Text>
    //   <TouchableNativeFeedback onPress={handlePress}>
    //     <Image
    //       fadeDuration={500}
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300",
    //       }}
    //     />
    //   </TouchableNativeFeedback>
    // </SafeAreaView>
  );
  // Local image use require() function Example: require("./assets/favicon.png")
  // For network images, apart from the URI, we need to explicitly set the width & height
  // Example: source={{width: 200, height: 300, uri: "https://picsum.photos/200/300"}}
  // fadeDuration ONLY WORKS ON ANDROID
  // Touchable allows us to set anything in our view touchable (Image for example has no onPress function, so use touchable)
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Boolean, shows whether the view is flexible or not
    backgroundColor: "#fff", // Can be hex, or value
    justifyContent: "center",
    alignItems: "center",
  },
});
