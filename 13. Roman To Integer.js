const romanToInt = function (s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let result = 0
    let i = s.length - 1
    let int = 0
    while (i >= 0) {
        let ch = s[i]
        let curInt = map[ch]
        if (curInt >= int) result += curInt
        else result -= curInt
        int = curInt
        index--
    }
    return result
}