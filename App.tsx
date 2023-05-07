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
  Alert,
  Button,
  Platform, // This is used to determine what platfrom it is (either iOS or Android)
  StatusBar,
} from "react-native";

console.log("Hello World!");

// View -> UIView
export default function App() {
  const handlePress = () => {
    console.log("Text clicked");
  };

  return (
    // There can be multiple style, defined in array -> style={[styles.container], [styles.container]}
    // Also, SafeAreaView is only for iOS
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me!"
        onPress={
          () =>
            // Alert.alert example
            Alert.alert("My Title", "My Message", [
              {
                text: "Yes",
                onPress: () => console.log("Yes Clicked"),
              },
              {
                text: "No",
                onPress: () => console.log("No Clicked"),
              },
            ])

          // Alert.prompt example ONLY WORK ON IOS
          // Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
    </SafeAreaView>

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

// This is actually just a JS object
// 1- This method validates the property we used
// 2- RN is working on optimization, recommended practice
const styles = StyleSheet.create({
  container: {
    flex: 1, // Boolean, shows whether the view is flexible or not
    backgroundColor: "#fff", // Can be hex, or value
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
