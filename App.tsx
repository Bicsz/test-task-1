import { NavigationContainer } from "@react-navigation/native";
import { createContext } from "react";
import { StyleSheet, View } from "react-native";
import {
  EdgeInsets,
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Pallet } from "./src/constants";
import AppLoading from "./src/pages/AppLoading";
import { store } from "./src/redux/store";
import RouterMain from "./src/router/RouterMain";

export const InsetsContext = createContext<EdgeInsets>({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoading />} persistor={persistor}>
        <View style={styles.container}>
          <SafeAreaProvider>
            <SafeAreaInsetsContext.Consumer>
              {(insets) => (
                <InsetsContext.Provider value={insets as EdgeInsets}>
                  <NavigationContainer>
                    <RouterMain />
                  </NavigationContainer>
                </InsetsContext.Provider>
              )}
            </SafeAreaInsetsContext.Consumer>
          </SafeAreaProvider>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Pallet.White,
  },
});
