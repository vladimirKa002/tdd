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
    for (let i = 0; i < splitted.length; i++) {
        result += parseInt(splitted[i])
    }
    return result
};

export default calc;
