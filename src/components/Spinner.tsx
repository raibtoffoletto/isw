import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function Spinner() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
