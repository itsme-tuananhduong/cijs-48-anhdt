function createData(obj) {
    firebase.firestore().collection('users').add(obj);
}

async function readData() {
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        console.log(doc.data());
    }
}

async function updateData() {
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        await firebase.firestore().collection('users').doc(doc.id).update({
            phoneNumber: numberUpdater(doc.data().phoneNumber)
        });
    }
}

// Cho em hỏi làm sao để tránh lỗi do việc JS tự động convert số có chữ số 0 ở đầu thành hệ cơ số khác ạ ?

async function deleteData() {
    let dictionary = {};
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        if (typeof(dictionary[`${doc.data().lastName}`]) == 'number') dictionary[`${doc.data().lastName}`]++;
        else {
            dictionary[`${doc.data().lastName}`] = 1;
        }
    }
    for (let doc of result.docs) {
        if (dictionary[doc.data().lastName] > 1) {
            
            await firebase.firestore().collection('users').doc(doc.id).delete();
        }
    }
}

function numberUpdater(number) {
    let num = String(number);
    if (num.length <= 1) {
        num = '84' + num;
    }
    else {
        num = '84' + num.slice(2);
    }
    return Number(num);
}

function addDocs() {
    let obj = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phoneNumber: Number(document.getElementById('phone-number').value)
    }; 
    
    if (obj.firstName == '' ||
    obj.lastName == '' ||
    obj.email == '' ||
    obj.phoneNumber == '') {
        Swal.fire({
            icon: 'error',
            title: 'Hmm...',
            text: "Something's missing..."
          })
    }
    else {
        if (document.getElementById('check').checked == true) {
            createData(obj);
            // readData();
            // updateData();
            // deleteData();
            Swal.fire(
                'Done!',
                "You've registered",
                'success'
              )
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Not Checked!',
                tedoct: 'You sure???'
              })
        }
    }
}
