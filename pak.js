function pak(s) {
  return s.trim() === "" ? "" : s.split(" ").join(" pak ");
}
console.log(pak("Man I need a taxi up to Ubud"));
console.log(pak("What time are we climbing up the volcano?"));
console.log(pak("Take me to Semynak!"));
