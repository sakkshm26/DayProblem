
// SOLUTION
const D = { '2020-01-01': 4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2 }

function solution(D) {
    let isPresent = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 0: false };
    const days = { 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat', 0: 'Sun' }
    let ans = { 'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0 };

    for (const key in D) {
        let day = new Date(key).getDay();
        isPresent[day] = true;
        ans[days[day]] += D[key];
    }

    for (const key in isPresent) {
        if (isPresent[key] === false) {
            if (isPresent[parseInt(key) + 1] === true) {
                // let day = days[key];
                ans[days[key]] = Math.floor((ans[days[parseInt(key) - 1]] + ans[days[parseInt(key) + 1]]) / 2);
            }
            else {
                ans[days[key]] = ans[days[key - 1]] + 1;
            }
        }
    }

    return ans;
}

const ANS = solution(D);
console.log(ANS);

exports.generateNumber = (D) => {
    const days = { 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat', 0: 'Sun' }
    let ans = { 'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0 };
    let isPresent = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 0: false };

    function solution(D) {
        for (const key in D) {
            let day = new Date(key).getDay();
            isPresent[day] = true;
            ans[days[day]] += D[key];
        }

        for (const key in isPresent) {
            if (isPresent[key] === false) {
                if (isPresent[parseInt(key) + 1] === true) {
                    // let day = days[key];
                    ans[days[key]] = Math.floor((ans[days[parseInt(key) - 1]] + ans[days[parseInt(key) + 1]]) / 2);
                }
                else {
                    ans[days[key]] = ans[days[key - 1]] + 1;
                }
            }
        }

        return ans;
    }
    const ANS = solution(D);
    return Object.values(ANS);
}