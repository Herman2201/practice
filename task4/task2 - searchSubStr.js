const searchSubStr = (str, search) => {
  let startIndex = str.indexOf(search);
  let lustIndex = str.indexOf(search);

  while (true) {
    if (str[startIndex - 1] !== ' ') {
      startIndex -= 1;
    }
    if (str[lustIndex + 1] !== ' ') {
      lustIndex += 1;
    }
    if (str[startIndex - 1] == ' ' && str[lustIndex + 1] === ' ') {
      break;
    }
  }
  return str.substring(startIndex, lustIndex + 1);
};
