import {BaseComponent} from "../BaseComponent.js";
import {validateEmail, md5, getDataFromDoc, getDataFromDocs, saveCurrentUser} from "../utils.js";

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

class LoginScreen extends BaseComponent {
    constructor() {
        super();
        this.state = {
            errors: {
                email: '',
                password: ''
            },
            data: {
                email: '',
                password: ''
            }
        }
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <section class="login-screen">
                <form class="form-login">
                    <input-wrapper class="email" label="Email" type="email" error="${this.state.errors.email}" value="${this.state.data.email}"></input-wrapper>
                    <input-wrapper class="password" label="Password" type="password" error="${this.state.errors.password}" value="${this.state.data.password}"></input-wrapper>
                    <div class="btn">
                        <button class="btn-login">Login</button>
                    </div>
                    <a href="#!/register">Not have an account? Create</a>
                </form>
            </section>
        `;

        this.$formLogin = this._shadowRoot.querySelector(".form-login");
        this.$formLogin.onsubmit = async (event) => {
            event.preventDefault();
            // lay du lieu tu cac input-wrapper
            let email = this._shadowRoot.querySelector('.email').value;
            let password = this._shadowRoot.querySelector('.password').value;
            // kiem tra du lieu nhap vao, neu co loi thi show ra
            let isPassed = true;

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
            
            // kiem tra du lieu nguoi dung
            if (isPassed) {
                let response = await firebase
                .firestore()
                .collection('users')
                .where('email', '==', email)
                .where('password', '==', md5(password)) // co the loc qua .where()
                .get();
                
                if (response.empty) {
                    alert('Email or Password is not correct!');
                }
                else {
                    // alert('Login successfully!');
                    let currentUser = getDataFromDocs(response.docs)[0];
                    // luu nguoi dung hien tai
                    saveCurrentUser(currentUser);
                    // chuyen sang trang index
                    router.navigate('/index');
                }
            }
            this.setState(this.state);
        }
    }
}

window.customElements.define('login-screen', LoginScreen);