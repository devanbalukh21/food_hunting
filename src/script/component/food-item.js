class FoodItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set food(food) {
        this._food = food;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                :host {
                    display: block;
                    margin-bottom: 18px;
                    overflow: hidden;
                }

                .fan-art-food {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 10px;
                }

                .food-info {
                    padding: 24px;
                    background-color: rgba(0, 0, 0, 0.8);
                    margin-bottom: 30px;
                    border-radius: 10px;
                }
                
                .food-info > h2 {
                    font-weight: lighter;
                    color: white;
                    font-weight: bolder;
                }
                
                .food-info > p {
                    color: white;
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10;
                }

            </style>

            <img class="fan-art-food" src="${this._food.strMealThumb}" alt="Fan Art">
            <div class="food-info">
                <h2>${this._food.strMeal}</h2>
                <p>${this._food.strInstructions}</p>
            </div>`;
    }
 }
  
 customElements.define("food-item", FoodItem);