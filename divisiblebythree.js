function divisibleByThree(str){
    return str.split("").reduce((sum, current) => sum + Number(current), 0) % 3==0;
    }

    console.log (divisibleByThree('123'));
    console.log (divisibleByThree('19254'));
    console.log (divisibleByThree('88'));