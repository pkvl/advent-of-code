
import fs from 'node:fs';

export function part1(fileInputName: string): number {
  const arrays = prepareArrays(fileInputName);
  if (!arrays) return -1;
  const safeCount = arrays.filter(isSafe).length;
  return safeCount;
}

export function part2(fileInputName: string): number {
  const arrays = prepareArrays(fileInputName);
  if (!arrays) return -1;

  const safeWithDampener = arrays.filter(arr => {
    return arr.map((element: number, i) => arr.toSpliced(i, 1)).find(isSafe);
  }).length;
  return safeWithDampener;
}

function prepareArrays(fileInputName: string): number[][] | undefined {
  try {
    const data = fs.readFileSync(fileInputName, 'utf8');
    const arrays = data.split('\n').map(element => element.split(' ').map(Number));
    return arrays;
  } catch (error) {
    console.log(error);
  }
}

function isSafe(array: number[]): boolean {
  const processed = array.map((elem: number, i) => i > 0 && elem - array[i - 1]).slice(1);

  return (
    processed.every((element: any) => element >= 1 && element <= 3) ||
    processed.every((element: any) => element <= -1 && element >= -3)
  );
}
