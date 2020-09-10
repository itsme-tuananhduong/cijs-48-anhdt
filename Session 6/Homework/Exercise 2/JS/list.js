import {BaseComponent} from "./basecomponent.js";

class List extends BaseComponent {
    constructor() {
        super();
        this.state = {
            list: [
                {name: 'meme mr. Da', 
                image: 'https://s.memehay.com/files/posts/bcf5d29bff082f221548b95c58d5ab16toi-nam-nay-hon-70-tuoi-ma-chua-gap-truong-hop-nao-nhu-the-nay-ca.jpg',
                description: ':))',
                "date-modified": '2020-09-10T04:42:49.523Z'}
            ]
        };
    }

    render() {
        let html = '';
        for (let meme of this.state.list) {
            html += `<meme-container name="${meme.name}" image="${meme.image}" description="${meme.description}" date-modified="${meme["date-modified"]}"></meme-container>`;
        }

        this._shadowRoot.innerHTML = `
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="./css/list.css">
            <form id="form-add-meme">
                <input type="text" name="name" placeholder="Meme's name">
                <input type="text" name="image" placeholder="Paste image's link here">
                <input type="text" name="description" placeholder="Description">
                <button>Add meme</button>
            </form>
            <div class="list">
                ${html}
            </div>
        `;
    
        this.$formAddMeme = this._shadowRoot.getElementById('form-add-meme');
        this.$formAddMeme.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = {
                name: this.$formAddMeme.name.value,
                image: this.$formAddMeme.image.value,
                description: this.$formAddMeme.description.value,
                "date-modified": new Date().toISOString()
            }
            this.state.list.push(newMeme);

            let $meme = document.createElement('meme-container');
            $meme.setAttribute('name', newMeme.name);
            $meme.setAttribute('image', newMeme.image);
            $meme.setAttribute('description', newMeme.description);
            $meme.setAttribute('date-modified', newMeme["date-modified"]);

            this.$list = this._shadowRoot.querySelector('.list');
            this.$list.appendChild($meme);
        }
    }
}

window.customElements.define('list-container', List);