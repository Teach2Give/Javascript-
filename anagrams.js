function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

    // lenths should be the same to be anagram
    if (str1.length !== str2.length) {
        return false;
    }
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test cases
console.log(areAnagrams('Listen', 'Silent'));  // true
console.log(areAnagrams('Hello', 'World'));    // false
