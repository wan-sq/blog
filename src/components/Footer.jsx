import { site } from '../lib/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} {site.author} · {site.title}
        </span>
        <span className="footer-tag">{site.tagline}</span>
      </div>
    </footer>
  )
}
