import {BaseComponent} from "./basecomponent.js";

class Task extends BaseComponent {
    constructor() {
        // vi noi dung cua 1 task do thuoc tinh quyet dinh. ma thuoc tinh duoc truyen tu ngoai
        // => props
        super();
        this.props = {
            "content": '',
            "is-completed": false,
            "date-modified": null
        };
    }

    static get observedAttributes() {
        return ['content', 'is-completed', 'date-modified'];
    }

    render() {
        this._shadowRoot.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="./css/task.css">
        <div id="task">
            <div id="content">
                <div>
                    <p>${this.props.content}</p>
                </div>
            </div>
            <div id="is-completed">
                <div>
                    <p>${this.props["is-completed"]}</p>
                </div>
            </div>
            <div id="date-modified">
                <div>
                    <p>${this.props["date-modified"]}</p>
                </div>
            </div>
            <div id="edit">
                <p>Edit</p>
            </div>
            <div id="delete">
                <p>Delete</p>
            </div>
        </div>
        `;

        this.$delete = this._shadowRoot.getElementById('delete');
        this.$delete.onclick = (event) => {
            // Xoa tren giao dien
            this.remove();

            // Xoa trong state cua list
        }
    }
}

window.customElements.define('task-container', Task);