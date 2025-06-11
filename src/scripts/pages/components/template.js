/* ===================================================== */
/* PAGE NOT FOUND (404) */

export function generatePageNotFound404Template() {
  return `
    <section class="not-found-container">
      <h1 class="not-found-title">404</h1>
      <h2 class="not-found-subtitle">Halaman Tidak Ditemukan</h2>
      <p class="not-found-message">Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan periksa kembali URL atau kembali ke halaman utama.</p>
      <a href="/" class="not-found-link">Kembali ke Beranda</a>
    </section>
  `;
}



/* ===================================================== */
/* HOME PAGE (HOME) */

export function generateHomeMainTemplate() {
  return `
    <section class="container-home-view" id="home">
      <main class="content">
        <h1>
          Mari Kenali Jenis Kulitmu dengan <i>Skin<span>Sync</span></i>.
        </h1>
        <p>
          Temukan jenis kulit wajah Anda dengan teknologi analisis terdepan. 
          SkinSync membantu Anda memahami karakteristik kulit untuk perawatan yang lebih tepat dan efektif.
        </p>
        <a href="#/analyze" class="cta">Get Started</a>
      </main>
    </section>
  `;
}

export function generateHomeTemplate() {
  return `
    ${generateHomeMainTemplate()}
  `;
}



/* ===================================================== */
/* ABOUT PAGE (ABOUT) */

export function generateAboutMainTemplate() {
  return `
    <section class="container-about-view" id="about" >
      <h2><span>Tentang</span> Kami</h2>

      <div class="row">
        <div class="about-img">
          <img src="/img/about-page-1.jpg" alt="Tentang Kami" />
        </div>

        ${generateAboutMainDescTemplate()}

      </div>
    </section>
  `;
}

export function generateAboutMainDescTemplate() {
  return `
    <div class="content">
      <h3>Kenapa memilih <span>SkinSync</span>?</h3>
      <p>
        SkinSync adalah platform inovatif yang menggunakan teknologi canggih untuk menganalisis jenis kulit wajah Anda. 
        Kami berkomitmen untuk memberikan solusi perawatan kulit yang personal dan efektif.
      </p>
      <p>
        Dengan algoritma machine learning yang telah dilatih menggunakan ribuan data kulit, SkinSync dapat 
        mengidentifikasi karakteristik unik kulit Anda dan memberikan rekomendasi perawatan yang tepat sasaran.
      </p>
      
      ${generateAboutMainFeaturelistTemplate()}

    </div>
  `;
}

export function generateAboutMainFeaturelistTemplate() {
  return `
    <div class="features">
      <div class="feature-item">
        <h4><i data-feather="zap"></i> Analisis Cepat</h4>
        <p>Hasil analisis dalam hitungan detik</p>
      </div>
      <div class="feature-item">
        <h4><i data-feather="shield"></i> Akurat & Terpercaya</h4>
        <p>Teknologi AI yang telah teruji</p>
      </div>
      <div class="feature-item">
        <h4><i data-feather="heart"></i> Rekomendasi Personal</h4>
        <p>Saran perawatan sesuai jenis kulit</p>
      </div>
    </div>
  `;
}

export function generateAboutTemplate() {
  return `
    ${generateAboutMainTemplate()}
  `;
}