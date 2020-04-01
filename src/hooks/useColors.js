import { useColorScheme } from "react-native-appearance";
import { darkColors, lightColors } from "../constants/colors";

const useColors = () => {
  const colorScheme = useColorScheme();

  let backgroundColor, contentBackgroundColor, titleColor;

  if (colorScheme === "dark") {
    backgroundColor = darkColors.primaryBackgroundColor;
    contentBackgroundColor = darkColors.contentBackgroundColor;
    titleColor = darkColors.titleColor;
  } else {
    backgroundColor = lightColors.primaryBackgroundColor;
    contentBackgroundColor = lightColors.contentBackgroundColor;
    titleColor = lightColors.titleColor;
  }

  return {
    backgroundColor,
    contentBackgroundColor,
    titleColor
  };
};

export default useColors;
