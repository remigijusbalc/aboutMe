import React from "react";
import { View } from "react-native";

export default function Card({ children, style = {}, ...props }) {
  return (
    <View
      {...props}
      style={[
        {
          borderWidth: 0.5,

          margin: 8
          //  padding: 16
        },
        style
      ]}
    >
      {children}
    </View>
  );
}
