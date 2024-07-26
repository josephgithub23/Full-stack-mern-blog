import { useSelector } from "react-redux";

/**
 * Remember with useSelector hook gives us access to our redux states
 * So we wrap our app with this ThemeProvider so the theme is applied to all part of our application.
 */

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div>
      <div className={theme}>
        <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
