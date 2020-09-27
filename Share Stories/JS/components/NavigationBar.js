import {BaseComponent} from "../BaseComponent.js";

const style = /*html*/ `
    <style>
        nav {
            font-family: 'Quicksand';
            display: flex;
            align-items: center;
            background-color: #fbb13c;
            border-radius: 5px;
            justify-content: space-around;
        }
        .logo {
            margin: 10px;
            width: 50px;
            height: 50px;
        }
        .avatar {
            margin: 10px;
            width: 50px;
            height: 50px;
            border-radius: 50%;

        }
        .brand {
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .profile {
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .form-search {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        button {
            font-family: 'Quicksand';
            font-size: 15px;
            color: white;
            background-color: #b66d0d;
            width: 100px;
            height: 31px;
            border: 0px;
            border-radius: 0px 5px 5px 0px;
        }
    </style>
`;

class NavigationBar extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <nav>
                <div class="brand">
                    <img class="logo" src="./img/logo.png" alt="logo">
                    <div class="brand-title">WESHARE</div>
                </div>

                <form class="form-search">
                    <input-wrapper label="" id="keyword"></input-wrapper>
                    <button>Search</button>
                </form>
                
                <div class="profile">
                    <img class="avatar" src="https://vignette.wikia.nocookie.net/sonako/images/9/90/Yao-ming.jpg/revision/latest?cb=20150902024047" alt="avatar">
                    <span class="profile-name">Na ni</span>
                </div>
            </nav>
        `;
    }
}

window.customElements.define('navigation-bar', NavigationBar);