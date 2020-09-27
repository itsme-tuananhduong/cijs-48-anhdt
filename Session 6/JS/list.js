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
            width: 150px;
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

class List extends BaseComponent {
    constructor() {
        super();

        this.state = {
            tasks: [
                {"is-editing": "false", "content": "Di hoc", "is-completed": true, "date-modified": "2020/09/07"},
                {"is-editing": "false", "content": "Di choi voi gau", "is-completed": false, "date-modified": "2020/09/07"},
                {"is-editing": "false", "content": "Di an quan", "is-completed": true, "date-modified": "2020/09/07"}
            ]
        };
    }
    // ctrl shift alt down
    render() {
        let html = '';
        for (let task of this.state.tasks) {
            html += /*html*/ `<task-container is-editing="${task["is-editing"]}" content="${task.content}" is-completed="${task["is-completed"]}" date-modified="${task["date-modified"]}"></task-container>`
        }
        this._shadowRoot.innerHTML = /*html*/ `
        ${style}
        <form id="form-add-task">
            <textarea name="content" placeholder="Enter content here"></textarea>
            <input type="datetime-local" name="dateModified" placeholder="Date modified">
            <button>Add task</button>
        </form>
        <div class="list">
            ${html}
        </div>
        `;

        this.$list = this._shadowRoot.querySelector('.list');
        this.$list.addEventListener('delete-task', (event) => {
            this.deleteTask(event.detail.content);
        });

        this.$list.addEventListener('edit-task', (event) => {
            this.editTask(event.detail.content);
        });

        this.$list.addEventListener('save-task', (event) => {
            this.saveTask(event.detail.oldContent, event.detail.newContent);
        });

        this.$formAddTask = this._shadowRoot.getElementById('form-add-task');
        this.$formAddTask.onsubmit = (event) => {
            event.preventDefault();
            let newTask = {
                "content": this.$formAddTask.content.value,
                "is-completed": false,
                "date-modified": this.$formAddTask.dateModified.value
            }

            // this.state.tasks.push(newTask);
            // this.render();
            // this.componentDidUpdate();

            this.setState({
                tasks: [
                    ...this.state.tasks,
                    newTask
                ]
            });

            // let $task = document.createElement('task-container');
            // $task.setAttribute('content', newTask.content);
            // $task.setAttribute('is-completed', newTask["is-completed"]);
            // $task.setAttribute('date-modified', newTask["date-modified"]);

            // // append task-container vao list
            // this.$list = this._shadowRoot.querySelector('.list');
            // this.$list.appendChild($task);
        }
    }

    deleteTask(taskContent) {
        // loc nhung task co content khong phai la task content truyen vao
        // let newTasks = this.state.tasks.filter(function(task) {
        //     return task.content != taskContent;
        // });
        // dat lai task cua list
        // this.state.tasks = newTasks;
        // this.setState(this.state);
        this.setState({
            tasks: this.state.tasks.filter(function(task) {
                return task.content != taskContent;
            })
        });
    }

    editTask(taskContent) {
        this.setState({
            tasks: this.state.tasks.map(function(task) {
                if(task.content == taskContent) task["is-editing"] = 'true';
                return task;
            })
        });
    }

    saveTask(oldContent, newContent) {
        // tim task co noi dung la oldContent
        let foundTask = this.state.tasks.find(function(task) {
            return task.content == oldContent;
        });
        // gan lai noi dung cho task vua tim duoc
        foundTask.content = newContent;
        // doi trang thai dang sua --> trang thai binh thuong
        foundTask["is-editing"] = "false";

        this.setState(this.state);
        
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

// <link rel="stylesheet" type="text/css" href="./css/task.css">

// event: tao 1 custom event