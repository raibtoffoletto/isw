interface SWAPIRepository {
  count: number;
  results: Record<string, string | string[]>[];
  next?: string | null;
  previous?: string | null;
}

interface Resource {
  title: IResourceType;
  url: string;
}

type IRecord = Record<string, string>;

type IResourceType =
  | "Films"
  | "People"
  | "Planets"
  | "Species"
  | "Starships"
  | "Vehicles";

interface ItemProps {
  type: IResourceType;
  backTitle: string;
  item: Record<string, string | string[]>;
}

interface IChip extends Omit<ItemProps, "item"> {
  url: string;
  label: string;
}

interface IFilm {
  release_date: string;
  title: string;
  url: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  characters: string[];
  planets: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
}

interface IPerson {
  name: string;
  gender: string;
  hair_color: string;
  url: string;
  birth_year: string;
  eye_color: string;
  height: string;
  mass: string;
  skin_color: string;
  films: string[];
  homeworld: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}

interface IPlanet {
  name: string;
  climate: string;
  url: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  films: string[];
  residents: string[];
}

interface ISpecies {
  name: string;
  language: string;
  url: string;
  average_height: string;
  average_lifespan: string;
  classification: string;
  designation: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  people: string[];
  films: string[];
  homeworld: string;
}

interface IVehicle {
  name: string;
  model: string;
  url: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  passengers: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
}

interface IStarship {
  name: string;
  model: string;
  url: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  passengers: string;
  starship_class: string;
  hyperdrive_rating: string;
  MGLT: string;
  pilots: string[];
  films: string[];
}
