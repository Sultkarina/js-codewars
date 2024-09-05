function wordSearch(query, seq) {
  const lowerQuery = query.toLowerCase();
  const lowerSeq = seq.map((item) => item.toLowerCase());

  const filter = seq.filter((item) => item.toLowerCase().includes(lowerQuery));

  if (filter.length === 0) {
    return ["Empty"];
  } else return filter;

}
console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]))
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]))
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]))
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]));