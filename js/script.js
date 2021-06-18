/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.*/


/* METODO FILTER */

const filterNumbers = (array, a , b) => {
    let newarray = array.filter((element, index)=>{
        if ( index >= a -1 && index < b){
           return element
        }
    
    });

    return newarray
}


const numbers = [2,11,6,77,3,4,9];
let from = 1
let to = 3

const newNumber = filterNumbers (numbers, 1, 3)

console.log(newNumber);