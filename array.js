function array(string) {
 
    let parts = string.split(",");
    
    if (parts.length <= 2) {
      return null;
    }
   
    return parts.slice(1, -1).join(" ");
  }

  console.log('');
  console.log('1');
  console.log('A1,B2');
  console.log('1,2,3');
  console.log('1,2,3,4');
  console.log('A1,B2,C3,D4,E5');
  console.log('A,1,23,456,78,9,Z');