// event:
// event - listener:
// emit event: phat ra su kien
// listener: ban chat la cac function dung de xu li khi event duoc phat ra
// 1 event co the co nhieu listeners
// event co tinh noi bot (bubble), khi phat event tu phan tu con thi event do se noi len phan tu cha


// bat su kien click chuot cho button
// document.getElementById('click-me').addEventListener('click', function(event) {
//     event.stopPropagation();
//     console.log('hello World');
// });

// document.getElementById('click-me').addEventListener('click', function(event) {
//     console.log('goodbye World');
// });

// document.getElementById('parent').addEventListener('click', function(event) {
//     console.log('parent clicked');
// });

// document.getElementById('grand-parent').addEventListener('click', function(event) {
//     console.log('grand parent clicked');
// });

// function clickMe() {
//     console.log('button clicked 1');
// }

// document.getElementById('click-me').onclick = function(event) {
//     console.log('button clicked 2')
// }


// built-in events: nhung events duoc dinh nghia san trong he thong: click, hover, keypress,...

// them listener de xu li event
document.getElementById('click-me').addEventListener('so', function(event) {
    // event.stopPropagation();
    console.log('so len button');
    console.log(event);
});

document.getElementById('parent').addEventListener('so', function(event) {
    console.log('so len parent');
    console.log(event.detail);
});

// cach tao custom event: tu dinh nghia
let myEvent = new CustomEvent('so', {
    bubbles: false,
    detail: {
        message: 'so su kien'
    }
});

// emit event
// phat su kien myEvent o phan tu button
document.getElementById('click-me').dispatchEvent(myEvent);

