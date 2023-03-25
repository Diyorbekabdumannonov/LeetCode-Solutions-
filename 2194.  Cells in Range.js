var cellsInRange = function (s) {
    let [ch1, num1, ch2, num2] = s.split("");
    ch1 = ch1.charCodeAt();
    ch2 = ch2.charCodeAt();

    let ans = [];
    for (let ch = ch1; ch <= ch2; ch++)
        for (let num = num1; num <= num2; num++) {
            ans.push(String.fromCharCode(ch) + "" + num);
        }
    return ans;
};