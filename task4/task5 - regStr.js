const regStr = (str) => {
  return str.replace(/(\w+), (\w+)/gi, '$2 $1');
};

const names = 'Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo';
regStr(names);
