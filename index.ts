import { argv } from "node:process";

import day1 from "./src/day1/day1.ts";
import day2 from "./src/day2/day2.ts";

const solutions: Record<string, Function> = {
  day1,
  day2,
};

const param = argv[2];

solutions[param]();
