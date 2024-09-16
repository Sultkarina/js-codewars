function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits.length === 0) {
    return [];
  }
  return bagOfFruits.map((fruit) =>
    fruit.startsWith("rotten")
      ? fruit.slice(6).toLowerCase()
      : fruit.toLowerCase()
  );
}
console.log(
  removeRotten(["rottenapple", "banana", "kiwi", "melone", "orange"])
);
console.log(removeRotten([]));
