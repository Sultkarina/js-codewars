function conjugate(verb) {
  let result = {};

  if (verb.slice(verb.length - 2, verb.length) === "er") {
    result = {
      [verb]: [
        verb.slice(0, verb.length - 2) + "o",
        verb.slice(0, verb.length - 2) + "es",
        verb.slice(0, verb.length - 2) + "e",
        verb.slice(0, verb.length - 2) + "emos",
        verb.slice(0, verb.length - 2) + "éis",
        verb.slice(0, verb.length - 2) + "en",
      ],
    };
  } else if (verb.slice(verb.length - 2, verb.length) === "ir") {
    result = {
      [verb]: [
        verb.slice(0, verb.length - 2) + "o",
        verb.slice(0, verb.length - 2) + "es",
        verb.slice(0, verb.length - 2) + "e",
        verb.slice(0, verb.length - 2) + "imos",
        verb.slice(0, verb.length - 2) + "ís",
        verb.slice(0, verb.length - 2) + "en",
      ],
    };
  } else if (verb.slice(verb.length - 2, verb.length) === "ar") {
    result = {
      [verb]: [
        verb.slice(0, verb.length - 2) + "o",
        verb.slice(0, verb.length - 2) + "as",
        verb.slice(0, verb.length - 2) + "a",
        verb.slice(0, verb.length - 2) + "amos",
        verb.slice(0, verb.length - 2) + "áis",
        verb.slice(0, verb.length - 2) + "an",
      ],
    };
  }

  return result;
}

console.log(conjugate("comer"));
console.log(conjugate("vivir"));
console.log(conjugate("caminar"));
