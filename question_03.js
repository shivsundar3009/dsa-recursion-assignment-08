function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Create a 2D array to store the minimum number of steps
    // required for each subproblem
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
    // Fill the first row (deleting all characters from word2)
    for (let j = 1; j <= n; j++) {
      dp[0][j] = dp[0][j - 1] + 1;
    }
  
    // Fill the first column (deleting all characters from word1)
    for (let i = 1; i <= m; i++) {
      dp[i][0] = dp[i - 1][0] + 1;
    }
  
    // Calculate the minimum number of steps for each subproblem
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
    }
  
    return dp[m][n];
  }