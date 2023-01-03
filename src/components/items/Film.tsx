import { ItemRow, ItemChips, Chip } from "@components/Items";
import { ResourceType } from "@constants";
import { parseDate } from "@helpers";
import { Text } from "react-native-paper";

export default function Film({
  title,
  release_date,
  episode_id,
  opening_crawl,
  director,
  producer,
  characters,
  planets,
  species,
  starships,
  vehicles,
  relations,
}: IFilm & { relations: IRecord }) {
  return (
    <>
      <ItemRow label="Episode" value={`#${episode_id}`} />

      <ItemRow label="Release Date" value={parseDate(release_date)} />

      <ItemRow label="Director" value={director} />

      <ItemRow label="Producer" value={producer} />

      <ItemChips label="Characters">
        {characters?.map?.((k) => (
          <Chip
            key={k}
            type={ResourceType.people}
            backTitle={title}
            url={k}
            label={relations[k]}
          />
        ))}
      </ItemChips>

      <ItemChips label="Planets">
        {planets?.map?.((k) => (
          <Chip
            key={k}
            type={ResourceType.planets}
            backTitle={title}
            url={k}
            label={relations[k]}
          />
        ))}
      </ItemChips>

      <ItemChips label="Species">
        {species?.map?.((k) => (
          <Chip
            key={k}
            type={ResourceType.species}
            backTitle={title}
            url={k}
            label={relations[k]}
          />
        ))}
      </ItemChips>

      <ItemChips label="Starships">
        {starships?.map?.((k) => (
          <Chip
            key={k}
            type={ResourceType.starships}
            backTitle={title}
            url={k}
            label={relations[k]}
          />
        ))}
      </ItemChips>

      <ItemChips label="Vehicles">
        {vehicles?.map?.((k) => (
          <Chip
            key={k}
            type={ResourceType.vehicles}
            backTitle={title}
            url={k}
            label={relations[k]}
          />
        ))}
      </ItemChips>

      <ItemChips
        label="Opening Crawl"
        style={{ marginBottom: 48, marginTop: 16 }}
      >
        <Text style={{ fontSize: 20, paddingLeft: 32, paddingRight: 32 }}>
          {opening_crawl}
        </Text>
      </ItemChips>
    </>
  );
}
