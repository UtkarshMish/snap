import React from "react";
import { View, Text } from "react-native";

import selectorStyles from "./selectorStyles";
import Card from "../Components/Card";
import colors from "../../config/colors";

export default function ContentSelector() {
  return (
    <View style={selectorStyles.container}>
      <View style={selectorStyles.subContainer}>
        <Text style={selectorStyles.textStyle}>Select Your Media Content</Text>
      </View>
      <View style={selectorStyles.subContainer}>
        <Card
          title="Movies"
          name="film"
          type="font-awesome"
          color={colors.movieColor}
          size={64}
        />

        <Card
          title="Live TV"
          name="tv"
          type="font-awesome"
          color={colors.tvColor}
          size={64}
        />
        <Card
          title="Media"
          name="play-circle"
          type="font-awesome"
          color={colors.mediaColor}
          size={64}
        />
        <Card
          title="Music"
          name="music"
          type="font-awesome"
          color={colors.musicColor}
          size={64}
        />
        <Card
          title="Web Series"
          name="live-tv"
          type="material"
          color={colors.webSeriesColor}
          size={64}
        />
      </View>
    </View>
  );
}
