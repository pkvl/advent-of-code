import readFileToString from '../../utils/readFileToString';

export function part1(fileInputName: string): Number {
  const [firstArr, secondArr] = prepareArrays(fileInputName);
  const mappedArr = firstArr.map((element: number, index: number) => Math.abs(element - secondArr[index]));
  const totalDistance = mappedArr.reduce((accumulate: number, currentValue: number) => accumulate + currentValue, 0);
  return totalDistance;
}

export function part2(fileInputName: string): Number {
  const [firstArr, secondArr] = prepareArrays(fileInputName);
  const countedArr = firstArr.map((element: number, index: number) => element * secondArr.filter((e: number) => e === element).length);
  const totalSimularity = countedArr.reduce((accumulate: number, currentValue: number) => accumulate + currentValue, 0);
  return totalSimularity;
}

function prepareArrays(fileInputName: string): any {
  const firstArr: number[] = [];
  const secondArr: number[] = [];

  const data = readFileToString(fileInputName);
  data?.split('\n').forEach(element => {
    if (element.length > 0) {
      const [first, second] = element.split('   ', 2);
      firstArr.push(+first.trim());
      secondArr.push(+second.trim());
    }
  });

  firstArr.sort(compareNumFn);
  secondArr.sort(compareNumFn);

  return [firstArr, secondArr];
}

function compareNumFn(a: number, b: number): number {
  return a - b;
}
