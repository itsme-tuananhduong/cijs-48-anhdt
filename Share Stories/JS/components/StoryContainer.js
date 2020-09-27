import {BaseComponent} from "../BaseComponent.js";
import { getDataFromDoc } from "../utils.js";


const style = /*html*/ `
    <style>
        .story-container {
            width: 500px;
            border-radius: 5px;
            border: 1px solid black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        .story-container:hover {

        }
    </style>
`;

class StoryContainer extends BaseComponent {
    constructor() {
        super();

        this.props = {
            owner: '',
            content: '',
            "date-modified": '',
            id: ''
        };

        this.state = {
            name: ''
        }
    }

    static get observedAttributes() {
        return ['owner', 'content', 'date-modified', 'id'];
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="story-container">
                <div class="story-info">
                    <div class="owner"><p>${this.state.name}</p></div>
                    <div class="date-modified"><p>${this.props["date-modified"]}</p></div>
                </div>
                <div class="story-content">
                    <p>${this.props.content}</p>
                </div>
            </div>
        `;
    }

    async componentDidUpdate() {
        if (this.props.owner) {
            let response = await firebase
                .firestore()
                .collection('users')
                .doc(this.props.owner)
                .get();
            let owner = getDataFromDoc(response);
            this.setState({
                name: owner.name
            })
            }
    }
}

window.customElements.define('story-container', StoryContainer);