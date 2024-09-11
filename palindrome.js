function isPalindrome (str){
    const cleanedstr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedstr === cleanedstr.split('').reverse().join('');

}
console.log(isPalindrome('a man, a plan, a canal, Panama'));
console.log(isPalindrome('Was it a car or a cat i saw'));
console.log(isPalindrome("hello world!"));

