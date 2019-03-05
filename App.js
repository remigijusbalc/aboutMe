/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { SwitchNavigator } from "./src/navigation";
import Store from "./src/redux/Store";
import { Provider } from "react-redux";

export default App = () => {
      return (
        <Provider store={Store}>
        <SwitchNavigator/>
        </Provider>
    );
}
