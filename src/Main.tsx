import { registerRootComponent } from "expo";
import { Provider as PaperProvider, MD3DarkTheme } from "react-native-paper";
import Router from "@router/Provider";

function Main() {
  return (
    <PaperProvider theme={{ ...MD3DarkTheme, dark: true }}>
      <Router />
    </PaperProvider>
  );
}

export default registerRootComponent(Main);
