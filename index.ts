import { argv } from "node:process";

import day1 from "./src/day1";

const solutions: Record<string, Function> = {
  day1,
};

const param = argv[2];

solutions[param]();
