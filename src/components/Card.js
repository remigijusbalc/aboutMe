import React from "react";
import { View } from "react-native";

export default function Card({ children, style = {}, ...props }) {
  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          borderWidth: 0.5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
          width: "80%",
          margin: 8
        },
        style
      ]}
    >
      {children}
    </View>
  );
}
