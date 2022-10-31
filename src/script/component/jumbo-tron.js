class JumboTron extends HTMLElement {
    
    connectedCallback(){
        this.render()
    }
  
    render() {
       this.innerHTML = 
       `<div class="container-fluid h-100">
            <div class="row justify-content-center align-content-center h-100">
                <div class="col-md-7">
                    <a href="index.html"><h1 class="text-center">Anime List</h1></a>
                    <div class="input-group mt-4">
                        <input type="text" class="form-control" id="keyword" placeholder="Search for an anime, e.g Naruto" aria-label="Recipient's anime" aria-describedby="basic-addon2">
                        <button class="btn btn-primary" id="btn-search">Search</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

customElements.define('jumbo-tron', JumboTron);