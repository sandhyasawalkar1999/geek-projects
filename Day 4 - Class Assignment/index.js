// /**
//  * @param {string} s
//  * @return {string}
//  */
// var removeDuplicates = function(s) {
//     let stack = [];
//     for (let c = 0; c < s.length; c++) {
//         if (stack.length > 0 && stack[stack.length - 1] == s[c]) {
//             stack.pop();
//         } else {
//             stack.push(s[c]);
//         }
//     }
//     return stack.join("");
// };

// console.log(removeDuplicates("abbaca"));
// console.log(removeDuplicates("azxxzy"));

// anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     var lenA = s.length;
//     var lenB = t.length;
//     var map = {};
  
//     if (lenA !== lenB) return false;
  
//     for (var i = 0; i < lenA; i++) {
//       if (!map[s[i]]) map[s[i]] = 0;
//       map[s[i]]++;
//     }
  
//     for (var j = 0; j < lenB; j++) {
//       if (!map[t[j]]) return false;
//       map[t[j]]--;
//     }
  
//     return true;
//   };

//   console.log(isAnagram("anagram","nagaram"));
// 

// decode

// const decodeString = s => {
//     const stack = [];
//     for (const char of s) {
//       if (char !== "]") { stack.push(char); continue; }
//       let cur = stack.pop();
//       let str = '';
//       while (cur !== '[') {
//         str = cur + str;
//         cur = stack.pop();
//       }
//       let num = '';
//       cur = stack.pop();
//       while (!Number.isNaN(Number(cur))) {
//         num = cur + num;
//         cur = stack.pop();
//       }
//       stack.push(cur);
//       stack.push(str.repeat(Number(num)));
//     }
//     return stack.join('');
//   };
//     console.log(decodeString("3[a]2[bc]"));
//     console.log(decodeString("2[abc]3[cd]ef"));

//reorginze string

var reorganizeString = function(s) {
    const freqMap = {};
    for (const c of s) {
        freqMap[c] = (freqMap[c] || 0) + 1;
    }

    const sortedChars = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);

    if (freqMap[sortedChars[0]] > Math.floor((s.length + 1) / 2)) {
        return "";
    }

    const res = Array(s.length).fill(null);
    let i = 0;
    for (const c of sortedChars) {
        for (let j = 0; j < freqMap[c]; j++) {
            if (i >= s.length) i = 1;
            res[i] = c;
            i += 2;
        }
    }

    return res.join('');
}

console.log(reorganizeString("aab"));
console.log(reorganizeString("aaaab"));

