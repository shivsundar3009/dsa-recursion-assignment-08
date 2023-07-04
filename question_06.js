function findAnagrams(s, p) {
    const result = [];
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
  
    // Count the frequencies of characters in p
    for (let i = 0; i < p.length; i++) {
      pCount[p.charCodeAt(i) - aCode]++;
    }
  
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      // Expand the sliding window
      sCount[s.charCodeAt(right) - aCode]++;
  
      // Shrink the sliding window if it exceeds p's length
      if (right - left + 1 > p.length) {
        sCount[s.charCodeAt(left) - aCode]--;
        left++;
      }
  
      // Compare the character frequencies
      if (right - left + 1 === p.length) {
        if (arraysAreEqual(sCount, pCount)) {
          result.push(left);
        }
      }
  
      right++;
    }
  
    return result;
  }
  
  function arraysAreEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }