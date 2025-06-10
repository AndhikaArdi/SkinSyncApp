export function generatePageNotFound404Template() {
  return `
    <section class="not-found-container">
      <br><br><br><br><br>
      <h1 class="not-found-title">404</h1>
      <h2 class="not-found-subtitle">Halaman Tidak Ditemukan</h2>
      <p class="not-found-message">Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan periksa kembali URL atau kembali ke halaman utama.</p>
      <a href="/" class="not-found-link">Kembali ke Beranda</a>
    </section>
  `;
} // br br nya sementara ya, sampe kita nerapin css


// =========================================================


export function generateHomeHeroTemplate() {
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
    ${generateHomeHeroTemplate()}
  `;
}
