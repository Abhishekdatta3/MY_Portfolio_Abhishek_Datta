import { PROFILE } from "../data";
import photo from "../assets/portfolio pic.jpeg";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <h1 className="rise">I build web apps that <span className="hl">people actually use.</span></h1>
            <p className="lead rise">Hi, I’m Abhishek, a final-year B.Tech Computer Science student at JIS University. I work across the MERN stack, and I like turning real problems into software that works.</p>
            <div className="btns rise">
              <a className="btn primary" href="#projects">See my projects</a>
              <a className="btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer">Github</a>
              <a className="btn" href={PROFILE.linkdin} target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
          </div>
          <figure className="photo rise">
            <img src={photo} alt="Portrait of Abhishek" width="560" height="700" />
          </figure>
        </div>
        <div className="now rise">
          <div><b><span className="dot"></span>Open to work</b><span>Fresher roles, 2027 batch</span></div>
          <div><b>Final year</b><span>B.Tech CSE, JIS University</span></div>
          <div><b>Also preparing</b><span>GATE 2027 for M.Tech</span></div>
        </div>
      </div>
    </header>
  );
}