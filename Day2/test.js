// const arr1 = [1,2,3,4,5]
// const dup =[...arr1,...arr1]
// console.log(dup)
// const arrA = [ "hello" , "xin chào"]
// const arrB = ["Bonjour", "olas"]
// const waysToSayHello = [...arrA,...arrB]
// console.log(waysToSayHello)
//------------bai3 c1 ------------
// const arrX = [0,1,2,3,4,5,6,7,8]
// for(i=0 ; i< arrX.length ; i++){
//     console.log(arrX[i]*arrX[i])
//     if(arrX[i] % 2 != 0){
//         console.log(arrX[i] , "la so le")
//     }
// }
//-----cach2 B3------
// const arrX = [0,1,2,3,4,5,6,7,8]
// const arrSquare = arrX.map((num) =>{
//     return num*num
// } )
// console.log(arrSquare)

const arr=[1,2,3,4,5,6,7]
function filterRange(arr , a , b ){
    return arr.filter(item => (a <= item && item => b ))
}