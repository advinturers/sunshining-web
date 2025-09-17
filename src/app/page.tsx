export const metadata = {
  title: 'Sunshining Professional Company Limited',
  description:
    'Innovation across technology & lifestyle projects — Advinturers and Drunk Bees. Based in Hong Kong.',
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero heroSun">
        <div className="container heroInner">
          <div className="heroLeft">
            <h1>Sunshining Professional Company Limited</h1>
            <p className="subtle">
              Empowering wine & lifestyle through technology — based in Hong Kong.
            </p>
            <div className="ctaRow" style={{ marginTop: 14 }}>
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
        <h2>About Us｜公司簡介</h2>
        <div className="prose">
          <p>
            <strong>EN：</strong> Sunshining Professional Company Limited is formed by a team of
            professionals from information technology and other diverse fields. By combining
            technology with our shared passion and knowledge of wine, we aim to showcase and promote
            wine culture to a broader community.
          </p>
          <p>
            <strong>中文：</strong> 晨肇寧專業服務有限公司由一班來自資訊科技及多個專業領域的人士組成。
            我們透過科技與彼此的品酒智識，致力展現及推廣葡萄酒文化，讓更多人得以親近和認識。
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container section">
        <h2>Our Projects｜項目</h2>
        <div className="cards">
          <a className="card" href="https://advinturers-web.vercel.app" target="_blank" rel="noreferrer">
            <h3>Advinturers｜嗜萄</h3>
            <p>EN: A mobile app for wine lovers to organize, document, and share tasting journeys.</p>
            <p>中：建立活動、記錄照片與筆記、重溫屬於你們的回憶。</p>
          </a>

          <a className="card" href="https://www.drunkbees.com" target="_blank" rel="noreferrer">
            <h3>Drunk Bees｜醉嗡</h3>
            <p>EN: An e-commerce project selling digital learning materials about wine culture.</p>
            <p>中：以葡萄酒文化為主題的電子教材網店。</p>
          </a>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="container section">
        <h2>Why Us｜我們的願景與風格</h2>
        <div className="cards" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className="card">
            <h3>Vision｜願景</h3>
            <p>Integrating technology and lifestyle to enrich connections while spreading the appreciation of wine culture.</p>
          </div>
          <div className="card">
            <h3>Team｜團隊</h3>
            <p>IT specialists and professionals from diverse fields with cross-disciplinary experience.</p>
          </div>
          <div className="card">
            <h3>Style｜風格</h3>
            <p>Simple, friendly, and harmonious — professional yet approachable.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container section">
        <h2>Contact｜聯絡我們</h2>
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
