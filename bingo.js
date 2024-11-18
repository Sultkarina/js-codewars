function bingo(ticket, win){
    let miniWins = 0;
  
    for (let i = 0; i < ticket.length; i++) {
      let [str, num] = ticket[i]; 
      
      for (let j = 0; j < str.length; j++) {
        if (str.charCodeAt(j) === num) {
          miniWins++;
          break;
        }
      }
    }
  
   
    if (miniWins >= win) {
      return "Winner!";
    } else {
      return "Loser!";
    }
  }

    console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
    console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
    console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));