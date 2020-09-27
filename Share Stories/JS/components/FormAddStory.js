import {BaseComponent} from "../BaseComponent.js";
import { getCurrentUser } from "../utils.js";

class FormAddStory extends BaseComponent {
    constructor() {
        super();
    }
    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            <form class="form-add-story">
                <textarea name="content" cols="30" rows="10"></textarea>
                <button>Post</button>
            </form>
        `; 

        this.$formAddStory = this._shadowRoot.querySelector('.form-add-story');
        this.$formAddStory.onsubmit = async (event) => {
            event.preventDefault();
            // lay du lieu
            let content = this.$formAddStory.content.value.trim();
            // kiem tra du lieu
            if (content == '') {
                alert('Input your story content');
            } else {
                let currentUser = getCurrentUser();
            // them du lieu vao firestore
                await firebase.firestore().collection('stories').add({
                    content: content,
                    owner: currentUser.id,
                    dateModified: new Date().toISOString()
                });

                this.$formAddStory.reset();
            }
            
        }
    }

    
}

window.customElements.define('form-add-story', FormAddStory);

// hoan thien chuc nang post story