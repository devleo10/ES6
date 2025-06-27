/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/
function khabo(food="something"){
    console.log(`I'm going to buy ${food} from the grocery shop.`);
    
}
khabo("mutton");


// In JavaScript, default parameters allow you to specify default values for function parameters. When a function
//  is called and arguments are not provided for parameters with default values, those default values are used instead. 
// This feature provides flexibility by allowing functions to be called with fewer arguments.