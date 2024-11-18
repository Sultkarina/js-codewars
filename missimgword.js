function missingWord(nums, str) {
  let cleanedComment = str.replace(/\s/g, "");
  nums.sort((a, b) => a - b);
  let word = "";
  for (let i = 0; i < nums.length; i++) {
    let index = nums[i];

    if (index < 0 || index >= cleanedComment.length) {
      return "No mission today";
    }

    word += cleanedComment[index].toLowerCase();
  }

  return word;
}

console.log(missingWord([5, 0, 3], "I love you"));
console.log(
  missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")
);
console.log(missingWord([12, 4, 6], "Good Morning"));
