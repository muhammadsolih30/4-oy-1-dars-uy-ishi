

//! 1-masala

// function daraja (a = 2, b = 2){
//    let c =  a ** b
//    return c;
// }

// console.log(daraja(3, 5))



//! 2-masala


// function urta (x = 1, y = 2){
//    return [ Math.floor((x + y) / 2),  Math.floor(Math.sqrt(x * y))]
// }

// let son = urta(2,5);

// console.log( ` bu arifmitigi ${son} -- bu geomitirigi ${son}`)



//! 3-masala


// function sign(n){
//    if(n > 0 ){
//       return 1;
//    }
//    else if(n < 0){
//       return -1;
//    }
//    else if(n == 0){
//       return 0;
//    }
//    else{
//       console.log("bunday son yuq")
//    }
// }

// console.log(sign(-5)) 



//! 4-masala

// function numberOfRoots (a,b,c ){
//    let d = b ** 2 - 4 * a * c;

//    if(d > 0){
//       return 2;
//    }
//    else if(d == 0){
//       return 1;
//    }
//    else if (d < 0){
//       return 0;
//    }
//    else{
//       console.log("bunday son yuq")
//    }
   
// }

// let son = numberOfRoots(1,-6 ,9);

// console.log(son);



//! 5-masala


// function areaCircle(R){
//    let P = Math.PI;
//    let S = (P * R ** 2)
//    return S;
// }

// let son = areaCircle(3);
// console.log(son.toFixed(1))



//! 6-masala


// function sumRange(A, B) {
//    if(A >= B){
//       return 0;
//    }
//    else if(A < B){
//     let total = 0

//       for (let i = A; i <= B; i++) {
//          total += i
//         }
//         return total;
//    }
// } 
// console.log(sumRange(8, 10))



//! 7-masala

function calc(A, B, S){
  S = '-'
  let son = NaN
  switch (S) {
    case '*':
       son = A * B
      return son;
      break;
    case '/':
       son = A / B
      return son;
      break;
    case '+':
       son = A + B
       return son;
       break;
    case '-':
       son = A - B
      return son;
      break;

    default:
      console.log("bunday naija niqlanmadi")
      break;
  }
}
console.log(calc(15, 5, '-'))