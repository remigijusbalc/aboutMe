import React from "react";
import { Image, View } from "react-native";

export default function MyAvatar({ style = {} }) {
  return (
    <Image
      style={[
        {
          //width: null,
          //height: null,
          flex: 0.5,
          resizeMode: "contain"
        },
        style
      ]}
      source={{ uri: "avatar" }}
    />
  );
}
