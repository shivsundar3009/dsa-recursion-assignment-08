class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBinaryTree(str) {
    if (str.length === 0) {
      return null;
    }
  
    const rootVal = parseInt(str);
    const root = new TreeNode(rootVal);
    let leftSubtreeEndIndex = findSubtreeEndIndex(str);
  
    if (leftSubtreeEndIndex < str.length - 1) {
      const rightSubtreeStartIndex = leftSubtreeEndIndex + 2; // Skip '(' and ')'
  
      root.left = constructBinaryTree(str.substring(2, leftSubtreeEndIndex));
      root.right = constructBinaryTree(str.substring(rightSubtreeStartIndex, str.length - 1));
    }
  
    return root;
  }
  
  function findSubtreeEndIndex(str) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        count++;
      } else if (str[i] === ')') {
        count--;
  
        if (count === 0) {
          return i;
        }
      }
    }
  
    return -1; // Invalid input
  }