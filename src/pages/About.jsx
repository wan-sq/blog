import aboutRaw from '../content/about.md?raw'
import Markdown from '../lib/Markdown.jsx'
import { site } from '../lib/site.js'

export default function About() {
  return (
    <div className="container">
      <header className="about-head">
        <div className="avatar" aria-hidden="true">
          {site.author.slice(0, 1)}
        </div>
        <div>
          <h1 className="about-name">{site.author}</h1>
          <p className="about-bio">{site.bio}</p>
          <div className="about-social">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <Markdown>{aboutRaw}</Markdown>
    </div>
  )
}
