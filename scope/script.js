

// scope

// let globalVariable = "i'm global variable";

// let showVariable = () =>{
//     console.log(globalVariable);
// }

// showVariable();
// console.log(globalVariable);


let showLocalVariable = function() {
    let localVariable = "i'm local variable";
    console.log(localVariable); 
}

showLocalVariable();
// console.log(localVariable);  // error localVariable is not defined


// block scope

if (true) {
    let blockVariable = "i'm block variable";
    console.log(blockVariable); 
}
// console.log(blockVariable);  // error blockVariable is not defined


{
    const blockConst = "i'm block const";
    console.log(blockConst);

    function calculateTotall(price , quantity){
    let totall = price *quantity
     console.log(`qimaha waa: ${totall}`);
     }

    //  declared waa uu u shaqeyaa dibada 

}

calculateTotall(20,4);


{
    let xisaabinLacag  = (deyn ,lacag) => {
        if (deyn > lacag){
            return `Deynta laguu lee yahay waa: ${deyn - lacag}`;
        }else {
            return `Wax deyn ah laguu lee yahay ma jiro : ${lacag - deyn} `;
        };
    }

   console.log(xisaabinLacag(5000,4000));
}