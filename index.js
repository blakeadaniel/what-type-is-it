import { WhichType } from "./package/funcs/funcs";

function whatTypeIsIt({ arg, comparison }) {
  return WhichType({ arg: arg, comparison: comparison });
}

module.exports = whatTypeIsIt;
