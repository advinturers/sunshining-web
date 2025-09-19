import Link from 'next/link';

// src/app/page.tsx
export const metadata = {
  title: 'Sunshining Professional Company Limited',
  description:
    'Innovation across technology & lifestyle projects — Advinturers and Drunk Bees. Based in Hong Kong.',
};

//<div className="ctaRow" style={{ marginTop: 14 }}>
export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero heroSun">
        <div className="container heroInner">
          <div className="heroLeft">
            <h1>Sunshining Professional Company Limited</h1>
            <p className="subtle" style={{ marginBottom: 20 }}>
              Empowering wine & lifestyle through technology
            </p>
            <div className="ctaRow">
			  <a className="btn btnPrimary" href="#projects">Our Projects</a>
              <a className="btn btnGhost" href="#contact">Contact</a>
            </div>
          </div>

          <div className="heroLogo">
            <img
              src="/sunshining-logo.svg"
              alt="Sunshining logo"
              style={{ width: 180, height: 180, display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container section">
        <h2>About Us</h2>
        <div className="prose">
          <p>
            Sunshining Professional Company Limited is formed by a team of professionals from
            information technology and other diverse fields. By combining technology with our
            shared passion and knowledge of wine, we aim to showcase and promote wine culture
            to a broader community.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="sectionDivider" aria-hidden="true" />

      {/* PROJECTS */}
      <section id="projects" className="container section">
        <h2>Our Projects</h2>
        <div className="cards">
          <a className="card" href="https://advinturers-web.vercel.app" target="_blank" rel="noreferrer">
            <h3>Advinturers</h3>
            <p>A mobile app for wine lovers to organize, document, and share tasting journeys.</p>
          </a>

          <a className="card" href="https://www.drunkbees.com" target="_blank" rel="noreferrer">
            <h3>Drunk Bees</h3>
            <p>An e-commerce project selling digital learning materials about wine culture.</p>
          </a>
        </div>
      </section>

      {/* Divider */}
      <hr className="sectionDivider" aria-hidden="true" />

      {/* VALUES */}
      <section id="values" className="container section">
        <h2>Why Us</h2>
        <div className="cards" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className="card">
            <h3>Vision</h3>
            <p>Integrating technology and lifestyle to enrich connections while spreading the appreciation of wine culture.</p>
          </div>
          <div className="card">
            <h3>Team</h3>
            <p>IT specialists and professionals from diverse fields with cross-disciplinary experience.</p>
          </div>
          <div className="card">
            <h3>Style</h3>
            <p>Simple, friendly, and harmonious — professional yet approachable.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="sectionDivider" aria-hidden="true" />

      {/* CONTACT */}
      <section id="contact" className="container section">
        <h2>Contact</h2>
        <div className="card">
          <p><strong>Company:</strong> Sunshining Professional Company Limited</p>
          <p>
            <strong>Address:</strong> Room 5, 4/F., Energy Plaza, 92 Granville Road,
            Tsim Sha Tsui, Kowloon, Hong Kong.
          </p>
          <p><strong>Tel:</strong> +852 5629 6767</p>
          <p><strong>Email:</strong> <a href="mailto:info@sun-shining.com">info@sun-shining.com</a></p>
        </div>
      </section>
    </>
  );
}
