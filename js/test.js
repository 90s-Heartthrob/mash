const testArray = ['M', 'A', 'S', 'H', 'C1', 'C2', 'C3', 'L1', 'L2', 'L3', 'V1', 'V2', 'V3', 'J1', 'J2', 'J3'];

function cross () {
    const num = 5;
    let remainder = testArray.length % num;
    // const rounds = 16 / num;
    let i = 1;
    while (testArray.length > 1) {
        const index = i * num - i;
        if (index < testArray.length) {
            testArray.splice(index , 1);
            i++;
            continue;
        } else {
            let i = 1;
            while (testArray.length > 1){
                const index = i * num - i - remainder;
                testArray.splice(index , 1);
                i++;
            };
        }
    };
    console.log(testArray);
};