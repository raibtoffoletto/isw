import * as API from "@api";
import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useRef,
  useReducer,
} from "react";
import { useRouter } from "@router/useRouter";

interface IStore {
  resources: Resource[];
  getResources: () => Promise<void>;
  getRepository: (
    type: IResourceType
  ) => Pick<SWAPIRepository, "next" | "results">;
  loadRepository: (type: IResourceType, url: string) => Promise<void>;
}

type ISWAPIRepository = SWAPIRepository & { pages: string[] };

type IRepository = Partial<Record<IResourceType, ISWAPIRepository>>;

interface IRepositoryAction {
  repository: IResourceType;
  payload: SWAPIRepository & { url: string };
}

const StoreContext = createContext<IStore>({
  resources: [],
  getResources: async () => undefined,
  getRepository: () => ({ results: [] }),
  loadRepository: async () => undefined,
});

export const useStore = () => useContext(StoreContext);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const { isConnected } = useRouter();
  const request = useRef<Record<string, boolean | undefined>>({});
  const [resources, setResources] = useState<Resource[]>([]);
  const [repositories, setRepositories] = useReducer(
    (
      state: IRepository,
      { repository, payload }: IRepositoryAction
    ): IRepository => {
      if (!!repository && !!payload) {
        const _repo = state?.[repository];

        if (!!_repo) {
          return {
            ...state,
            [repository]: {
              ..._repo,
              next: payload.next,
              pages: _repo.pages.concat([payload.url]),
              results: _repo.results.concat(payload.results),
            },
          };
        }

        return {
          ...state,
          [repository]: {
            ...payload,
            pages: [],
          },
        };
      }

      return state;
    },
    {}
  );

  const getResources = useCallback(async () => {
    if (!!isConnected && request.current?.resources === undefined) {
      request.current.resources = false;

      setResources(await API.getResources());

      request.current.resources = true;
    }
  }, [isConnected]);

  const getRepository = useCallback(
    (type: string): Pick<SWAPIRepository, "next" | "results"> => {
      const _repo = repositories?.[type as IResourceType];

      return {
        results: _repo?.results ?? [],
        next: _repo?.next || null,
      };
    },
    [repositories]
  );

  const loadRepository = useCallback(
    async (type: IResourceType, url: string) => {
      if (!type || !url) {
        return;
      }

      const _repo = repositories?.[type];

      if (
        !_repo?.pages.includes(url) &&
        !!isConnected &&
        request.current?.[url] === undefined
      ) {
        request.current[url] = false;

        const result = await API.getRepository(url);

        setRepositories({
          repository: type,
          payload: { url, ...result },
        });

        request.current[url] = true;
      }
    },
    [isConnected, repositories]
  );

  return (
    <StoreContext.Provider
      value={{
        resources,
        getResources,
        getRepository,
        loadRepository,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
