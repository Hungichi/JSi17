
// const student = [
//     {name : "A" , grade :11 , subject:['sb1', 'sb2' , 'sb3']},
//     {name : "B" , grade :12 , subject:['sb1', 'sb2' , 'sb3']},
//     {name : "C" , grade :14 , subject:['sb1', 'sb2' , 'sb3']},
//     {name : "D" , grade :10 , subject:['sb1', 'sb2' , 'sb3']},
//     {name : "E" , grade :8 , subject:['sb1', 'sb2' , 'sb3']}
// ]

// const loctuoi = student.filter(studen => studen.grade <= 11 );
// console.log(loctuoi)

// const printAge = student.map(st => st.grade);
// console.log(printAge)

// const filSB = student.map(function(studen)) {
//     return student.subject.filter(sb => sb == 'sb1')
// }

// const m = [1,2,3,4,5,6,"hh", "9",80,100]
// const mSquared = m.filter(checkNumber);
// console.log(mSquared)
// function checkNumber(m) {
//     return m != "";
// }



// const arr1 = [1,2,4,5,6]
// const arr2 = [1.6,8,9,0]
// const arr3 = [...arr1,...arr2]
// const filt = arr3.filter();
// function check(arr3){
//     for( let i = 0 ; i < arr3.lenght-1 ; i++){
//         if(arr3[i]== [i] ){
//             console.log(arr3[i])
//         }
//     }
// }


 const arr = [1,54,6,7]
 const NewArr = arr.map(abc)
 console.log(NewArr)
 function abc(num){
    return num+5;
 }
 
