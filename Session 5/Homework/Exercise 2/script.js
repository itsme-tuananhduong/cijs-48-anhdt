let consonant = ['b', 'ch', 'c', 'd', 'đ', 
                'gh', 'gi', 'g', 'h', 'kh',
                'k', 'l', 'm', 'ngh', 'ng', 
                'nh', 'n', 'ph', 'qu', 'r', 
                's', 'th', 'tr', 't', 'v', 
                'x']

function consFinding(word) {
    for (let x of consonant) {
        if (word.startsWith(x)) return x;
    }
    return '';
}

function nameShortening(userName) {
    let array = userName.toLowerCase().trim().split(' ');
    let result = consFinding(array[0]) +
    array[array.length - 1].slice(consFinding(array[array.length - 1]).length);
    return result.charAt(0).toUpperCase() + result.slice(1);
}

function convert() {
    let userName = document.getElementById('input').value;
    document.getElementById('result').innerText = nameShortening(userName);
}