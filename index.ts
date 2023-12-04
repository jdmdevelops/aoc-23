import { argv } from "node:process";

import day1 from "./src/day1/day1.ts";

const solutions: Record<string, Function> = {
  day1,
};

const param = argv[2];

solutions[param]();
