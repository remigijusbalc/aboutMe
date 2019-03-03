import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { InitialScreen } from "../screens";
import  TabNavigator from "./TabNavigator";


const Switch = createSwitchNavigator(
    {
        Initial: InitialScreen,
        App: TabNavigator
    },
    {
        initialRouteName: "Initial"
    }
)

export default SwitchNavigator = createAppContainer(Switch);

