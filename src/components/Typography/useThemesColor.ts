import {
  AU_THEME_COLORS,
  ThemesColorType,
} from "@/components/Typography/theme.ts";
import { useDisplayMode } from "@/providers/DisplayModeProvider";

export const useThemesColor = () => {
  const { mode } = useDisplayMode();
  const getThemesColor = (
    segment: ThemesColorType,
    fixedMode?: "light" | "dark",
  ) => {
    const colors = AU_THEME_COLORS[segment];
    if (!colors) return undefined;
    const [light, dark] = colors;
    console.log("@@getThemesColor mode", mode);
    if (fixedMode) {
      return fixedMode === "light" ? light : dark;
    }
    return mode === "dark" ? dark : light;
  };

  return {
    getThemesColor,
  };
};
