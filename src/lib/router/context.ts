import { createContext } from "react";

interface IRouter {
  isConnected: boolean;
  goBack: () => void;
  pushItem: (props: ItemProps) => void;
  pushResource: (resource: Resource) => void;
  checkConnection: () => Promise<void>;
  pushURL: ({
    type,
    backTitle,
    url,
  }: Omit<ItemProps, "item"> & {
    url: string;
  }) => Promise<void>;
}

const RouterContext = createContext<IRouter>({
  isConnected: false,
  goBack: () => undefined,
  pushItem: () => undefined,
  pushResource: () => undefined,
  pushURL: async () => undefined,
  checkConnection: async () => undefined,
});

export default RouterContext;
