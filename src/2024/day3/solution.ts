import readFileToString from "../../utils/readFileToString";

export function part1(fileInputName: string) {
  const data = readFileToString(fileInputName);
  const re = /mul\(\d*,\d*\)/g
  const array = data?.match(re);

  const prepped = array?.map((element) => element.substring(4)).map((element) => element.substring(0, element.length - 1).split(','));
  const result = prepped?.reduce((accumulator, currentValue) => accumulator + (+currentValue[0] * +currentValue[1]), 0);
  return result;
}

export function part2(fileInputName: string) {
  const data = readFileToString(fileInputName);
  const re = /mul\(\d*,\d*\)|do\(\)|don\'t\(\)/g
  const array = data?.match(re) || [];
  let stopped = false;
  let sum = 0;
  for (let item of array) {
    if (item === "don't()") stopped = true;
    if (item === "do()") stopped = false;
    if (!stopped && item.startsWith("mul(")) {
      const [first, second] = item.substring(4, item.length - 1).split(',');
      if (first && second) {
        sum += +first * +second;
      }
    }
  }
  return sum;
}
