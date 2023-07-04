function minimumDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    
    // Create a 2D array to store the minimum ASCII sum
    // of deleted characters for each subproblem
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Calculate the cumulative ASCII sum of s2
    let s2Sum = 0;
    for (let i = 1; i <= n; i++) {
      s2Sum += s2.charCodeAt(i - 1);
      dp[0][i] = s2Sum;
    }
    
    // Calculate the cumulative ASCII sum of s1 and
    // the minimum ASCII sum of deleted characters
    for (let i = 1; i <= m; i++) {
      const s1Char = s1.charCodeAt(i - 1);
      dp[i][0] = dp[i - 1][0] + s1Char;
      
      for (let j = 1; j <= n; j++) {
        const s2Char = s2.charCodeAt(j - 1);
        if (s1Char === s2Char) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j] + s1Char, dp[i][j - 1] + s2Char);
        }
      }
    }
    
    return dp[m][n];
  }