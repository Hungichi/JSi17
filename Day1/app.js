
// console.log(array[0])
// function khcodauvao(){
//     console.log("phan lac hung")
// };
// khcodauvao()
// function codauvao(a){
//     console.log(a)
// };
// codauvao("phan lac hung2")
// function kieu3(){
//     return "phan lac hung"
// };
// console.log(kieu3)
// function dientichHT(daylon,daybe,chieucao){
//     return ((daylon + daybe )/2 * chieucao  )
// };

// console.log(dientichHT(2,1,3))
let array=[2,11,16,7];
let k =9;
let emtyarray=[]
for(i=0 ; i < array.length ; i++){
    for(let j =i + 1; j< array.length; j++){
        if(array[i] + array[j] ==k ){
            // console.log("Number1" + array[i]);
            // console.log("Number1" + array[j]);
            emtyarray.push(i);
            emtyarray.push(j);
        }
        // else();
    }

};
console.log(emtyarray)