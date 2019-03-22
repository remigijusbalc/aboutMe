import React from "react";
import Swiper from "react-native-swiper";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import HobbiesScreen from "./HobbiesScreen";
//style={styles.wrapper}
export default (SwipeParent = () => (
  <Swiper showsButtons>
    <HomeScreen />
    <HobbiesScreen />
    <DetailsScreen />
  </Swiper>
));
