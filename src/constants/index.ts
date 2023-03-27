import { Dimensions } from "react-native";

export const Pallet = {
  White: "#fff",
  Gray: "rgba(0,0,0,0.8)",
  LightGray: "rgba(0,0,0,0.1)",
  Black: "#000",
  Accent: "#8097D7",
  Red: "red",
  LightBlue: "#e7eff2",
};

export const Window = {
  ...Dimensions.get("window"),
};
