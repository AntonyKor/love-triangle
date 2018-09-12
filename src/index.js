/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let arr = preferences;
    let triangles = arr.filter(function (item,index,arr) {
        return (arr[arr[item-1]-1] === index+1)&&(item-1!==index)
    });
    console.log(triangles);
    return triangles.length/3;
};
// console.log(getLoveTrianglesCount([6, 14, 12, 21, 3, 20, 7, 15, 16, 16, 14, 4, 11, 13, 18, 2, 1, 8, 3, 1, 12]))
// let arr = [6,3,4,2,1,5,0];
// let triangles = arr.filter(function (item,index,arr) {
//     console.log(arr[arr[item-1]-1] +" "+ (index+1))
//     return arr[arr[item-1]-1] === index+1
// });
// console.log(triangles);
// console.log(triangles.length/3);
