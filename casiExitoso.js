const a= parseInt(prompt("ingresa tu primer numero"))
const b= parseInt(prompt("ingresa tu segundo numero"))
const c= parseInt(prompt("ingresa tu  tercer numero"))
// entrada de numeros


// imprimir cuando las entradas son iguales
if (a==b || a==c || b==c){
    console.log( "hay 2 numeros  iguales") 
}

// calculo mayor, menor e intermedio
if(a>b && b>c){
    console.log(a,b,c)
    console.log(c,b,a)
   } 

if (a>c && c>b){
    console.log(a,c,b)
    console.log(b,c,a)
} 

if(b>a && a>c){
    console.log(b,a,c)
    console.log(c,a,b)
}  

if (b>c && c>a){
    console.log(b,c,a)
    console.log(a,c,b)
}  


if(c>b && b>a){
    console.log(c,b,a)
    console.log(a,b,c)
} 
if (c>a && a>b){
    console.log(c,a,b)
    console.log(b,a,c)}
    




// funcion para repetir numero

// function igual(a,b,c){
//     while(a==b || a==c || b==c){
//     console.log( "hay 2 numeros  iguales") 
// break}
// }


// // imprimo mensaje de repeticion de numero

// if(a==c){
//     console.log(a,`y`, c , "son iguales")
// }

// if(b==a){
//     console.log(b,`y`, a , "son iguales")
// }

// if(c==b){
//     console.log(c,`y`, b , "son iguales")
// }






    //  console.log("el numero mayor es: ", a)
    //  else if(b>c){
        
    //  }
    // } else if (a>b && a>c ||(c>b)){
    // console.log("el numero mayor es: ", a)
    // console.log("el numero de intermedio es: ", c)
    //   console.log("el numero menor es: ", b)
    // }