import { Portal, Modal, Text, IconButton, useTheme } from "react-native-paper";
import { ScrollView } from "react-native";

function TextBlock({ content }: { content: string }) {
  return (
    <Text
      style={{
        marginTop: 32,
        textAlign: "center",
        fontSize: 18,
        lineHeight: 28,
      }}
    >
      {content}
    </Text>
  );
}

export default function Index({ onClose }: { onClose: () => void }) {
  const { colors } = useTheme();

  return (
    <Portal>
      <Modal
        visible
        onDismiss={onClose}
        contentContainerStyle={{
          left: "5%",
          width: "90%",
          height: "90%",
          position: "relative",
          backgroundColor: colors.background,
          padding: 24,
        }}
      >
        <IconButton
          icon="close"
          size={24}
          onPress={onClose}
          style={{ position: "absolute", top: 0, right: 8, zIndex: 200 }}
          accessibilityLabel="information"
        />

        <ScrollView>
          <TextBlock
            content="iSW (info-Star-Wars) is a simple viewer
          built on top of SWAPI (StarWars API), available on
          https://swapi.py4e.com"
          />

          <TextBlock content="This app is open source and it's source code can be found at: https://github.com/raibtoffoletto/isw" />

          <TextBlock
            content={`\niSW is built with:\n\nExpo\nReact Native\nReact-Native-Paper\n`}
          />

          <TextBlock content="DISCLAIMER: There is no relationship between this app and the rightfull owners for the StarWars intelectual property." />
        </ScrollView>
      </Modal>
    </Portal>
  );
}
