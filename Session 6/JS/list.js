import {BaseComponent} from "./basecomponent.js";

class List extends BaseComponent {
    constructor() {
        super();

        this.state = {
            tasks: [
                {"content": "Di hoc", "is-completed": true, "date-modified": "2020/09/07"},
                {"content": "Di choi voi gau", "is-completed": false, "date-modified": "2020/09/07"},
                {"content": "Di an quan", "is-completed": true, "date-modified": "2020/09/07"}
            ]
        };
    }

    render() {
        let html = '';
        for (let task of this.state.tasks) {
            html += `<task-container content="${task.content}" is-completed="${task["is-completed"]}" date-modified="${task["date-modified"]}"></task-container>`
        }
        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./css/task.css">
        <form id="form-add-task">
            <textarea name="content" placeholder="Enter content here"></textarea>
            <input type="datetime-local" name="dateModified" placeholder="Date modified">
            <button>Add task</button>
        </form>
        <div class="list">
            ${html}
        </div>
        `;

        this.$formAddTask = this._shadowRoot.getElementById('form-add-task');
        this.$formAddTask.onsubmit = (event) => {
            event.preventDefault();
            let newTask = {
                "content": this.$formAddTask.content.value,
                "is-completed": false,
                "date-modified": this.$formAddTask.dateModified.value
            }

            this.state.tasks.push(newTask);
            // this.render();
            // this.componentDidUpdate();

            // this.setState({
            //     tasks: [
            //         ...this.state.tasks,
            //         newTask
            //     ]
            // });
            let $task = document.createElement('task-container');
            $task.setAttribute('content', newTask.content);
            $task.setAttribute('is-completed', newTask["is-completed"]);
            $task.setAttribute('date-modified', newTask["date-modified"]);

            // append task-container vao list
            this.$list = this._shadowRoot.querySelector('.list');
            this.$list.appendChild($task);
        }
    }
}

window.customElements.define('list-container', List);

// state la nhung du lieu ma ban than component co san (ko truyen tu ngoai vao)
// props la nhung du lieu ma duoc truyen tu ngoai vao (read ONLY)

// state va props la nhung thu quyet dinh noi dung nam ben trong component

/*
    Arrow Function
    ???
*/

// Phan biet arrow function va function