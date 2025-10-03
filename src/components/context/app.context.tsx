import { createContext, useContext, useEffect, useState } from "react";
type TTheme = 'light' | 'dark'
interface IAppContext {
  theme: TTheme;
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>;
}
const AppContext = createContext<IAppContext | null>(null);
// Props cho Provider
interface IAppContextProviderProps {
  children: React.ReactNode;
}
export const AppContextProvider = (props: IAppContextProviderProps) => {
  const [theme, setTheme] = useState<TTheme>(() => {
    const initialTheme = (localStorage.getItem("theme") ?? 'dark') as TTheme;
    return initialTheme;
  });

  useEffect(() => {
    const mode = localStorage.getItem("theme") as TTheme;
    if (mode) {
      setTheme(mode);
      document.documentElement.setAttribute("data-bs-theme", mode);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useCurrentApp = () => {
  const currentAppContext = useContext(AppContext);

  if (!currentAppContext) {
    throw new Error(
      "useCurrentApp has to be used within <AppContext.Provider>"
    );
  }

  return currentAppContext;
};
