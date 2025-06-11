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



/* ===================================================== */
/* ANALYZE PAGE (ANALYZE) */

export function generateAnalyzeMainTemplate() {
  return `
    <section id="analyze" class="container-analyze-view">
      <h2><span>Analisis</span> Kulit Wajah Kamu</h2>
      <p>Upload foto wajah Anda untuk mengetahui jenis kulit dan mendapatkan rekomendasi perawatan yang tepat.</p>
      <div class="row">
        <div class="card-img">
          <div id="preview-container" class="preview-img">
            <img id="preview" alt="Preview gambar" src="" />
            <div class="placeholder-content">
              <i data-feather="camera" size="48"></i>
              <p>Upload foto wajah Anda</p>
            </div>
          </div>
          <div class="upload-btn">
            <label for="file-input" class="custom-file-upload">
              <i data-feather="upload"></i> Upload File
            </label>
            <input type="file" id="file-input" accept="image/*" capture="environment">
          </div>
          <div class="analyze-actions">
            <button id="analyze-btn" class="analyze-button" disabled>
              <i data-feather="search"></i> Analisis Kulit
            </button>
            <button id="reset-btn" class="reset-button" style="display: none;">
              <i data-feather="refresh-cw"></i> Reset
            </button>
          </div>
        </div>
        <div class="card-result">
          <div id="analysis-result" class="analysis-content">
            ${generateAnalyzeResultDefaultTemplate()}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function generateAnalyzeResultDefaultTemplate() {
  return `
    <div class="result-placeholder">
      <i data-feather="info" size="48"></i>
      <h3>Hasil Analisis</h3>
      <p>Upload foto dan klik "Analisis Kulit" untuk melihat hasil analisis jenis kulit wajah Anda.</p>
    </div>
  `;
}

export function generateAnalyzeResultLoadingTemplate() {
  return `
    <div class="loading-analysis">
      <div class="loading-spinner"></div>
      <h3>Sedang menganalisis...</h3>
      <p>Mohon tunggu, kami sedang menganalisis jenis kulit Anda.</p>
    </div>
  `;
}

export function generateAnalyzeTemplate() {
  return `
    ${generateAnalyzeMainTemplate()}
  `;
}