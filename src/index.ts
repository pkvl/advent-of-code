import * as Day1_2024 from './2024/day1/solution';
import * as Day2_2024 from './2024/day2/solution';
import * as Day3_2024 from './2024/day3/solution';

// 2024 / day 1
console.log('day 1');
console.log('total difference', Day1_2024.part1('./src/2024/day1/input.csv'));
console.log('total simularity', Day1_2024.part2('./src/2024/day1/input.csv'));

// 2024 / day 2
console.log('day 2');
console.log('safe reports: ', Day2_2024.part1('./src/2024/day2/input.csv'));
console.log('safe reports number with problem dampener', Day2_2024.part2('./src/2024/day2/input.csv'));

// 2024 / day 3
console.log('day 3');
console.log('sum: ', Day3_2024.part1('./src/2024/day3/input.txt'));
console.log('sum with stops', Day3_2024.part2('./src/2024/day3/input.txt'));