import React from "react";
import { View, Text } from "react-native";

import selectorStyles from "./selectorStyles";
import Card from "../Components/Card";

export default function ContentSelector() {
  return (
    <View style={selectorStyles.container}>
      <Card />
    </View>
  );
}
