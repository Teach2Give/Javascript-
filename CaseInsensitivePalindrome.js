function isCaseInsensitivePalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test cases
console.log(isCaseInsensitivePalindrome('Aba'));         // Output: true
console.log(isCaseInsensitivePalindrome('Racecar'));     // Output: true
console.log(isCaseInsensitivePalindrome('Palindrome'));  // Output: false
console.log(isCaseInsensitivePalindrome('Madam'));       // Output: true
console.log(isCaseInsensitivePalindrome('Hello'));       // Output: false
