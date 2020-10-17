function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let getData = async () => {
    let response = await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&fbclid=IwAR2sAE2pTeIFDcRb0CTe_aQ5Ad8FZuPibNoT8fTpSaANAPdDEDIIddy_2ok');
    let temp = await response.json();
    let data = temp.results;

    let doc = document.getElementById('question-container');
    for (let i = 0; i < data.length; i++) {
        let answers = [];
        answers.push(data[i]['correct_answer']);
        data[i]['incorrect_answers'].forEach((answer) => {
            answers.push(answer);
        });
        shuffleArray(answers);

        doc.innerHTML += `
            <div class="question">
                <p>${i + 1}, ${data[i].question}</p>
                <div class="answer">
                    <form id="${i}">
                        <input type="radio" name="q${i}" value="${answers[0]}">
                        <label id="lab-${i}-0" for="q${i}">${answers[0]}</label><br>
                        <input type="radio" name="q${i}" value="${answers[1]}">
                        <label id="lab-${i}-1" for="q${i}">${answers[1]}</label><br>
                        <input type="radio" name="q${i}" value="${answers[2]}">
                        <label id="lab-${i}-2" for="q${i}">${answers[2]}</label><br>
                        <input type="radio" name="q${i}" value="${answers[3]}">
                        <label id="lab-${i}-3" for="q${i}">${answers[3]}</label><br>
                    </form>
                </div>
            </div>
        `;
    }

    let button = document.getElementById('complete');
    button.onclick = () => {
        let score = 0;
        for (let i = 0; i < data.length; i++) {
            let x = document.getElementById(`${i}`);
            for (let j = 0; j < 4; j++) {
                if (x[j].checked) {
                    if (x[j].value == data[i]['correct_answer']) {
                        score++;
                        let label = document.getElementById(`lab-${i}-${j}`);
                        label.style = 'color: black';
                    } else {
                        let label = document.getElementById(`lab-${i}-${j}`);
                        label.style = 'color: red';
                    }
                }
            }
        }
        let result = document.getElementById('score');
        result.innerHTML = `Your score: ${score}`;
    }
}

getData();

let reload = document.getElementById('reload');
reload.onclick = () => {
    location.reload();
}