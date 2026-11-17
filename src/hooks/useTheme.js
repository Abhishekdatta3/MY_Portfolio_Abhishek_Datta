import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    try { const t = localStorage.getItem("theme"); if (t) setTheme(t); } catch (e) {}
  }, []);
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      try { localStorage.setItem("theme", theme); } catch (e) {}
    }
  }, [theme]);
  const toggle = () => {
    const dark = theme ? theme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(dark ? "light" : "dark");
  };
  return toggle;
}