import { useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function Page({
  title,
  children,
  scrollable,
}: {
  title: string;
  scrollable?: boolean;
  children: React.ReactNode;
}) {
  const viewRef = useRef<any>(null);
  const { colors } = useTheme();

  const Component = scrollable ? ScrollView : View;

  useEffect(() => {
    if (!!scrollable) {
      viewRef?.current?.scrollTo({ x: 0, y: 0, animated: false });
    }
  }, [scrollable, children]);

  return (
    <Component
      ref={viewRef}
      style={{
        backgroundColor: colors.background,
        width: "100%",
        height: "100%",
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 32,
        flex: 1,
      }}
    >
      <Text variant="displayLarge" style={{ padding: 16, textAlign: "center" }}>
        {title}
      </Text>

      {children}
    </Component>
  );
}
