import React from "react";
import { HomeScreen, DetailsScreen, HobbiesScreen, LanguageScreen } from "../screens";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";


const iconNames = {
    Home: 'home',
    Details: "perm-identity",
    Hobbies: "stars",
    Language: "home"
};

const Tabs = createBottomTabNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    Hobbies: HobbiesScreen
},
{
    animationEnabled: true,
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName = iconNames[routeName];
            console.log(routeName,"name");
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
      
    

});

const TabNavigator = createAppContainer(Tabs);

export default TabNavigator;