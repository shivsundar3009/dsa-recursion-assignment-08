function decodeString(s) {
    const stack = [];
    let currentNum = 0;
    let currentStr = '';
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (isNumeric(char)) {
        currentNum = currentNum * 10 + parseInt(char);
      } else if (char === '[') {
        stack.push(currentStr);
        stack.push(currentNum);
        currentStr = '';
        currentNum = 0;
      } else if (char === ']') {
        const num = stack.pop();
        const prevStr = stack.pop();
        currentStr = prevStr + currentStr.repeat(num);
      } else {
        currentStr += char;
      }
    }
  
    return currentStr;
  }
  
  function isNumeric(char) {
    return !isNaN(char);
  }