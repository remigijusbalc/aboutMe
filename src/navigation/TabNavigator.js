// import React from "react";
// import {
//   HomeScreen,
//   DetailsScreen,
//   HobbiesScreen,
//   LanguageScreen
// } from "../screens";
// import { Text } from "react-native";
// import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import Store from "../redux/Store";

// const iconNames = {
//   Home: "home",
//   Details: "perm-identity",
//   Hobbies: "stars"
// };

// const Tabs = createBottomTabNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//     Hobbies: HobbiesScreen
//   },
//   {
//     initialRouteName: "Home",
//     animationEnabled: true,
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarLabel: () => {
//         const { routeName } = navigation.state;
//         let translation = Store.getState().language.translations[routeName];

//         return <Text style={{ textAlign: "center" }}>{translation}</Text>;
//       },
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName = iconNames[routeName];
//         return <Icon name={iconName} size={25} color={tintColor} />;
//       }
//     }),
//     tabBarOptions: {
//       activeTintColor: "#6DD5FA",
//       inactiveTintColor: "gray"
//     }
//   }
// );

// const TabNavigator = createAppContainer(Tabs);

// export default TabNavigator;
