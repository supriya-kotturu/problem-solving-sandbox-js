const romanToInt = (roman) => {
  let curr = "",
    next = "",
    num = 0;
  const symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let idx = 0; idx < roman.length; idx++) {
    curr = roman[idx];
    next = roman[idx + 1];

    if (idx < roman.length - 1 && symbolMap[curr] > symbolMap[next]) {
      num -= symbolMap[curr];
    } else {
      num += symbolMap[curr];
    }
  }

  return num;
};

console.log(romanToInt("MCMXCIV"));
