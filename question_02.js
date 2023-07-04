function checkValidString(s) {
    let openCount = 0;
    let wildcardCount = 0;
  
    // Check from left to right
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === '(') {
        openCount++;
      } else if (char === '*') {
        wildcardCount++;
      } else {
        // char === ')'
        if (openCount > 0) {
          openCount--;
        } else if (wildcardCount > 0) {
          wildcardCount--;
        } else {
          return false; // No matching '(' or '*' found
        }
      }
    }
  
    let closeCount = 0;
    wildcardCount = 0;
  
    // Check from right to left
    for (let i = s.length - 1; i >= 0; i--) {
      const char = s[i];
  
      if (char === ')') {
        closeCount++;
      } else if (char === '*') {
        wildcardCount++;
      } else {
        // char === '('
        if (closeCount > 0) {
          closeCount--;
        } else if (wildcardCount > 0) {
          wildcardCount--;
        } else {
          return false; // No matching ')' or '*' found
        }
      }
    }
  
    return true;
  }