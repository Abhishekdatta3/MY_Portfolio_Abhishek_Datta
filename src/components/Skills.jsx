import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2>Skills</h2>
        <div className="skills">
          {SKILLS.map(s => (
            <div className="skill" key={s.group}>
              <h3>{s.group}</h3>
              <ul>{s.items.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}