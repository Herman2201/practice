const substrCount = (input, needle, offset, length) => {
  let newStr = input.substring(offset, length);
  let index = newStr.indexOf(needle);
  let count = 0;
  for (count; index !== -1; count += 1) {
    newStr = newStr.substring(index + 1);
    index = newStr.indexOf(needle);
  }
  return count;
}
