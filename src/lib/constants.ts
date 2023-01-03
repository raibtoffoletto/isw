export const ResourceType = Object.freeze({
  films: "Films",
  people: "People",
  planets: "Planets",
  species: "Species",
  starships: "Starships",
  vehicles: "Vehicles",
});

export const Relationships: Record<IResourceType, string[]> = Object.freeze({
  [ResourceType.films]: [
    "characters",
    "planets",
    "species",
    "starships",
    "vehicles",
  ],
  [ResourceType.people]: [
    "films",
    "homeworld",
    "species",
    "starships",
    "vehicles",
  ],
  [ResourceType.planets]: ["films", "residents"],
  [ResourceType.species]: ["people", "films", "homeworld"],
  [ResourceType.starships]: ["pilots", "films"],
  [ResourceType.vehicles]: ["pilots", "films"],
});
