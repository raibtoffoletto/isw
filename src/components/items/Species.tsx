import { ItemRow, ItemChips, Chip } from "@components/Items";
import { ResourceType } from "@constants";

export default function Species({
  name,
  language,
  average_height,
  average_lifespan,
  classification,
  designation,
  eye_colors,
  hair_colors,
  skin_colors,
  homeworld,
  people,
  films,
  relations,
}: ISpecies & { relations: IRecord }) {
  return (
    <>
      <ItemRow label="Language" value={language} />

      <ItemRow label="Average Height" value={average_height} />

      <ItemRow label="Average Lifespan" value={average_lifespan} />

      <ItemRow label="Classification" value={classification} />

      <ItemRow label="Designation" value={designation} />

      <ItemRow label="Eye Colors" value={eye_colors} />

      <ItemRow label="Hair Colors" value={hair_colors} />

      <ItemRow label="Skin Colors" value={skin_colors} />

      <ItemChips label="Homeworld">
        <Chip
          type={ResourceType.films}
          backTitle={name}
          url={homeworld}
          label={relations[homeworld]}
        />
      </ItemChips>

      <ItemChips label="Films">
        {films?.map?.((k) => (
          <Chip
            key={k}
            type={ResourceType.films}
            backTitle={name}
            url={k}
            label={relations[k]}
          />
        ))}
      </ItemChips>

      <ItemChips label="People" style={{ marginBottom: 32 }}>
        {people?.map?.((k) => (
          <Chip
            key={k}
            type={ResourceType.people}
            backTitle={name}
            url={k}
            label={relations[k]}
          />
        ))}
      </ItemChips>
    </>
  );
}
