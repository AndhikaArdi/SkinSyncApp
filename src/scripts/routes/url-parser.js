export default class UrlParser {

   // menghasilkan : (misal: /resource/id/verb atau /)
  static parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const segments = UrlParser.splitUrl(url);
    return UrlParser.combineUrlWithoutParams(segments);
  }

   // menghasilkan Objek dengan segmen URL (resource, id, verb) dan array segments.
  static parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1);
    return UrlParser.splitUrl(url);
  }

   // mengubah String Url dan menghasilkan Objek dengan segmen URL (resource, id, verb) dan array segments.
  static splitUrl(url) {
    const urlsSplits = url.split('/').filter((s) => s !== '');
    return {
      resource: urlsSplits[0] || null,
      id: urlsSplits[1] || null,
      verb: urlsSplits[2] || null,
      segments: urlsSplits,
    };
  }

   // mengubah objek (resource, id, verb) menjadi String rute yang digabungkan (misal: /resource/id/verb atau /).
  static combineUrlWithoutParams(splitedUrl) {
    const { resource, id, verb } = splitedUrl;
    let combinedPath = '';

    if (resource) {
      combinedPath += `/${resource}`;
    }
    if (id) {
      combinedPath += `/${id}`;
    }
    if (verb) {
      combinedPath += `/${verb}`;
    }

    return combinedPath || '/';
  }

   // kalau ada parameter query :
  static getUrlParams() {
    const url = window.location.hash.slice(1);
    const params = {};

    if (url.includes('?')) {
      const queryString = url.split('?')[1];
      const pairs = queryString.split('&');

      pairs.forEach((pair) => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      });
    }

    return params;
  }

   // mengembalikan jalur hash aktif saat ini (tanpa #)
  static getCurrentPath() {
    return window.location.hash.slice(1) || '/';
  }

   // Melakukan navigasi ke jalur hash baru (misal: /restaurants/123).
  static navigateTo(path) {
    window.location.hash = path;
  }
}