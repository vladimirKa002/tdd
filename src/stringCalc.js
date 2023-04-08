const calc = (str) => {
    var breakpoint = ""
    if (str.startsWith("//")) {
        const data = str.split("\n", 2)
        str = data[1]
        breakpoint = data[0].substring(2)
    }
    else breakpoint = /,|\n/
    const splitted = str.split(breakpoint)
    if (splitted == "") return 0
    var result = 0
    splitted.forEach(elem => {
        const num = parseInt(elem)
        if (num > 1000) return;
        if (num < 0) throw 'negatives not allowed'
        result += num
    });
    return result
};

export default calc;
