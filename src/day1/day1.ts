import fs from "node:fs";

const input = fs.readFileSync(`${import.meta.dir}/day1.txt`, "utf8");

//split by new line
const lines = input.split(/\r?\n/);

//determine which characters are numbers
const data = lines.map((line) => {
  const firstNum = line.split("").find((char) => !isNaN(+char)) ?? "";
  const lastNum = line.split("").findLast((char) => !isNaN(+char)) ?? "";

  return firstNum + lastNum;
});

//convert each item into an int and sum
const solution = data.reduce((acc, current) => acc + parseInt(current), 0);

export default () => {
  return console.log(parseInt("seventeen"));
};
