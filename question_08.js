function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      const charCount = new Map();
      for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
        if (charCount.get(char) > 1) {
          return true; // Found a repeated character, can swap to make equal
        }
      }
      return false; // No repeated characters, cannot swap to make equal
    }
  
    const diffs = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diffs.push(i);
      }
    }
  
    return (
      diffs.length === 2 && // Must have exactly 2 differences
      s[diffs[0]] === goal[diffs[1]] && // Swapping makes s and goal equal
      s[diffs[1]] === goal[diffs[0]]
    );
  }