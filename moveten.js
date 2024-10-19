function moveTen(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return s.split("").map(char => {
            const index = alphabet.indexOf(char);
            const newIndex = (index + 10) % 26;
            return alphabet[newIndex];
    }).join("");
}
console.log (moveTen("testcase"));
console.log (moveTen("codewars"));
console.log (moveTen("exampletesthere"));

