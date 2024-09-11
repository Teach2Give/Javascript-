function countDistinctPalindromes(str) {
    const palindromes = new Set();
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            palindromes.add(str.substring(left, right + 1));
            left--;
            right++;
        }
    }
    for (let i = 0; i < str.length; i++) {
        // Odd 
        expandAroundCenter(i, i);
        // Even 
        expandAroundCenter(i, i + 1);
    }
    
    return palindromes.size;
}

// test case
console.log(countDistinctPalindromes("abba")); // Output: 4 ("a", "b", "bb", "abba")
console.log(countDistinctPalindromes("abc"));  // Output: 3 ("a", "b", "c")
console.log(countDistinctPalindromes('ababa'));  // Output: 7
console.log(countDistinctPalindromes('racecar')); // Output: 7
console.log(countDistinctPalindromes('aabb'));    // Output: 4
console.log(countDistinctPalindromes('a'));       // Output: 1
console.log(countDistinctPalindromes('abc'));     // Output: 3
