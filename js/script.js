/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.*/


/*--------- METODO FILTER --------- */

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


/*--------- METODO FOREACH --------- */

const numbers2 = [4,17,9,44,54,2,7]

const forEachNumbers = ( array, a , b) => {

    newArray=[];

    array.forEach((element, index) =>{
        if ( index >= a-1 && index < b){
            newArray.push(element);
        }
    });

    return newArray;
}

const newnumbers2 = forEachNumbers (numbers2, 1, 3);

console.log(newnumbers2);
