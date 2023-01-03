import Header from "@components/Header";
import Page from "@components/Page";
import Spinner from "@components/Spinner";
import ItemCard from "@components/ItemCard";
import { parseDate } from "@helpers";
import { useEffect } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ResourceType } from "@constants";
import { useStore } from "@store";
import { useRouter } from "@router/useRouter";

export default function Resource({ resource }: { resource: Resource }) {
  const { pushItem } = useRouter();
  const { getRepository, loadRepository } = useStore();
  const { results, next } = getRepository(resource.title);

  useEffect(() => {
    loadRepository(resource.title, resource.url);
  }, [loadRepository, resource]);

  return (
    <>
      <Header title="SWAPI Repository" />

      <Page title={resource.title}>
        <FlatList
          data={results}
          ListEmptyComponent={<Spinner />}
          ListFooterComponent={
            !!next ? <ActivityIndicator style={{ marginTop: 16 }} /> : undefined
          }
          keyExtractor={({ url }) => `${url}`}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
          onEndReached={() => {
            if (!!next) {
              loadRepository(resource.title, next);
            }
          }}
          renderItem={({ item }) => {
            const title =
              resource.title === ResourceType.films
                ? `${item?.title}`
                : `${item?.name}`;

            let description = "";
            switch (resource.title) {
              case ResourceType.films:
                description = parseDate(`${item.release_date}`);
                break;
              case ResourceType.people:
                description = `${item.gender} ~ ${item.hair_color}`;
                break;
              case ResourceType.planets:
                description = `${item.climate}`;
                break;
              case ResourceType.species:
                description = `${item.language}`;
                break;
              case ResourceType.starships:
              case ResourceType.vehicles:
                description = `${item.model}`;
                break;
              default:
                break;
            }

            return (
              <ItemCard
                title={title}
                description={description}
                onPress={() => {
                  pushItem({
                    item,
                    type: resource.title,
                    backTitle: resource.title,
                  });
                }}
              />
            );
          }}
        />
      </Page>
    </>
  );
}
