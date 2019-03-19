import React from "react";
import LinearGradient from "react-native-linear-gradient";

export default (GradientView = ({ children, style, ...props }) => (
  <LinearGradient colors={["#484848", "#202020"]} style={style} {...props}>
    {children}
  </LinearGradient>
));
