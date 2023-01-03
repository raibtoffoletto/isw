import { Card, TouchableRipple, Text } from "react-native-paper";

export default function ResourceCard({
  url,
  title,
  onPress,
}: {
  url: string;
  title: string;
  onPress: () => void;
}) {
  return (
    <Card
      style={{
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 32,
        marginRight: 32,
      }}
    >
      <TouchableRipple
        borderless
        onPress={onPress}
        rippleColor="rgba(90, 60, 120, 0.15)"
        style={{
          paddingTop: 48,
          paddingBottom: 48,
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 8,
        }}
      >
        <Text variant="displaySmall" style={{ textAlign: "center" }}>
          {title}
        </Text>
      </TouchableRipple>
    </Card>
  );
}
