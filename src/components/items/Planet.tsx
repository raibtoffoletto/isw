import { ItemRow, ItemChips, Chip } from "@components/Items";
import { ResourceType } from "@constants";
import { parseQuantity } from "@helpers";

export default function Planet({
  name,
  climate,
  diameter,
  gravity,
  orbital_period,
  population,
  rotation_period,
  surface_water,
  terrain,
  films,
  residents,
  relations,
}: IPlanet & { relations: IRecord }) {
  return (
    <>
      <ItemRow label="Climate" value={climate} />

      <ItemRow label="Diameter" value={diameter} />

      <ItemRow label="Gravity" value={gravity} />

      <ItemRow label="Orbital Period" value={orbital_period} />

      <ItemRow label="Population" value={parseQuantity(population)} />

      <ItemRow label="Rotation Period" value={rotation_period} />

      <ItemRow label="Surface Water" value={surface_water} />

      <ItemRow label="Terrain" value={terrain} />

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

      <ItemChips label="Residents" style={{ marginBottom: 32 }}>
        {residents?.map?.((k) => (
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
