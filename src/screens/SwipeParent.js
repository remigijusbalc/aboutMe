import React from "react";
import Swiper from "react-native-swiper";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import HobbiesScreen from "./HobbiesScreen";

export default class SwipeParent extends React.Component {
  constructor(props) {
    super(props);

    this.availableScreens = ["Home", "Details", "Hobbies"];

    this.state = {
      index: 0
    };
  }

  changePage = name => {
    const index = this.availableScreens.indexOf(name);
    this.swiperRef.scrollBy(index);
    //-1 * (0 - index)
  };
  render() {
    return (
      <Swiper
        ref={swiperRef => (this.swiperRef = swiperRef)}
        showsPagination={false}
        index={0}
        showsButtons={false}
      >
        <HomeScreen changePage={this.changePage} />
        <DetailsScreen />
        <HobbiesScreen />
      </Swiper>
    );
  }
}
