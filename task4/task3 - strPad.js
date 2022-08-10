const strPad = (
  input,
  fullLen = input.length,
  fillStr = '*',
  fillType = 'FILL_RIGHT'
) => {
  switch (fillType) {
    case 'FILL_RIGHT': {
      let fillRight = '';
      let iterSumbol = 0;
      for (let i = 0; i < fullLen - input.length; i += 1) {
        if (!fillStr[iterSumbol]) {
          iterSumbol = 0;
        }
        fillRight += fillStr[iterSumbol];
        iterSumbol += 1;
      }
      return input + fillRight;
    }
    case 'FILL_LEFT': {
      let fillLeft = '';
      let iterSumbol = 0;
      for (let i = 0; i < fullLen - input.length; i += 1) {
        if (!fillStr[iterSumbol]) {
          iterSumbol = 0;
        }
        fillLeft += fillStr[iterSumbol];
        iterSumbol += 1;
      }
      return `${fillLeft}${input}`;
    }
    case 'FILL_BOTH': {
      let fillLeft = '';
      let iterSumbol = 0;
      const mean = (fullLen - input.length) / 2;
      for (let i = 0; i < fullLen - input.length; i += 1) {
        if (mean === i) {
          fillLeft += input;
        }
        if (!fillStr[iterSumbol]) {
          iterSumbol = 0;
        }
        fillLeft += fillStr[iterSumbol];
        iterSumbol += 1;
      }
      return fillLeft;
    }
    default:
      throw new Error(`Unknown ${fillType}`);
  }
};
