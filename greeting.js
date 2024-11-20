function greetDevelopers(list) {
    return list.map(dev => {
      dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
      return dev;  
    });
  }
  
  var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  
  var list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
  ];
  
  console.log(greetDevelopers(list1));
  console.log(greetDevelopers(list2));