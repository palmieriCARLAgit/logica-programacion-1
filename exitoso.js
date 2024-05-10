const n1= parseInt(prompt("numero"))
const n2=  parseInt(prompt("numero"))
const n3=  parseInt(prompt("numero"))

const nmenor=Math.min(n1, n2, n3)
// Math.abs(n1, n2, n3)
const nmax=Math.max(n1 ,n2 ,n3)
const medio=n1+ n2 + n3 - nmax - nmenor


 if (n1==n2 ){
    console.log(n1, " es igual a ", n2)
 } else if(n1==n3){
    console.log(n1, " es igual a ", n3)
 } else if(n2==n3){
    console.log(n2, " es igual a ", n3)
 }
 console.log("El orden de los números de menor a mayor es:", nmenor, medio, nmax);
console.log("El orden de los números de mayor a menor es:", nmax, medio, nmenor);
