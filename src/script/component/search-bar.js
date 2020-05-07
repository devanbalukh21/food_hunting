class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                max-width: 800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                top: 10px;
                background-color: white;
                margin-bottom: 30px;
            }
            
            .search-container > input {
                width: 75%;
                padding: 16px;
                border: 0;
                border-bottom: 2px solid #ff4757;
                font-weight: bold;
            }
            
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid #ff4757;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container >  input::placeholder {
                color: #ff4757;
                font-weight: normal;
            }
            
            .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: #ff4757;
                color: white;
                border: 0;
                outline-color: gray;
                text-transform: uppercase;
            }
            
            .search-container:hover, 
            .search-container:focus {
                outline: none;
                background-color: rgba(255, 255, 255, 0.5);
            }
            
            .search-container:focus {
                padding-left: 50px;
            }
            
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
            
                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }
            
                .search-container > button {
                    width: 100%;
                }
            }
        </style>

        <div id="search-container" class="search-container">
            <input placeholder="Search your favorite foods in here..." id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
  
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }

 
customElements.define("search-bar", SearchBar);