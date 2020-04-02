import { useColorScheme } from "react-native-appearance";
import { darkColors, lightColors } from "../constants/colors";

const useColors = () => {
  const colorScheme = useColorScheme();

  let backgroundColor, contentBackgroundColor, titleColor, textColor;

  if (colorScheme === "dark") {
    backgroundColor = darkColors.primaryBackgroundColor;
    contentBackgroundColor = darkColors.contentBackgroundColor;
    titleColor = darkColors.titleColor;
    textColor = darkColors.textColor;
  } else {
    backgroundColor = lightColors.primaryBackgroundColor;
    contentBackgroundColor = lightColors.contentBackgroundColor;
    titleColor = lightColors.titleColor;
    textColor = lightColors.textColor;
  }

  return {
    backgroundColor,
    contentBackgroundColor,
    titleColor,
    textColor
  };
};

export default useColors;
