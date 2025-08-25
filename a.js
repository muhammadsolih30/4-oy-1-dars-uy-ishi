//! masala - 1

// function power(a = 0, n = 0 ) {
//    return a ** n
// }

// console.log(power(2, 2))

//! masala - 2

// function mean(a = 0 , b = 0){
//    let son1 =  (a + b) / 2;
//    let son2 = Math.sqrt(a * b)
//    return [son1, son2]

// }
// console.log(mean(12,15))

//! masala - 3

// function sign(a){
//    if(a > 0){
//       return 1
//    }
//    else if(a < 0){
//       return -1
//    }
//   return 0
// }

// console.log(sign(0))

//! masala - 4

// function numberOfRoots(A, B, C){
//    let D = B**2 - 4 * A * C
//    if(D > 0 ){
//       return 2
//    }
//    else if(D == 0){
//       return 1
//    }
//    else {
//       return 0
//    }
// }
// console.log(numberOfRoots(15 , 2255, 4))

//! masala - 5

// function areaCircle(R) {
//    p = Math.PI
//    let S = p * R **2
//    return S.toFixed(2)
// }

// console.log(areaCircle(5))

//! masala - 6

// function sumRange(a, b){
//    if(a > b){
//       return 0
//    }
//    else{
//       let son = a

//       for(let i = son ; i <= b; i++){
//          i ++
//          son += i
//       } return son - 1
//    }
// }

// console.log(sumRange(5,7))

//! masala - 7

// function calc(A, B, S){
//    switch (B) {
//       case "+":
//          return A + S

//       case "-":
//          return A - S

//       case "*":
//         return A * S

//       case "/":
//         return A / S

//       default:
//          return 0
//    }
// }

// console.log(calc(10, "+", 1))

//! masala - 8

// function isEven(K){
//    if(K % 2 == 0){
//       return true
//    }
//    return false
// }

// console.log(isEven(3))

//! masala - 9

// function  sortABC(a, b, c){
//    if(a > b && a > c){
//       if(b > c){
//          return [a,b,c]
//       }
//       else{
//          return [a,c,b]
//       }
//    }
//    else if(b > c && b > a ){
//       if(a > c){
//          return[ b,a,c]
//       }
//       else{
//          return [b,c,a]
//       }
//    }
//    else if(c > a && c > b){
//       if(a > b){
//          return [c,a,b]
//       }
//       else if(b > a){
//          return [c,b,a]
//       }
//    }
// }
// console.log(sortABC(1,2,3))

//! masala - 10

// function isPowerN(K, N) {
//   if (K > 0) {
//     if (
//       N ** 2 == K ||
//       N ** 3 == K ||
//       N ** 4 == K ||
//       N ** 5 == K ||
//       N ** 6 == K ||
//       N ** 7 == K ||
//       N ** 8 == K ||
//       N ** 9 == K ||
//       N ** 10  == K||
//       N ** 11 == K ||
//       N ** 12 == K ||
//       N ** 12 == K ||
//       N ** 14 == K ||
//       N ** 15 == K ||
//       N ** 16 == K ||
//       N ** 17 == K||
//       N ** 18 == K ||
//       N ** 18 == K ||
//       N ** 19 == K ||
//       N ** 20 == K
//     ) {
//       return true
//     }
//     else {
//       return false
//     }
//   }
//   else {
//    return false
//   }
// }
// console.log(isPowerN(15, 14))

//! masala - 11

// function isPrime(N) {
//    if(N <= 1)return false
//    if(N === 2)return true
//    if(N % 2 == 0)return false
//    for(let i = 3; i * i <= N; i += 2)return false
//    return true
// }

// console.log(isPrime(7));

// //! masala - 12

// function ali(N){
//     if (N <= 1) return false;
//   if (N === 2) return true;
//   if (N % 2 == 0) return false;
//   for (let i = 3; i * i <= N; i += 2)
//    if(N % i == 0) return false;
//   return true
// }

// function numberOfPrime(j) {
//    let hsobla = 0
//   for(let i = 0; i <= j ; i++){
//    if(ali(i)){
//      hsobla += 1
//    }
//   }
//   return hsobla
// }

// console.log(numberOfPrime(45))

// //! masala - 13

// function digitNth(K, N) {
//   if (K <= 0) {
//     return -1;
//   }

//   let s = K.toString();
//   let son1 = 0;
//   for (let i = 0; i < s.length; i++) {
//     son1 += i;
//   }
//   if (son1 > N) {
//     return ` N = ${Number(N)} dan katta K = ${Number(K)} chunki uning indexlari ${son1} ta`;
//   }
//    else if (son1 == N) {
//     return `N = ${N} va K = ${K} uzaro teng chunki`;
//   }
//   return `${K} = K  katta N = ${N} dan`;
// }
// console.log(digitNth(1144, 3));

// //! masala - 14

// function inverseNumber(N){
//     let son = N.toString().split("").reverse().join("")
//     return son
// }
// console.log(inverseNumber(456))

// //! masala - 15

