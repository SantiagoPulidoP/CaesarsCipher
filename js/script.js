/* var palabra = "SERR PBQR PNZC"; */


var encode = function(){
    var palabra = document.getElementById("value").value;
    var codificado = "";
    palabra = palabra.toUpperCase();

    document.getElementById("value").value = "";
    
    //Store each letter from the word entered in an array 
    var palabra_arr = [];
    for(let i = 0; i<palabra.length; i++){
        /* if(!notAllowed.includes(palabra[i])) */
            palabra_arr.push(palabra[i]);
    }
    
    
    
    
    
    var cifrados = [ 
        {main:'A',replace:'N'},
        {main:'B',replace:'O'},
        {main:'C',replace:'P'},
        {main:'D',replace:'Q'},
        {main:'E',replace:'R'},
        {main:'F',replace:'S'},
        {main:'G',replace:'T'},
        {main:'H',replace:'U'},
        {main:'I',replace:'V'},
        {main:'J',replace:'W'},
        {main:'K',replace:'X'},
        {main:'L',replace:'Y'},
        {main:'M',replace:'Z'}
     ]; 
    
    
     for(let i= 0; i<palabra_arr.length; i++){
        for(let j=0; j<cifrados.length; j++){
            let val = cifrados[j]["main"];
            if(palabra_arr[i]===val){
                palabra_arr[i]=cifrados[j].replace;
    
            }else if (palabra_arr[i]===cifrados[j].replace){
                palabra_arr[i]=cifrados[j].main;
            }
               
     }
    
    }
    
    console.log(palabra_arr);
    
    for(let k =0 ; k<palabra_arr.length ; k++){
        
        codificado+=palabra_arr[k];   
    }
    
    /* console.log(codificado); */
    document.querySelector(".outcome").innerHTML = `Encoded: ${codificado}`;
    document.querySelector(".outcome").style.display = "block";





}





document.getElementById("submit").addEventListener("click",encode);