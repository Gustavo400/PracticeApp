import { useFonts } from "expo-font";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function showAlert(message: string) {
  Alert.alert(message);
}

export default function Index() {
  const [loaded, error] = useFonts({
    "BounceDash Italic": require("./assets/fonts/BounceDash.otf"),
  });
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error loading font: {error.message}</Text>;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.mainText}>Nice! it updates in real time</Text>
        </View>
        <Button
          onPress={() => showAlert("Simple Button pressed")}
          title="Test"
          color="#007766"
        ></Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  mainText: {
    fontFamily: "BounceDash Italic",
  },
});
