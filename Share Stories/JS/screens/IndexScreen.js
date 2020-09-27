import {BaseComponent} from "../BaseComponent.js"; 

class IndexScreen extends BaseComponent {
    constructor() {
        super();

    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            <section class="index-screen">
                <navigation-bar></navigation-bar>
                <div class="content">
                    <form-add-story></form-add-story>
                    
                    <story-list></story-list>
                </div>
            </section>
        `;
    }
}

window.customElements.define('index-screen', IndexScreen);