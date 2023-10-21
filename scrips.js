//Hoisting 
// The process by which the JS engine moves variable declarations to the top of their scope, allocating memory for them before reaching the line of code where they are declared. For variables declared with var, they are initialized to undefined until reaching the line of code that initializes the variable. For variables declared with let or const, the variable is not initialized and thus cannot be accessed before the line of code that initializes it. For example:

//console.log(varNum);// undefined
//console.log(letNum);// reference error - does not exist until its declaration at the end of the program 


function test() {
    const constNum = 0;

        var varNum = 5;//var is scoped to the function
        let letNum = 5;//let is scoped to the block
    
        console.log('varNUm',varNum);
        console.log('letNum',letNum);
        console.log('constNum', constNum)
}

test();