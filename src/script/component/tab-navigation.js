class TabNavigation extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector(".nav .nav-item .nav-link.active").id;
    }

    render() {
        this.innerHTML = `
        <style>
            .container-fluid {
                background-color: #0d1117;
                width: 100%;
            }
            
            .nav-link {
                color: white;
            }
            .nav-link:hover {
                color: #6ab9ec;
            }
        </style>

        <div class="container-fluid col-md-7 pb-4">
            <ul class="nav nav-pills justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" id="airing">Now Playing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="topAnime">Top Anime</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="upcoming">Upcoming</a>
                </li>
            </ul>
        </div>`;

        const tabItems = this.querySelectorAll(
            ".nav .nav-item .nav-link"
        );

        tabItems.forEach((tabItem) => {
            tabItem.addEventListener("click", (event) => {
                const selectedItems = this.querySelectorAll(
                    ".active"
                );

                if (selectedItems.length > 0) {
                    selectedItems[0].classList.remove("active");
                }

                event.target.classList.add("active");
                this.addEventListener("click", this._clickEvent);
            });
        });
    }

}

customElements.define('tab-navigation', TabNavigation)