// Filter anagrams using Map

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const charCountMap = new Map();
    for (let i=0; i<str1.length; i++){
        charCountMap.set(str1[i], (charCountMap.get(str1[i]) || 0) + 1);
    }
    for (let i=0; i<str2.length; i++){
       if(!charCountMap.has(str2[i])){
        return false;
       }
       charCountMap.set(str2[i], charCountMap.get(str2[i])-1);
       if(charCountMap.get(str2[i]) === 0){
        charCountMap.delete(str2[i]);
       }
    }
    return charCountMap.size === 0;
}

let result = areAnagrams("listen", "silentab");
console.log(result);

// output
// false