function compress(chars) {
    let writeIndex = 0;
    let currentChar = chars[0];
    let count = 1;
  
    for (let i = 1; i <= chars.length; i++) {
      if (chars[i] === currentChar) {
        count++;
      } else {
        chars[writeIndex] = currentChar;
        writeIndex++;
  
        if (count > 1) {
          const countStr = count.toString();
  
          for (let j = 0; j < countStr.length; j++) {
            chars[writeIndex] = countStr[j];
            writeIndex++;
          }
        }
  
        currentChar = chars[i];
        count = 1;
      }
    }
  
    return writeIndex;
  }