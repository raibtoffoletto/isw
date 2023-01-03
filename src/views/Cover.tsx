import Page from "@components/Page";
import Spinner from "@components/Spinner";
import ResourceCard from "@components/ResourceCard";
import { useRouter } from "@router/useRouter";
import Info from "@views/Info";
import { useStore } from "@store";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useTheme, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cover() {
  const { colors } = useTheme();
  const { pushResource } = useRouter();
  const { resources, getResources } = useStore();
  const [info, setInfo] = useState(false);

  useEffect(() => {
    getResources();
  }, [getResources]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        width: "100%",
        height: "100%",
      }}
    >
      <Page title="iSW">
        <IconButton
          icon="information"
          size={32}
          onPress={() => {
            setInfo(true);
          }}
          style={{ position: "absolute", top: 0, right: 8 }}
          accessibilityLabel="information"
        />

        <FlatList
          data={resources}
          ListEmptyComponent={<Spinner />}
          keyExtractor={({ url }) => url}
          renderItem={({ item }) => (
            <ResourceCard
              key={item.url}
              title={item.title}
              url={item.url}
              onPress={() => {
                pushResource(item);
              }}
            />
          )}
        />

        {info && (
          <Info
            onClose={() => {
              setInfo(false);
            }}
          />
        )}
      </Page>
    </SafeAreaView>
  );
}
