import {BaseComponent} from "../BaseComponent.js";
import { getDataFromDocs } from "../utils.js";

class StoryList extends BaseComponent {
    constructor() {
        super();

        this.state = {
            stories: []
        }
    }
    render() {
        let html = '';
        for (let story of this.state.stories) {
            html += /*html*/ `
            <story-container 
                id="${story.id}" 
                owner="${story.owner}"
                content="${story.content}"
                date-modified="${story.dateModified}">
            </story-container>`;
        }
        this._shadowRoot.innerHTML = /*html*/ `
            
            <div class="story-list">
                ${html}
            </div>
        `;
    }

    componentDidMount() {
        firebase.firestore().collection('stories').onSnapshot((querySnapshot) => {
            this.setState({
                stories: getDataFromDocs(querySnapshot.docs)
            })
        });
    }
}

window.customElements.define('story-list', StoryList);