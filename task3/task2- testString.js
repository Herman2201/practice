const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const isClosingSymbol = (symbol) => closingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

const testString = (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else if (isClosingSymbol(symbol)) {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
