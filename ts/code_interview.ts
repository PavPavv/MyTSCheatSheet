//  1
const counter = (n: number): () => number => {
  let counter = n || 0;

  return () => counter++
};

const count = counter(1);
// count();
// count();
// count();
// count();
// console.log(count());

//  2
const fib = (n: number): number => {
  let result: number[] = [0, 1];

  for (let i = 2; i <= n; i++) {
    let prev1 = result[i - 1];
    let prev2 = result[i - 2];
    result.push(prev1 + prev2);
  }

  //result = [result[n]];
  return result[n];
};
console.log(fib(1))
console.log(fib(7))

//  3
const findVowels = (str: string):number => {
  const matched: string[] = str.toLowerCase().match(/[aeiou]/gi);
  return matched ? matched.length : 0;
};
console.log(findVowels('Sveta'));
