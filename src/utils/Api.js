class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  _errorHandler(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  getAuthors() {
    return fetch(`${this._url}/authors`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._errorHandler);
  }
  getLocations() {
    return fetch(`${this._url}/locations`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._errorHandler);
  }
  getPaintings() {
    return fetch(`${this._url}/paintings`, {
      method: "GET",
      headers: this._headers,
    }).then(this._errorHandler);
  }
}
const api = new Api({
  url: "https://test-front.framework.team",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;