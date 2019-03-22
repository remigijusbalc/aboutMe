import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { InitialScreen } from "../screens";
//import  TabNavigator from "./TabNavigator";
import { SwipeParent } from "../screens";

const Switch = createSwitchNavigator(
  {
    Initial: InitialScreen,
    App: SwipeParent
  },
  {
    initialRouteName: "Initial"
  }
);

export default (SwitchNavigator = createAppContainer(Switch));
