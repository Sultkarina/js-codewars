function switcher(x){
    const alphabet = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 
'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a','!', '?',' '];
      return x.map(num=>alphabet[Number(num)-1]).join('');
    }
    console.log (switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
    console.log (switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])); 
    console.log (switcher(['4', '24'])); 