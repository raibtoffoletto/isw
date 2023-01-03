import { View } from "react-native";
import { Text, useTheme, Button } from "react-native-paper";
import { useRouter } from "@router/useRouter";

export default function Offline() {
  const { colors } = useTheme();

  const { checkConnection } = useRouter();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
      }}
    >
      <Text style={{ fontSize: 40, marginBottom: 32, textAlign: "center" }}>
        This was not the info you we're looking for...
      </Text>

      <Text style={{ fontSize: 24, marginBottom: 32 }}>
        Is your doid connected?
      </Text>

      <Button onPress={checkConnection}>Use the force to Luke again.</Button>
    </View>
  );
}
