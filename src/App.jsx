import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import { PROFILE } from "./data";

export default function App() {
  return (
    <>
      <Nav /><Hero /><About /><Projects /><Skills /><Journey /><Contact />
      <footer><div className="wrap">© 2026 {PROFILE.name}. Built with React.</div></footer>
    </>
  );
}