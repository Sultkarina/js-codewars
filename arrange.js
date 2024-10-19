function convertToGrams(weight) {
  const value = parseFloat(weight);
  if (weight.endsWith("T")) {
    return value * 1000000;
  }
  if (weight.endsWith("KG")) {
    return value * 1000;
  }
  if (weight.endsWith("G")) {
    return value;
  }
}

function arrange(arr) {
  return arr.sort((a, b) => convertToGrams(a) - convertToGrams(b));
}

console.log (arrange(["200G","300G","150G","100KG"]));
console.log (arrange(["400G","100T","150KG","100G"]));
console.log (arrange(["4T","300G","450G","900KG"]));
console.log (arrange(["400T","100T","1T","100G"]));
console.log (arrange(["1G","2KG","3T","100KG"]));
console.log (arrange(["100KG","100G","150T","150KG"]));