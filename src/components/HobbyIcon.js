import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default ({ name, size, style }) => {
  return <Icon style={style} name={name} size={size} />;
};
