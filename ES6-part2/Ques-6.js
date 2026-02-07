// Import a module for filtering unique elements in an array. 

import { filterElement} from "./utils/filterElemet.js";

const arr = [1, 2, 3, 6, 5, 2, 3, 6];
const uniqueArr = filterElement(arr);
console.log(uniqueArr);

/* 
ouput:
[ 1, 2, 3, 6, 5 ]
*/