function bald(x){
    const hairCount = (x.match(/\//g)|| []).length; 
    const clean = x.replace(/\//g, '-');
    let message;
    if (hairCount === 0) {
        message = "Clean!";
    } else if (hairCount === 1) {
        message = "Unicorn!";
    } else if (hairCount === 2) {
        message = "Homer!";
    } else if (hairCount >= 3 && hairCount <= 5) {
        message = "Careless!";
    } else {
        message = "Hobo!";
    }
    return [clean, message];
}

console.log(bald('/---------'));
console.log(bald('/-----/-'));
console.log(bald('--/--/---/-/---'));