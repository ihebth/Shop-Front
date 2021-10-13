import React from "react";
import { StyleSheet, View, LogBox } from "react-native";
import ProductContainer from "./Screens/Products/ProductContainer";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Shared/Header";
import Main from "./Navigators/Main";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Toast from "react-native-toast-message";
import Auth from "./Context/store/Auth";
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}
