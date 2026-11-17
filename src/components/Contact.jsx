import { PROFILE } from "../data";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <h2>Let’s build something.</h2>
          <p>I’m looking for a software role starting in 2027. If you have an opening, an internship or a project idea, send me a message.</p>
          <p>Email: dattaabhishek8@gmail.com</p>
          <p>Mobile: 6294603300</p>
          <div className="btns">
            <a className="btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer">github.com/Abhishekdatta3</a>
            <a className="btn" href={PROFILE.linkdin} target="_blank" rel="noopener noreferrer">linkedin.com/in/abhishek-datta-3b780a298</a>
          </div>
        </div>
      </div>
    </section>
  );
}