import { useDeviceOrientation } from "@react-native-community/hooks";
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
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

// View -> UIView
export default function App() {
  return (
    // Flexbox in RN
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1, // Grows to take available free space. in this case, 1 = full screen, 0.5 = half screen
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2, // 2/4 segments
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          flex: 1, // 1/4 segments
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1, //1/4 segments
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
