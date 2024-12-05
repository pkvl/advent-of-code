import fs from 'node:fs';

const firstArr: [] = [];
const secondArr: [] = [];

try {
  const data = fs.readFileSync('input.csv', 'utf8');
  data.split('\n').forEach(element => {
    if(element.length > 0) {
      const [first, second] = element.split('   ', 2);
      // console.log(first, second);
      firstArr.push(Number(first.trim()));
      secondArr.push(Number(second.trim()));
    }
  });

  // console.log(firstArr.length, secondArr.length);
  firstArr.sort(compareNumsFn);
  secondArr.sort(compareNumsFn);

  const mappedArr = firstArr.map((elem, index) => Math.abs(elem - secondArr[index]));
  const totalDistance = mappedArr.reduce((acc, cur) => acc + cur, 0);
 
//  for(let i = 0; i < firstArr.length; i++) {
//    totalDistance += Math.abs(firstArr[i] - secondArr[i]);
//  }
 
  const countedArr = firstArr.map((elem, index) => elem * secondArr.filter((e) => e === elem).length); 
  const totalSimularity = countedArr.reduce((acc, curr) => acc + curr , 0); 
 
  console.log('part 1', totalDistance); 
  console.log('part 2', totalSimularity); 
} catch (err) {
  console.error(err);
}

function compareNumsFn(a: Number, b: Number) {
  return a - b;
}

