const getBaseLog = (num, base) => {
  return Math.log(num) / Math.log(base);
};

function decompose(num) {
  const powerArr = [];

  for (let base = 2; base * base <= num; base++) {
    let power = Math.floor(getBaseLog(num, base));
    num -= base ** power;
    powerArr.push(power);
  }
  return [powerArr, num];
}

function decompose0(num) {
  const array = [];

  for (let base = 2; num >= 0; base++) {
    let power = Math.floor(getBaseLog(num, base));
    if (power > 1) {
      num -= Math.pow(base, power);
      array.push(power);
    } else {
      return [array, num];
    }
  }
}

const decompose1 = (num) => {
  let remainder = num;
  let array = [];
  let tempPower;

  for (let base = 2; base * base <= remainder; base++) {
    console.log(remainder);
    for (let power = 2; base ** power <= remainder; power++) {
      tempPower = power;
    }
    array.push(tempPower);
    remainder -= base ** tempPower;
  }
  return [array, remainder];
};

console.log(decompose(0));
console.log(decompose(3));
console.log(decompose(26)); // 26  -->  [ [4, 2], 1 ]    # 26 = 2^4 + 3^2 + 1
console.log(decompose(8330475));

console.log(decompose0(0));
console.log(decompose0(3));
console.log(decompose0(26)); // 26  -->  [ [4, 2], 1 ]    # 26 = 2^4 + 3^2 + 1
console.log(decompose0(8330475));
console.log(decompose0(0)); // [[], 0]);
console.log(decompose0(4)); //  [[2], 0]);

console.log(decompose1(0));
console.log(decompose1(3));
console.log(decompose1(26)); // 26  -->  [ [4, 2], 1 ]    # 26 = 2^4 + 3^2 + 1
console.log(decompose1(8330475));
console.log(decompose1(0)); // [[], 0]);
console.log(decompose1(4)); //  [[2], 0]);