// function ali(N){
//     let son = N.toString().split("").reverse().join("")
//     return son
// }

// function isPalindrom(K){
//     let son1 = K
//     if(son1 == ali(K) && ali(K) == son1){
//         return true
//     }
//     return false
// }

// console.log(isPalindrom(1211))

// //! masala - 16

// function  factorial(N){
//     son = 1
//     for(let i = 1; i <= N; i++){
//         son *= i
//     }
//     return son
// }
// console.log(factorial(5))

// //! masala - 17

// function getSum3(N) {
//     let natija = 0
//     for(let i = 1; i < N ; i++){
//         if(i % 3 == 0){
//             natija += i
//         }
//     }
//     return natija
// }
// console.log(getSum3(15))

// //! masala - 18

// function sonlaryigindisi(N) {
//   let juft = 1;
//   let toq = 1;

//   for (let i = 1; i <= N; i++) {
//     if (i % 2 == 0) {
//       juft += i;
//     }else{
//         toq += i
//     }
//   }
//   let j = juft
//   let t = toq
//   function sumOddEven(j, t){
//     return j + t
//   }
//   return  sumOddEven(j, t)
// }
// console.log(sonlaryigindisi(15));

// //! masala - 19

// function invertTime(H, M, S) {

//     let soat = H *  3600
//     let minut = M *  60
//     let sekund = S
//     return T = soat + minut + sekund
// }
// console.log(invertTime(0, 6, 40));

// //! masala - 20

// function decTime(H, M, S){
//     let soat = 3600 * H
//     let minut = 60 * M
//     let sekondis = S - 1

//     return soat + minut + sekondis
// }
// console.log(decTime(0,6,40 ))

// //! masala - 21

// function  isLeapYear(Y){
//     if(Y % 4 == 0 && Y % 100 != 0){
//       return true
//     }
//     return false
// }
// console.log(isLeapYear(2024))

// //! masala - 22

// function kabisayil(kabisayil) {
//   if (kabisayil % 4 == 0 && kabisayil % 100 != 0 || kabisayil % 400 == 0)  {
//     return true;
//   }
//   return false;
// }

// function monthDays(M, Y) {
//   switch (M) {
//     case 1:
//       return "yanivar" ,31;
//     case 2:
//       if(kabisayil(Y) == true){
//          return "fevral", 28
//       }
//       else if(kabisayil(Y) == false){
//          return "fevral", 29
//       }
//     case 3:
//       return "marit" ,31;
//     case 4:
//       return "april" ,30;
//     case 5:
//       return "may" ,31;
//     case 6:
//       return "iyun" ,30;
//     case 7:
//       return "iyul" ,31;
//     case 8:
//       return "avgust" ,31;
//     case 9:
//       return "sentabir" ,30;
//     case 10:
//       return "oktabir" ,31;
//     case 11:
//       return "noyabit" ,30;
//     case 12:
//       return "dakabir" ,31;
//     default:
//         "bunday oy mavjut emas"
//       break
//   }
// }

// console.log(monthDays(2,2021))

// //! masala - 23

// function kabisayil(kabisa){
//    if(kabisa % 4 == 0 && kabisa % 100 != 0 || kabisa % 400 == 0){
//       return true
//    }
//    return false
// }
// function monthDays(M, Y) {
//   switch (M) {
//     case 1:
//       return "yanivar" ,31;
//     case 2:
//       if(kabisayil(Y) == true){
//          return "fevral", 28
//       }
//       else if(kabisayil(Y) == false){
//          return "fevral", 29
//       }
//     case 3:
//       return "marit" ,31;
//     case 4:
//       return "april" ,30;
//     case 5:
//       return "may" ,31;
//     case 6:
//       return "iyun" ,30;
//     case 7:
//       return "iyul" ,31;
//     case 8:
//       return "avgust" ,31;
//     case 9:
//       return "sentabir" ,30;
//     case 10:
//       return "oktabir" ,31;
//     case 11:
//       return "noyabit" ,30;
//     case 12:
//       return "dakabir" ,31;
//     default:
//         "bunday oy mavjut emas"
//       break
//   }
// }

// function yil(D,M,Y){
//    if(D < 1 || D > 31){
//       return "siz kunni no tug'ri kiritgansiz"
//    }
//    else if(M < 1 || M > 12){
//       return `siz oynixayo kiritgansiz`
//    }
//    else if(D < 10 && D > 0 || M < 10 && M > 0){
//       if(D < 10 && D > 0){
//          if(M < 10 && M > 0 ){
//             return `0${D - 1} 0${M} ${Y}`
//          }
//          return `0${D - 1} ${M} ${Y}`
//       }
//       else if(M > 0 && M < 13){
//          return `${D - 1} 0${M} ${Y}`
//       }
//       return `${D - 1} ${M} ${Y}`
//    }
//    return `${D - 1} ${M} ${Y}`
// }

// console.log(yil(11, 11,2024))  //! rosa vaqtimketti shu masalaga 😒


// //! masala - 24



