import './anime-item';

class AnimeList extends HTMLElement {

  connectedCallback() {
    this.setAttribute('class', 'row justify-content-center');
  }

  errorRender(color, message) {
    this.innerHTML = `
      <div class="col-md-7 w-100" id="error-render">
        <div class="alert alert-${color} text-center" role="alert">
           ${message}
        </div>
      </div> `
  }

  set series(series) {
    this._series = series
    this.render()
  }

  render() {
    this.innerHTML = "";
    this.className = 'row row-cols-2 row-cols-md-4 row-cols-xl-5';
    this._series.forEach(anime => {
      const animeItem = document.createElement('anime-item');
      animeItem.anime = anime
      this.appendChild(animeItem);
    })
  }
}

customElements.define('anime-list', AnimeList);