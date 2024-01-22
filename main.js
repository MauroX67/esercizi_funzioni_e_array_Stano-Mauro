
//! ESERCIZIO 1

//? Scrivere una funzione che prenda come input un numero e generi un array composto da n numeri casuali compresi tra 1 e 10.
//? HINT: COME SI AGGIUNGE UN ELEMENTO ALLA FINE DI UN ARRAY?
//? Esempio: Input= 5 Output= [5, 9, 1, 6, 10]


// function RandomArr(n) {
//     let Array = [];
//     for ( let i = 0; i < n; i++) {
//       Array.push(Math.floor(Math.random() * 10) + 1);
//     }
//     return Array;
//   }
  
//   let input = 5;
//   let output = RandomArr(input);
//   console.log(output);












//! ESERCIZIO 2

//? Metti un po' d'ordine
//? Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

//?  Esempio:
//?  Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
//?Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
//? Variante:
//?  Prova ad ordinali in modo crescente.



// let groupN = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// let NumDec = groupN.sort((a, b) => b - a);
// console.log(NumDec);

// let NumCresc = groupN.sort((a, b) => a - b);
// console.log(NumCresc);









//! ESERCIZIO 3

//? Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

//? Esempi:

//?  Input : 9
//?  Output : 1 cifra

//?  Input : 99
//?  Output : 2 cifre
 





let numero = -234;

let stringa = numero.toString()

console.log(stringa.length);

function contatore(numero) {
      if (numero < 0) {
        return `Il numero è negativo`
      }
    else if (numero < 10) {
      return 1;
    } else if (numero < 100) {
      return 2;
    } else if (numero < 1000) {
      return 3;
    } else {
      return 4;
    }
  }
  
  let cifre = contatore(numero);
  console.log(`Il numero è composto da ${cifre} cifre`);








function count(number) {
    if (number < 0) {
     let string = number.toString();
     console.log(string.length - 1);
    }
    else {
     let string = number.toString();
     console.log(string.length);
    }
}

count(65);






//! ESERCIZIO 4

// Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
//  FALSE altrimenti.



//  Esempi:
//  Input: n = 2, m = 3
//  Output: FALSE

//  Input: n = 2, m = '2'
//  Output: FALSE

//  Input: n = 2, m = 2
//  Output: TRUE 



function uguaglianza(n, m) {
    if (n === m) {
        console.log(`TRUE`);
    } else {console.log(`FALSE`);}
}

uguaglianza(-4,4)








//! ESERCIZIO 5

//? Scrivi una funzione che dato un numero stampi la tabellina corrispondente.


// let numero = 8;

// function tabellina(numero) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(numero + " x " + i + " = " + numero * i);
//     }
// }

// tabellina(6)





//! ESERCIZIO 6

//? Scrivi due funzioni: dato un array: let numbers = [10, 12, 78, -4, -20, 11]; una che prenda in input un array di numeri e restituisca il maggiore l'altra che restituisca il minore. Suggerimento utilizzare Math.max() e Math.min(); consultare per bene la documentazione: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max?retiredLocale=it#examples




// let numbers = [10, 12, 78, -4, -20, 11];

// console.log(Math.max(...numbers));

// console.log(Math.min(...numbers));
