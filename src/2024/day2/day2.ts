
import fs from 'node:fs';

// const arrays: [] = [];

try {
  const data = fs.readFileSync('./input.csv', 'utf8');
  const arrays = data.split('\n').map(element => element.split(' ').map(Number));
  //console.log(arrays); 

  const safeCount = arrays.filter(isSafe).length;
  console.log(safeCount);

  const safeWithDampener = arrays.filter(arr => { 
    return arr.map((el, i) => arr.toSpliced(i, 1)).find(isSafe);
  }).length;
  console.log(safeWithDampener);

} catch(error) {
  console.log(error);
}

function isSafe(arr): boolean {
  const processed = arr.map((elem, i) => i > 0 && elem - arr[i - 1]).slice(1);
  return ( 
    processed.every(el => el >= 1 && el <= 3) 
    || processed.every(el => el <= -1 && el >= -3)
  );
}
