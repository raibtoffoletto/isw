import { fetchName } from "@api";
import Film from "@components/items/Film";
import Person from "@components/items/Person";
import Planet from "@components/items/Planet";
import Species from "@components/items/Species";
import Starship from "@components/items/Starship";
import Vehicle from "@components/items/Vehicle";
import Header from "@components/Header";
import Page from "@components/Page";
import { ResourceType, Relationships } from "@constants";
import { useState, useRef, useEffect, useMemo } from "react";
import { ActivityIndicator } from "react-native-paper";

async function fetchUrls(urls: (string | string[])[]): Promise<IRecord> {
  const promises = urls.flat().map((url) => fetchName(url));

  const result = await Promise.all(promises);

  return result
    .filter(Boolean)
    .reduce((a, b) => Object.assign(a as IRecord, b), {}) as IRecord;
}

export default function Item({ item, type, backTitle }: ItemProps) {
  const request = useRef<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [relations, setRelations] = useState<IRecord>({});

  const component = useMemo(() => {
    switch (type) {
      case ResourceType.films:
        return <Film {...(item as unknown as IFilm)} relations={relations} />;
      case ResourceType.people:
        return (
          <Person {...(item as unknown as IPerson)} relations={relations} />
        );
      case ResourceType.planets:
        return (
          <Planet {...(item as unknown as IPlanet)} relations={relations} />
        );
      case ResourceType.species:
        return (
          <Species {...(item as unknown as ISpecies)} relations={relations} />
        );
      case ResourceType.starships:
        return (
          <Starship {...(item as unknown as IStarship)} relations={relations} />
        );
      case ResourceType.vehicles:
        return (
          <Vehicle {...(item as unknown as IVehicle)} relations={relations} />
        );
      default:
        return <></>;
    }
  }, [type, item, relations]);

  useEffect(() => {
    async function getMap() {
      if (request.current === undefined) {
        const urls = Relationships?.[type]?.map?.((key) => item?.[key]) ?? [];

        const map = await fetchUrls(urls);

        setRelations(map);
        setLoading(false);
      }
    }

    getMap();
  }, [type, item]);

  return (
    <>
      <Header title={backTitle} />

      <Page
        scrollable
        title={type === ResourceType.films ? `${item?.title}` : `${item?.name}`}
      >
        {loading ? <ActivityIndicator /> : component}
      </Page>
    </>
  );
}
