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
  one: "on1e",
  two: "tw2o",
  three: "thr3ee",
  four: "fou4r",
  five: "fi5ve",
  six: "s6ix",
  seven: "se7vem",
  eight: "e8ight",
  nine: "ni9ne",
};

//split by new line
const lines = input.split(/\r?\n/);

//determine which characters are numbers
const data = lines.map((line) => {
  const replacedNums = line.replace(regEx, (match) => legend[match]);
  const replacedNumsDup = replacedNums.replace(regEx, (match) => legend[match]);

  const firstNum =
    replacedNumsDup.split("").find((char) => !isNaN(+char)) ?? "";
  const lastNum =
    replacedNumsDup.split("").findLast((char) => !isNaN(+char)) ?? "";

  return firstNum + lastNum;
});

const solution = data.reduce((acc, current) => {
  return +acc + +current;
}, 0);

export default () => {
  return console.log(solution);
};
