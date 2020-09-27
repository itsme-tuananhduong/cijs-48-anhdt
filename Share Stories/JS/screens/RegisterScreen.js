import {BaseComponent} from "../BaseComponent.js";
import {validateEmail, md5} from "../utils.js";

const style = /*html*/ `
    <style>
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        button {
            width: 100px;
            height: 35px;
            margin: 10px;
        }

        section {
            background-color: #f2f2f2;
            width: 50%;
            border-radius: 15px;
        }
    </style>
`;

class RegisterScreen extends BaseComponent {
    constructor() {
        super();
        this.state = {
            errors: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            data: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <section class="register-screen">
                <form class="form-register">
                    <input-wrapper class="name" label="Name" type="text" error="${this.state.errors.name}" value="${this.state.data.name}"></input-wrapper>
                    <input-wrapper class="email" label="Email" type="email" error="${this.state.errors.email}" value="${this.state.data.email}"></input-wrapper>
                    <input-wrapper class="password" label="Password" type="password" error="${this.state.errors.password}" value="${this.state.data.password}"></input-wrapper>
                    <input-wrapper class="confirm-password" label="Confirm Password" type="password" error="${this.state.errors.confirmPassword}"></input-wrapper>
                    <div class="btn">
                        <button class="btn-register">Register</button>
                    </div>
                    <a href="#!/login">Already have an account? Login</a>
                </form>
            </section>
        `;

        this.$formRegister = this._shadowRoot.querySelector(".form-register");
        this.$formRegister.onsubmit = async (event) => {
            event.preventDefault();
            // lay du lieu tu cac input-wrapper
            let name = this._shadowRoot.querySelector('.name').value;
            let email = this._shadowRoot.querySelector('.email').value;
            let password = this._shadowRoot.querySelector('.password').value;
            let confirmPassword = this._shadowRoot.querySelector('.confirm-password').value;
            // kiem tra du lieu nhap vao, neu co loi thi show ra
            let isPassed = true;

            if (name == '') {
                isPassed = false;
                this.state.errors.name = 'Invalid!';
            }
            else {
                this.state.errors.name = '';
                this.state.data.name = name;

            }

            if (email == '' || !validateEmail(email)) {
                isPassed = false;
                this.state.errors.email = 'Invalid!';
            }
            else {
                this.state.errors.email = '';
                this.state.data.email = email;
            }
             
            if (password == '') {
                isPassed = false;
                this.state.errors.password = 'Invalid!';
            }
            else {
                this.state.errors.password = '';
                this.state.data.password = password;
            }

            if (confirmPassword == '' || confirmPassword != password) {
                isPassed = false;
                this.state.errors.confirmPassword = 'Invalid!';
            }
            else {
                this.state.errors.confirmPassword = '';
            }
            // luu du lieu vao firestore
            

            if (isPassed) {
                this.state.data.password = md5(this.state.data.password);
                // check email trung
                let response = await firebase
                .firestore()
                .collection('users')
                .where('email', '==', email)
                .get();
                // them
                if (response.empty) {
                    await firebase.firestore().collection('users').add(this.state.data);
                    alert('Sign up successfully!');
                } else {
                    alert('Your email has already been used!');
                }
            }
            this.setState(this.state);
        }
    }
}

window.customElements.define('register-screen', RegisterScreen);