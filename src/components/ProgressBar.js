import React from "react";
import { View } from "react-native";

export default (ProgressBar = ({ percent, width }) => {
  const barWidth = width * (percent / 100);

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "lightgrey",
        width: width,
        height: 20
      }}
    >
      <View
        style={{
          width: barWidth,
          height: "100%",
          backgroundColor: "#e0ebfc",
          flexWrap: "wrap"
        }}
      />
    </View>
  );
});
