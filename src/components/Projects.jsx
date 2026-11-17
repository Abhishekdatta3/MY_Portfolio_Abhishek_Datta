import { useState, useMemo } from "react";
import { PROJECTS } from "../data";

export default function Projects() {
  const allTags = useMemo(() => ["All", ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))], []);
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(0);
  const shown = PROJECTS.map((p, i) => ({ ...p, i })).filter(p => filter === "All" || p.tags.includes(filter));
  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <div className="chips" role="group" aria-label="Filter projects by technology">
          {allTags.map(t => (
            <button key={t} className="chip" aria-pressed={filter === t} onClick={() => setFilter(t)}>{t}</button>
          ))}
        </div>
        <div>
          {shown.map(p => (
            <div className="proj" key={p.title} data-open={open === p.i}>
              <button aria-expanded={open === p.i} onClick={() => setOpen(open === p.i ? -1 : p.i)}>
                <h3>{p.title}</h3><span className="plus" aria-hidden="true">+</span>
              </button>
              <div className="body"><div><div className="in">
                <p>{p.desc}</p>
                <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              </div></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}