

// array methods

    /*  
       
    push : add elements to the end of array = ku dar elements ka dhamaadka arrayga
    pop : removes the last elements in the array = waxa uu sarayaa elementiga u dambye ee ku jira araayga
    unshift : adds elements to the beggin of an array = ku dar elementiga bilowga arrayga
    shift : removes the first elemts of an array  = ka saar elemntiga ugu horeeya ee arrayga

    length : returnd the number of elements in an array = waxay soo celi saa nmberada elementiska ku jira arrayga 
    
    */


    let fruits = ["banana", 'limon' ,"watermelon"];
     //   push
    fruits.push("melon");
    console.log(fruits);
    //  pop
    fruits.pop();
    console.log(fruits);

    // unshift
    fruits.unshift("ananas");
    console.log(fruits);

  //  shift
   fruits.shift();
   console.log(fruits);

   console.log(fruits.length);
