// Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs. 

const arr = [1,2,3,4,5,6,7,8,9,10];

for(let i=0; i<arr.length; i++){
    function printElement(index){
        console.log(arr[index]);
    }
    setTimeout(printElement, 3000 * (i + 1), i);
}

/* 
Output:
1
2
3
4
5
6
7
8
9
10
*/