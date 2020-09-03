// // dinh nghia cho DOM
// class MemeContainer extends HTMLElement {
//     constructor() {
//         super();

//         this._shadowRoot = this.attachShadow({mode: 'open'});
        
//         this._shadowRoot.innerHTML = `
            
        
//         <div id="meme-container">
//             <img src="" alt="img">
//             <div id="info">
//                 <h1 id="name"></h1>
//                 <p id="date-modified"></p>
//             </div>
//         </div>
//         `;

//         this.$image = this.shadowRoot.querySelector('img');
//         this.$name = this.shadowRoot.querySelector('#name');
//         this.$datemodified = this.shadowRoot.querySelector('#date-modified');
//     }

//     static get observedAttributes() {
//         return ['image', 'name', 'datemodified'];
//     }

//     /**
//      * Duoc goi 1 lan duy nhat
//      * khi component duoc sinh ra tren trang web
//      */
//     connectedCallback() {
//         console.log('Co 1 em be component vua ra doi');
//     }

//     /**
//      * Duoc goi moi khi
//      * khi attribute cua component thay doi
//      * @param string name: ten thuoc tinh bi thay doi
//      * @param string oldValue: gia tri cu cua thuoc tinh
//      * @param string newValue: gia tri moi cua thuoc tinh
//      */
//     attributeChangedCallback(name, oldValue, newValue) {
//         if (name === 'name') {
//             this._shadowRoot.querySelector('#name').innerHTML = newValue;
//         }
//         else if (name === 'image') {
//             this._shadowRoot.querySelector('img').setAttribute('src', newValue)
//         }
//         else if (name === 'date-modified') {
//             this._shadowRoot.querySelector('#date-modified').innerHTML = newValue;
//         }
//     }

//     /**
//      * Duoc goi 1 lan duy nhat
//      * khi component bi xoa di
//      */
//     disconnectedCallback() {
//         console.log('Co 1 cu gia component vua ra di');
//     }
// }

// // dinh nghia cho the meme-container
// window.customElements.define('meme-container', MemeContainer);

// Ly thuyet: Vong doi cua 1 component (component lifecycle)
/*

3 giai doan:
- sinh ra:
- lon len:
- mat di:

*/
// Quy uoc
/*

props: nhung thu truyen tu ngoai vao trong component
state: nhung thu co san trong component, khong duoc truyen tu ngoai vao

*/

// Note:
// 
// Dong bo: Thuc hien cong viec mot cach tuan tu
// 
// Bat dong bo: Thuc hien cong viec mot cach song song
// + Uu diem: Thuc hien cong viec doc lap, nhanh chong
// + Nhuoc diem: Phu thuoc nhau, bi sai luong
//
// Xu li bat dong bo


import "./task.js";

// Homework
// Tim hieu co bao nhieu phuong thuc xu li bat dong bo