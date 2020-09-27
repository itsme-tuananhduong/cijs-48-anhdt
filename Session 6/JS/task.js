import {BaseComponent} from "./basecomponent.js";

const style = /*html*/ `
    <style>
        #task {
            font-family: 'Quicksand';
            display: flex;
        }

        #content {
            width: 500px;
            height: 75px;
            border-radius: 5px;
            background-color: green;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px;
            position: relative;
        }

        #content:hover {
            bottom: 1px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
        }

        #content p {
            font-family: 'Quicksand';
            color: white;
        }

        #is-completed {
            width: 75px;
            height: 75px;
            border-radius: 5px;
            background-color: blue;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px;
            position: relative;
        }

        #is-completed:hover {
            bottom: 1px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
        }

        #is-completed p {
            font-family: 'Quicksand';
            color: white;
        }

        #date-modified {
            width: 300px;
            height: 75px;
            border-radius: 5px;
            background-color: red;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px;
            position: relative;
        }

        #date-modified:hover {
            bottom: 1px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
        }

        #date-modified p {
            font-family: 'Quicksand';
            color: white;
        }

        #form-add-task {
            width: 745px;
            height: 75px;
            border-radius: 5px;
            background-color: red;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px;
            position: relative;
        }

        #edit {
            cursor: pointer;
            width: 150px;
            height: 75px;
            border-radius: 5px;
            background-color: yellow;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px;
            position: relative;
        }

        #edit:hover {
            bottom: 1px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
        }

        #edit p {
            font-family: 'Quicksand';
            color: black;
        }

        #delete {
            cursor: pointer;
            width: 150px;
            height: 75px;
            border-radius: 5px;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px;
            position: relative;
        }

        #delete:hover {
            bottom: 1px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
        }

        #delete p {
            font-family: 'Quicksand';
            color: white;
        }
    </style>
`;

class Task extends BaseComponent {
    constructor() {
        // vi noi dung cua 1 task do thuoc tinh quyet dinh. ma thuoc tinh duoc truyen tu ngoai
        // => props
        super();
        this.props = {
            "content": '',
            "is-completed": false,
            "date-modified": null,
            "is-editing": false
        };
    }

    static get observedAttributes() {
        return ['content', 'is-completed', 'date-modified', 'is-editing'];
    }

    render() {
        let contentEditable = (this.props["is-editing"] != 'false') 
            ? `<textarea id="edit-content">${this.props.content}</textarea>`
            : this.props.content;
        // value="${this.props["date-modified"]}"
        let dateEditable = (this.props["is-editing"] != 'false') 
            ? `<input type="datetime-local" id="edit-date-modified" value="${this.props["date-modified"]}">`
            : this.props["date-modified"];

        let btnEdit = (this.props["is-editing"] != 'false')
            ? `<div id="btn-save">Save</div>`
            : `<div id="btn-edit">Edit</div>`;

        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div id="task">
                <div id="content">
                    <div>
                        ${contentEditable}
                    </div>
                </div>
                <div id="is-completed">
                    <div>
                        <p>${this.props["is-completed"]}</p>
                    </div>
                </div>
                <div id="date-modified">
                    <div>
                        ${dateEditable}
                    </div>
                </div>
                <div id="edit">
                    ${btnEdit}
                </div>
                <div id="delete">
                    <p>Delete</p>
                </div>
            </div>
        `;

        // this.$btnEdit = this._shadowRoot.getElementById('btn-edit');
        // this.$btnEdit.onclick = (event) => {
        //     let editTask = new CustomEvent('editTask', {
        //         bubbles: true,
        //         detail: {
        //             content: this.props['content']
        //         }
        //     });

        //     this.dispatchEvent(editTask);
        // }

        this.$delete = this._shadowRoot.getElementById('delete');
        this.$delete.onclick = (event) => {
            // Xoa tren giao dien
            // this.remove();
            // Xoa trong state cua list

            // dinh nghia va phat ra su kien deleteTask
            let deleteTask = new CustomEvent('delete-task', {
                bubbles: true,
                detail: {
                    content: this.props['content']
                }
            });

            this.dispatchEvent(deleteTask);
        }

        if (this.props["is-editing"] != 'false') {
            // Neu dang sua thi co nut save
            this.$btnSave = this._shadowRoot.getElementById('btn-save');
            this.$btnSave.onclick = (event) => {
                let saveTask = new CustomEvent('save-task', {
                    bubbles: true,
                    detail: {
                        oldContent: this.props.content,
                        newContent: this._shadowRoot.getElementById('edit-content').value
                    }
                });
                this.dispatchEvent(saveTask);
            }
        }
        else {
            this.$btnEdit = this._shadowRoot.getElementById('btn-edit');
            this.$btnEdit.onclick = (event) => {
                // Neu dang de binh thuong chi co nut edit
                let editTask = new CustomEvent('edit-task', {
                    bubbles: true,
                    detail: {
                        content: this.props['content']
                    }
                });
    
                this.dispatchEvent(editTask);
            }
        }
    }
}

window.customElements.define('task-container', Task);
// <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet"></link>
// <link rel="stylesheet" type="text/css" href="./css/task.css">

// khi bam vao delete cua 1 task -> phat ra 1 event goi la deleteTask
// event deleteTask duoc noi len List -> List co 1 listener de xu li event delete