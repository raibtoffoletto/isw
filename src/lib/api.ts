const endpoint = "https://swapi.py4e.com/api";

const cache = new Map<string, any>();

async function doFetch(url: string) {
  const cached = cache.get(url);

  if (cached) {
    return cached;
  }

  const request = await fetch(url);

  if (request.status == 200) {
    const result = await request.json();

    cache.set(url, result);

    return result;
  } else {
    throw new Error();
  }
}

function getURL(url: string) {
  const route = url.replace(endpoint, "");

  return `${endpoint}${route}`;
}

export async function getResources(): Promise<Resource[]> {
  try {
    const response: IRecord = await doFetch(getURL("/"));

    return Object.keys(response ?? {}).map((key) => ({
      title: (key[0].toUpperCase() +
        key.substring(1).toLowerCase()) as IResourceType,
      url: response[key],
    }));
  } catch {
    throw new Error("Failed to load list");
  }
}

export async function getRepository(
  resourceUrl: string
): Promise<SWAPIRepository> {
  try {
    return await doFetch(getURL(resourceUrl));
  } catch {
    throw new Error("Failed to load list");
  }
}

export async function fetchItem(url: string) {
  try {
    return await doFetch(url);
  } catch {
    throw new Error("Failed to fetch item");
  }
}

export async function fetchName(url: string) {
  try {
    const item = await fetchItem(url);

    return {
      [url]: item?.title ?? item?.name ?? "",
    };
  } catch {
    return;
  }
}
