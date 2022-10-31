class AnimeItem extends HTMLElement {
  
  set anime(anime) {
    this._anime = anime
    this.render();
  }

  render() {
    this.className = "col mb-4"
    this.innerHTML = `
      <style>
        .card {
          border: none;
          background: none;
          max-width: 12rem;
          cursor: pointer;
        }
      
        .card-img-top {
          height: 275px;
        }
      
        .card-body {
         padding: 15px 5px;
        }
        
        .card-text {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      
        .card-text span {
          color: #b2bec3 !important;
          font-weight: 400;
        }
      </style>

          <div class="card">
            <img src="${this._anime.images.jpg.image_url}" class="card-img card-img-top" alt="${this._anime.title} Cover">
            <div class="card-body">
              <h5 class="card-title text-truncate">${this._anime.title}</h5>
              <p class="card-text">
                <span>${this._anime.type}</span>
                <span>
                  <i class="bi bi-star-fill"></i>
                  ${this._anime.score}
                </span>
              </p>
            </div>
          </div>`;
        }
}

customElements.define('anime-item', AnimeItem);
