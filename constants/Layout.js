import { Dimensions } from "react-native";

const dimensionsWindow = Dimensions.get("window");
const width = dimensionsWindow.width;
const height = dimensionsWindow.height;
export const Layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
