let test = [
    {
        name: 'Arsenal',
        points: 99,
        GD: 45
    },
    {
        name: 'Chelsea',
        points: 75,
        GD: 39
    },
    {
        name: 'Manchester United',
        points: 60,
        GD: 29
    },
    {
        name: 'Liverpool',
        points: 88,
        GD: 39
    },
]

let sort = (testcase) => {
    for (let i = 0; i < testcase.length; i++) {
        testcase[i]['position'] = i + 1;
    }
    for (let i = 0; i < testcase.length - 1; i++) {
        for (let j = i + 1; j < testcase.length; j++) {
            if (testcase[i].points < testcase[j].points) {
                [testcase[i], testcase[j]] = [testcase[j], testcase[i]];
            }
            else if (testcase[i].points == testcase[j].points) {
                if (testcase[i].GD > testcase[j].GD) {
                    [testcase[i], testcase[j]] = [testcase[j], testcase[i]];
                }
                else if (testcase[i].GD == testcase[j].GD) {
                    if (testcase[i].name > testcase[j].name) {
                        [testcase[i], testcase[j]] = [testcase[j], testcase[i]];
                    }
                }
            }
        }
    }
    return testcase;
}

sort(test);
console.log(test);