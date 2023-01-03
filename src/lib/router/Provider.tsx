import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { Alert, BackHandler, Animated } from "react-native";
import { getNetworkStateAsync } from "expo-network";
import { fetchItem } from "@api";
import Cover from "@views/Cover";
import Resource from "@views/Resource";
import Item from "@views/Item";
import Offline from "@views/Offline";
import RouterContext from "./context";
import { StoreProvider } from "@store";

function fadeIn(value: Animated.ValueXY) {
  Animated.timing(value, {
    toValue: { x: 1, y: 1 },
    duration: 25,
    useNativeDriver: true,
  }).start();
}

function transition(value: Animated.ValueXY, callback: () => void) {
  value.setValue({ x: 0, y: 0.8 });

  setTimeout(() => {
    callback();
  }, 0);

  setTimeout(() => {
    fadeIn(value);
  }, 5);
}

export default function ProvideRouter() {
  const animationRef = useRef(new Animated.ValueXY({ x: 0, y: 0.8 })).current;
  const [isConnected, setConnected] = useState(true);
  const [routes, setRoutes] = useState<React.ReactElement[]>([<Cover />]);

  const currentRoute = useMemo(() => routes[routes.length - 1], [routes]);

  const pushResource = useCallback((resource: Resource) => {
    transition(animationRef, () => {
      setRoutes((_routes) =>
        _routes.concat([<Resource resource={resource} />])
      );
    });
  }, []);

  const pushItem = useCallback((props: ItemProps) => {
    transition(animationRef, () => {
      setRoutes((_routes) => _routes.concat([<Item {...props} />]));
    });
  }, []);

  const pushURL = useCallback(
    async ({
      type,
      backTitle,
      url,
    }: Omit<IChip, "label"> & { url: string }) => {
      const item = await fetchItem(url);

      const props: ItemProps = { type, backTitle, item };

      transition(animationRef, () => {
        setRoutes((_routes) => _routes.concat([<Item {...props} />]));
      });
    },
    []
  );

  const goBack = useCallback(() => {
    transition(animationRef, () => {
      setRoutes((_routes) =>
        _routes.length > 1 ? _routes.slice(0, _routes.length - 1) : _routes
      );
    });
  }, []);

  const checkConnection = useCallback(async () => {
    try {
      const { isConnected, isInternetReachable } = await getNetworkStateAsync();

      setConnected(!!isConnected && !!isInternetReachable);
    } catch {
      setConnected(false);
    }
  }, []);

  useEffect(() => {
    checkConnection();
  }, [checkConnection, routes]);

  useEffect(() => {
    const handleBackAction = () => {
      if (routes.length > 1) {
        goBack();
      } else {
        Alert.alert(
          "Trash Compactor",
          "What an incredible smell you've discovered! ~ H.S.\n\nWhat would you like to do?",
          [
            {
              text: "FEED DIANOGA",
              onPress: () => null,
              style: "cancel",
            },
            {
              text: "ESCAPE CRUSH",
              onPress: () => BackHandler.exitApp(),
            },
          ]
        );
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackAction
    );

    return () => {
      backHandler.remove();
    };
  }, [routes, goBack]);

  useEffect(() => {
    fadeIn(animationRef);
  }, []);

  return (
    <RouterContext.Provider
      value={{
        isConnected,
        pushResource,
        pushItem,
        pushURL,
        goBack,
        checkConnection,
      }}
    >
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          opacity: animationRef.x,
          transform: [{ scale: animationRef.y }],
        }}
      >
        <StoreProvider>
          {!!isConnected ? currentRoute : <Offline />}
        </StoreProvider>
      </Animated.View>
    </RouterContext.Provider>
  );
}
