import fs from 'node:fs';

export function part1(fileInputName: string) {
  try {
    const data = fs.readFileSync(fileInputName, 'utf8');
    const re = /mul\(\d*,\d*\)/g
    const array = data.match(re);
    console.log(array);

    const prepped = array?.map((element) => element.substring(4)).map((element) => element.substring(0, element.length - 1).split(','));
    // console.log(prepped);
    const result = prepped?.reduce((accumulator, currentValue) => accumulator + (+currentValue[0] * +currentValue[1]), 0);
    return result;
  } catch (error) {
    console.log(error);
  }
}

part1('input.txt');