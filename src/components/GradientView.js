import React from "react";
import LinearGradient from "react-native-linear-gradient";


export default GradientView = ({children, style, ...props}) => (
    <LinearGradient
    colors={["#2980B9", "#6DD5FA", "#FFFFFF"]}
     style={style}
     {...props}>
     {children}
     </LinearGradient>
)