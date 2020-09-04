// Firebase la 1 dich vu cua google --> Xu li phan back-end

// CRUD

// Create
function createData(obj) {
    // firebase.firestore().collection('users').add({
    //     name: 'demo 4',
    //     age: 40,
    //     favourites: ['fav 1', 'fav 2']
    // });
    
    // firebase.firestore().collection('users').add(object);

    firebase.firestore().collection('class').add(obj);
}
createData();

// Read
async function readData() {
    // // doc nhieu ban ghi
    // let result = await firebase.firestore().collection('users').get();
    
    // for (let doc of result.docs) {
    //     console.log(doc.data());
    // }

    // // doc 1 ban ghi theo ID
    // let doc = await firebase.firestore().collection('users').doc('Px0LKJ2nE8pdUVfI2v4r').get();
    // console.log(doc.data());

    // // doc cac ban ghi thoa man dieu kien
    // let result_1 = await firebase.firestore().collection('users').where('favourites', 'array-contains', 'fav 1').get();
    // for (let doc of result_1.docs) {
    //     console.log(doc.data());
    // }
    // let result_2 = await firebase.firestore().collection('users').where('name', '==', 'demo name 2').get();
    // for (let doc of result_2.docs) {
    //     console.log(doc.data());
    // }
    // let result_3 = await firebase.firestore().collection('users').where('favourites', 'array-contains', 'fav 1').where('name', '==', 'demo name 2').get();
    // for (let doc of result_3.docs) {
    //     console.log(doc.data());
    // }

    let result = await firebase.firestore().collection('class').where('lecturer', '==', 'demo 2').get();
    for (let doc of result.docs) {
        console.log(doc.data());
    }
}

// Update
async function updateData() {
    // // update 1 ban ghi
    // let result = await firebase.firestore().collection('users').doc('iUwEdt1GTdfeSt3INQ5K').update({
    //     age: 101,
    //     favourites: firebase.firestore.FieldValue.arrayUnion('fav 3'),
    //     favourites: [1, 2, 3]
    // })

    // // update nhieu ban ghi
    // let result = await firebase.firestore().collection('users').where('age', '>=', 18).get();
    // for (let doc of result.docs) {
    //     await firebase.firestore().collection('users').doc(doc.id).update({
    //         name: 'name is updated'
    //     });
    // }

    let result = await firebase.firestore().collection('class').get();
    for (let doc of result.docs) {
        await firebase.firestore().collection('class').doc(doc.id).update({
            lecturer: 'Do Chinh'
        })
    }
}

// Delete
async function deleteData() {
    // // xoa 1 ban ghi
    // await firebase.firestore().collection('users').doc('iUwEdt1GTdfeSt3INQ5K').delete();

    // // xoa nhieu ban ghi
    // let result = await firebase.firestore().collection('users').get();
    // for (let doc of result.docs) {
    //     await firebase.firestore().collection('users').doc(doc.id).delete();
    // }

    let result = await firebase.firestore().collection('class').where('students', 'array-contains', 'student 1').get();
    for (let doc of result.docs) {
        await firebase.firestore().collection('class').doc(doc.id).delete();
    }
}

/*
Xu li bat dong bo: xay ra khi fetch du lieu, setTimeout, setInterval

callback: truyen 1 ham vao cho 1 ham khac
callstack ??

promise: resolve, reject, catch

async/await
*/

obj = {
    classID: 1111,
    className: "class 1",
    lecturer: "demo 1",
    students: ["student 1", "student 2"]
}

createData(obj);

// React Component LifeCycle