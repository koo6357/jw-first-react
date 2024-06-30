import { createContext, ReactNode, useContext, useState } from "react";

const DisplayModeContext = createContext<{
  mode: "light" | "dark";
  toggleMode: () => void;
} | null>(null);

interface Props {
  children: ReactNode;
}
const DisplayModeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <DisplayModeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </DisplayModeContext.Provider>
  );
};

export const useDisplayMode = () => {
  const context = useContext(DisplayModeContext);
  if (!context) {
    throw new Error("useDisplayMode must be used within a DisplayModeProvider");
  }
  return context;
};

export default DisplayModeProvider;
