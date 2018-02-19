


function interleave(strA, strB, resultStr) {

  let isInterleaved = false;

  if(strA.length === 0 && strB.length === 0 && resultStr.length > 0){
    return isInterleaved;
  }

  function recurse(strA, strB, index = resultStr.length - 1) {

    if (strA.length === 0 && strB.length === 0 && index === -1) {
      isInterleaved = true;
      return true;
    }

    if (index === -1) {
      return false;
    }

    let lastStrA = strA.slice(-1);
    let lastStrB = strB.slice(-1);

    if (lastStrA === resultStr[index]) {
        let newStrA = strA.substring(0, strA.length - 1);
      if(recurse(newStrA, strB, index - 1))
        return true;
    }

    if (lastStrB === resultStr[index]) {
        let newStrB = strB.substring(0, strB.length - 1);
      if(recurse(strA, newStrB, index - 1))
        return true;
    } 

    return false;
  }
  recurse(strA,strB);
  return isInterleaved;
}

let stringA = 'baababbabbababbaaababbbbbbbbbbbaabaabaaaabaaabbaaabaaaababaabaaabaabbbbaabbaabaabbbbabbbababbaaaabab';
let stringB = 'aababaaabbbababababaabbbababaababbababbbbabbbbbababbbabaaaaabaaabbabbaaabbababbaaaababaababbbbabbbbb';
let stringC = "babbabbabbababbaaababbbbaababbaabbbbabbbbbaaabbabaababaabaaabaabbbaaaabbabbaaaaabbabbaabaaaabbbbababbbababbabaabababbababaaaaaabbababaaabbaabbbbaaaaabbbaaabbbabbbbaaabaababbaabababbbbababbaaabbbabbbab";
console.log(interleave(stringA, stringB, stringC))

