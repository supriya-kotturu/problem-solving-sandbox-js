/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * LINK: https://leetcode.com/problems/valid-anagram
 */

const validAnagramPair = (s, t) => {
  const freqMap = new Map();

  for (let ele of s) freqMap.set(ele, (freqMap.get(ele) || 0) + 1);

  for (let ele of t) {
    if (!freqMap.has(ele)) return false;
    freqMap.set(ele, freqMap.get(ele) - 1);
    if (freqMap.get(ele) === 0) freqMap.delete(ele);
  }

  return freqMap.size === 0;
};

console.log(validAnagramPair("anagram", "nagaram"));
