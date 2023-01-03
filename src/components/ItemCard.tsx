import { View } from "react-native";
import { TouchableRipple, Text, useTheme, Card } from "react-native-paper";

export default function ItemCard({
  title,
  description,
  onPress,
}: {
  title: string;
  description: string;
  onPress: () => void;
}) {
  const { colors } = useTheme();

  return (
    <Card style={{ backgroundColor: colors.elevation.level1, borderRadius: 4 }}>
      <TouchableRipple
        borderless
        onPress={onPress}
        rippleColor="rgba(90, 60, 120, 0.15)"
        style={{ padding: 16, borderRadius: 4 }}
      >
        <>
          <Text style={{ fontSize: 24 }}>{title}</Text>
          <Text style={{ fontSize: 18 }}>{description}</Text>
        </>
      </TouchableRipple>
    </Card>
  );
}
