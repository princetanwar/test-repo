/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

console.log("new");
var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (stones[j] === jewels[i]) {
        result++;
      }
    }
  }
  return result;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
