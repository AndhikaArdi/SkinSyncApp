import AnalyzePresenter from './analyze-presenter';
import { 
  generateAnalyzeTemplate,
  generateAnalyzeResultLoadingTemplate,
  generateAnalyzeResultDefaultTemplate,
} from '@pg/components/template';

export default class AnalyzePage {
  #presenter;

  async render() {
    return`<section class="container-analyze-view" id="analyze">memuat ...</section>`;
  }

  async afterRender() {
    this.#presenter = new AnalyzePresenter({
      view: this,
    });
    
    await this.#presenter._renderView();

    this.#bindFileUpload();
    this.#bindCardBtnActions();
  }
 
  _renderView() {
    const container = document.querySelector('#app');
    container.innerHTML = generateAnalyzeTemplate();
  }

  _renderPreview(ImgData) {
    const previewImg = document.getElementById('preview');
    const placeholder = document.querySelector('.placeholder-content');
    const analyzeBtn = document.getElementById('analyze-btn');

    previewImg.src = ImgData;
    previewImg.style.display = 'block';
    placeholder.style.display = 'none';
    analyzeBtn.disabled = false;
  }

  _renderAnalysisLoading() {
    const analyzeBtn = document.getElementById('analyze-btn');
    const resultContainer = document.getElementById('analysis-result');

    analyzeBtn.disabled = true;
    analyzeBtn.innerHTML = '<i data-feather="loader"></i> Menganalisis...';
    resultContainer.innerHTML = generateAnalyzeResultLoadingTemplate();
    if (typeof feather !== "undefined") feather.replace();
  }

  _updateAnalyzeCard(){
    const analyzeBtn = document.getElementById('analyze-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resultContainer = document.getElementById('analysis-result');

    analyzeBtn.disabled = false;
    resetBtn.style.display = 'inline-block';
    analyzeBtn.innerHTML = '<i data-feather="search"></i> Analisis Ulang';
    resultContainer.innerHTML = generateAnalyzeResultDefaultTemplate();
    if (typeof feather !== "undefined") feather.replace();
  }

  showNotification(message, type) {
    alert(`${type.toUpperCase()}: ${message}`);
  }

  _applyEntranceAnimation() {
    const row = document.querySelector('.container-analyze-view .row');
    if (row) {

      setTimeout(() => {
        row.classList.toggle('is-animated'); // menambah class untuk animasi css
      }, 100);

    }
  }

  #bindFileUpload(callback) {
    const UploadBtn = document.getElementById('file-input');
    UploadBtn.addEventListener("change", (e) =>
      this.#presenter._handleFileSelect(e.target.files[0])
    );

    const previewContainer = document.getElementById('preview-container');

    previewContainer.addEventListener("dragover", (e) => {
      e.preventDefault();
      previewContainer.classList.add("drag-over");
    });
    previewContainer.addEventListener("dragleave", () =>
      previewContainer.classList.remove("drag-over")
    );

    previewContainer.addEventListener("drop", (e) => {
      e.preventDefault();
      previewContainer.classList.remove("drag-over");
      if (e.dataTransfer.files.length > 0) {
        this.#presenter._handleFileSelect(e.dataTransfer.files[0]);
      }
    });
  }

  #bindCardBtnActions(callback) {
    const AnalyzeBtn = document.getElementById('analyze-btn');
    AnalyzeBtn.addEventListener("click", (e) =>
      this.#presenter._handelAnalyze()
    );

    const ResetBtn = document.getElementById('reset-btn');
    ResetBtn.addEventListener("click", (e) =>
      this.#presenter._handelReset()
    );
    
  }

}