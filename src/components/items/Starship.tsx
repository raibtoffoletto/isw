import { ItemRow, ItemChips, Chip } from "@components/Items";
import { ResourceType } from "@constants";
import { parseQuantity } from "@helpers";

export default function Starship({
  name,
  model,
  cargo_capacity,
  consumables,
  cost_in_credits,
  crew,
  length,
  manufacturer,
  max_atmosphering_speed,
  passengers,
  starship_class,
  hyperdrive_rating,
  MGLT,
  pilots,
  films,
  relations,
}: IStarship & { relations: IRecord }) {
  return (
    <>
      <ItemRow label="Model" value={model} />

      <ItemRow label="Cargo Capacity" value={parseQuantity(cargo_capacity)} />

      <ItemRow label="Consumables" value={consumables} />

      <ItemRow label="Cost in Credits" value={parseQuantity(cost_in_credits)} />

      <ItemRow label="Crew" value={crew} />

      <ItemRow label="Length" value={length} />

      <ItemRow label="Manufacturer" value={manufacturer} />

      <ItemRow label="Max Atmosphering Speed" value={max_atmosphering_speed} />

      <ItemRow label="Passengers" value={passengers} />

      <ItemRow label="Starship Class" value={starship_class} />

      <ItemRow label="Hyperdrive Rating" value={hyperdrive_rating} />

      <ItemRow label="MGLT" value={MGLT} />

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

      <ItemChips label="Pilots" style={{ marginBottom: 32 }}>
        {pilots?.map?.((k) => (
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
