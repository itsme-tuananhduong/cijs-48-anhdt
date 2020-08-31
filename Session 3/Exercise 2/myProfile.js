class MyProfile extends HTMLElement {
    constructor() {
        super();
        
        this._shadowRoot = this.attachShadow({mode: 'open'});

        this._shadowRoot.innerHTML = `
        <style>
            #profile {
                position:relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: 'Quicksand', sans-serif;
                border-radius: 20px;
                background-color: white;
                width: 400px;
                margin: 65px 50px;
            }

            #profile:hover {
                bottom: 1px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.24);
            }

            img {
                width: 350px;
                height: 350px;
                margin-top: 6%;
                object-fit: cover;
                border-radius: 15px;
            }

            img:hover {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            h1 {
                padding-left: 15px;
                color: #3f3839;
                margin: 3px;
                margin-top: 10px;
            }

            p {
                padding-left: 15px;
                color: #3f3839;
                margin: 3px;
            }

            #address {
                margin-bottom: 10px;
            }

            #info {
                width: 385px;
                margin: 15px;
                margin-bottom: 18px;
            }
        </style>
        
        <div id="profile">
            <img src="" alt="img">
            <div id="info">
                <h1 id="name"></h1>
                <p id="age"></p>
                <p id="address"></p>
            </div>
        </div>
        `;

        this.$photo = this.shadowRoot.querySelector('img');
        this.$name = this.shadowRoot.querySelector('#name');
        this.$age = this.shadowRoot.querySelector('#age');
        this.$address = this.shadowRoot.querySelector('#address');
    }

    static get observedAttributes() {
        return ['photo', 'name', 'age', 'address'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'photo') {
            this.$photo.setAttribute('src', newValue);
        }
        else if (name === 'name') {
            this.$name.innerHTML = newValue;
        }
        else if (name === 'age') {
            this.$age.innerHTML = newValue;
        }
        else if (name === 'address') {
            this.$address.innerHTML = newValue;
        }
    }
}

window.customElements.define('my-profile', MyProfile);