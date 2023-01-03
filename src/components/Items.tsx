import type { StyleProp, TextStyle } from "react-native";
import { View } from "react-native";
import { Text, Chip as PaperChip } from "react-native-paper";
import { useRouter } from "@router/useRouter";

export function Chip({ url, backTitle, type, label }: IChip) {
  const { pushURL } = useRouter();

  return !!url ? (
    <PaperChip
      style={{ margin: 2 }}
      onPress={() => {
        pushURL({
          url,
          type,
          backTitle,
        });
      }}
    >
      {label}
    </PaperChip>
  ) : null;
}

export function ItemLabel({
  label,
  children,
  style,
}: {
  label: string;
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        {
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 8,
          marginBottom: 8,
        },
        style,
      ]}
    >
      {`${label}: `}
      {children}
    </Text>
  );
}

export function ItemChips({
  label,
  children,
  style,
  labelStyle,
}: {
  label: string;
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
}) {
  return (
    <>
      <ItemLabel label={label} style={labelStyle} />
      <View
        style={[
          {
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 8,
            marginBottom: 16,
          },
          style,
        ]}
      >
        {children}
      </View>
    </>
  );
}

export function ItemRow({
  label,
  value,
  style,
}: {
  label: string;
  value: string;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <ItemLabel label={label} style={style}>
      <Text style={{ fontWeight: "100" }}>{value}</Text>
    </ItemLabel>
  );
}
