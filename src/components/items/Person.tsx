import { ItemRow, ItemChips, Chip } from "@components/Items";
import { ResourceType } from "@constants";

export default function Person({
  name,
  gender,
  hair_color,
  birth_year,
  eye_color,
  height,
  mass,
  skin_color,
  homeworld,
  films,
  species,
  starships,
  vehicles,
  relations,
}: IPerson & { relations: IRecord }) {
  return (
    <>
      <ItemRow label="Gender" value={gender} />

      <ItemRow label="Birth Year" value={birth_year} />

      <ItemRow label="Eye Color" value={eye_color} />

      <ItemRow label="Hair Color" value={hair_color} />

      <ItemRow label="Skin Color" value={skin_color} />

      <ItemRow label="Height" value={height} />

      <ItemRow label="Mass" value={mass} />

      <ItemChips label="Homeworld">
        <Chip
          type={ResourceType.planets}
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

      <ItemChips label="Species">
        {species?.map?.((k) => (
          <Chip
            key={k}
            type={ResourceType.species}
            backTitle={name}
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
            backTitle={name}
            url={k}
            label={relations[k]}
          />
        ))}
      </ItemChips>

      <ItemChips label="Vehicles" style={{ marginBottom: 32 }}>
        {vehicles?.map?.((k) => (
          <Chip
            key={k}
            type={ResourceType.vehicles}
            backTitle={name}
            url={k}
            label={relations[k]}
          />
        ))}
      </ItemChips>
    </>
  );
}
