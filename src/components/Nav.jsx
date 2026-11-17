import useTheme from "../hooks/useTheme";

export default function Nav() {
  const toggle = useTheme();
  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="#top">abhishek<i>.dev</i></a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
          <button className="icon-btn" onClick={toggle} aria-label="Switch light or dark theme">◐</button>
        </div>
      </div>
    </nav>
  );
}