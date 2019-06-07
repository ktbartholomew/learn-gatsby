import React from "react"

export default () => {
  return (
    <div id="wrap" className="home">
      <header className="site-header">
        <h2 className="site-title">
          <a href="/">Rae D. Cabello</a>
        </h2>
        <nav className="nav" />
      </header>

      <div className="intro">Hi, I’m Rae D. Cabello</div>
      <div className="huge">
        <p>I build &amp; design products for the web.</p>
      </div>

      <ul className="social-links">
        <li>
          <a
            href="https://www.dropbox.com/s/rm00sjnbx2a6k8b/rdc_portfolio_2018_small.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="email"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/raedcabello"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/raedcabello"
            target="_blank"
            rel="noopener noreferrer"
            className="dribbble"
          >
            Dribbble
          </a>
        </li>
        <li>
          <span id="contact-trigger">
            <a href="#" className="email">
              Email
            </a>
          </span>
        </li>
      </ul>
    </div>
  )
}
