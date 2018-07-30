import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class CounterComp extends LitElement{
    constructor() {
        super();
        this.total = 0;
    }

    static get properties() {
        return {
            total: Number,
            color: String,
            background: String
        }
    }

    clickMethod(event){
        console.log(event); // printing type of event
        console.log("I just clicked ");
    }

    // executes when page loads
    _firstRendered() {
        const addBtn = this._root.getElementById('add-btn');
        addBtn.addEventListener("click", (e) => {
            this.total +=1;
        });

         const subBtn = this._root.getElementById('sub-btn');
        subBtn.addEventListener("click", (e) => {
            this.total -= 1;   
        });
    }

    _render({color, background}) {
        return html `
        
        <style>

        .primary-btn{
            padding: 15px 25px;
            display: inline-block;
            color: white;
            cursor: pointer;
        }

        #add-btn{
            background: blue;
        }

        #sub-btn{
            background: red;
        }
        
         </style>

    <div class="total">${this.total}</div>
    <div class="primary-btn" id="add-btn">+</div>
    <div class="primary-btn" id="sub-btn">-</div>
        
        `;
    }
}




customElements.define("counter-comp", CounterComp);
