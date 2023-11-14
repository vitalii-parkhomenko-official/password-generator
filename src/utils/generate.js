const sets = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!\"#$%&'()*+,-.",
};

function generateString(length, characters) {
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    result += characters[randomIndex];
  }

  return result;
}

function generatePassword(length, options) {
  const parts = Object.keys(options).filter(key => Boolean(options[key]));
  const nextPart = Math.floor(length / parts.length);
  const lastPart = (length % parts.length) + nextPart;
  const lastIndex = parts.length - 1;
  const str = parts.reduce((characters, key, index) => {
    return index === lastIndex
      ? characters + generateString(lastPart, sets[key])
      : characters + generateString(nextPart, sets[key]);
  }, "");

  return shuffleString(str);
}

export default generatePassword;

function shuffleString(str) {
  let index = -1;
  const lastIndex = str.length - 1;
  const result = str.split("");

  while (++index < str.length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];

    result[rand] = result[index];
    result[index] = value;
  }

  return result.join("");
}
