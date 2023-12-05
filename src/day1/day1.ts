import fs from "node:fs";

const input = fs.readFileSync(`${import.meta.dir}/day1.txt`, "utf8");

const arr = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const regEx = new RegExp(arr.join("|"), "g");

const legend: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

//split by new line
const lines = input.split(/\r?\n/);

//determine which characters are numbers
const data = lines.map((line) => {
  // console.log(line);
  const replacedNums = line.replace(regEx, (match) => legend[match]);
  // console.log(replacedNums);

  const firstNum = replacedNums.split("").find((char) => !isNaN(+char)) ?? "";
  // console.log(firstNum);
  const lastNum =
    replacedNums.split("").findLast((char) => !isNaN(+char)) ?? "";
  // console.log(lastNum);

  return firstNum + lastNum;
});

const solution = data.reduce((acc, current) => {
  return +acc + +current;
}, 0);

export default () => {
  return console.log(solution);
};
