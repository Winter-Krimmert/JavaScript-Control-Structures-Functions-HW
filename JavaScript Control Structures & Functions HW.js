
//Task 1
//Creating a variable to to represent the users login status. Emplemented a boolean value to represent the login status
let isLoggedIn = true; //Change to false to test the else statement

//Conditional Statement
//This conditional statement checks the login status before allowing items to be added to the cart
    if (isLoggedIn) { 
        console.log("Welcome to the site!");
    } else {
        console.log("Please log in to continue.");
    }   

//Task 2

let products = ["bread", "milk", "cheese", "eggs"]; //Array of products
let cart = []; //Empty cart array

//display available products
console.log("Available products: ", products);
for (let i = 0; i < products.length; i++) { //initializes a counter variable to 0 (i =0). i <product.length is the loop codition. 
// The loop will continue to run as long as i is less than the length of the products array. i++ increments the counter variable by 1 after each iteration.

console.log(`${i + 1}. ${products[i]}`); // the template literal '${i+1} allows embedding expressions inside a string.
// 'i+1' gives the product number starting at 1 instead of 0. 'products[i]' gives the product name.
//final output is a numbered list of products. '1. bread', '2. milk', '3. cheese', '4. eggs'.

}
//function to add products to the cart
function addToCart(productIndex) { //naming the function and using 'productIndex' as a parameter. 'productIndex' is the index of the product to be added to the cart.
    if (isLoggedIn) { // if else is contingent on the login status. If the user is logged in, the product will be added to the cart. If not, the user will be prompted to log in.
        cart.push(products[productIndex]); //pushes the product at the index 'productIndex' to the cart array. Adds to the end of the array 'cart' on which it is called.
        console.log('${products[productIndex]} has been added to your cart.'); //prints a template '${}' with an embedded expression within the template literal. 
        //will be evaluated and inserted into the resulting string.
    } else {
    console.log("Please log in to add items to cart.");
    }

}
//Extra credit: Using prompt() to add products to the cart
if (isloggedIn) {
    let productIndex = prompt("Enter the product number to add to cart: ") - 1; //calls the function addToCart with the productIndex as an argument. The productIndex is decremented by 1 to match the array index.
    if (productIndex >= 0 && productIndex < products.length) {
    addToCart(productIndex - 1);
    } else {

    console.log("Your cart: ", cart); //prints the contents of the cart array.
    }

}
//Calculating the total cost of the itens in the cart
let prices = [1.99, 2.99, 3.99, 4.99]; //Array of prices

//Function to calculate the total cost of the items in the cart
function calculateTotalCost() {
    let totalCost = 0; //initializes the totalCost variable to 0.
    for (let i = 0; i < cart.length; i++) {// initializes the loop counter 'i' to '0'. 'i < cart.length' sets the condition for the loop to run as long as 'i' is less than the length of the 'cart' array.
        let productIndex = products.indexOf(cart[i]); // declaring a product index variable. looping through the array via the cart index.
        totalCost += prices[productIndex]; //incrementing the totalCost by the price of the product at the index 'productIndex'.
}
    return totalCost; //returns the totalCost after the loop has finished running.

    //Display the total cost of the items in the cart
    if(cart.length > 0) { //checks if the cart is empty. If the cart is not empty, the total cost is calculated and displayed.
        console.log('Total cost: $, ${calculateTotalCost().toFixed(2)}'); // prints the total cost of the items in the cart. The toFixed() method formats the number to 2 decimal places.
    } else {
        console.log("Your cart is empty.");
    }
    }

    //Task 1
    // Create a function to handle deposits into a bank account.
    let balance = 0; //initializes the balance variable to 0.
    function deposit(amount) { //naming the function 'deposit' and using 'amount' as a parameter. 'amount' is the amount to be deposited.
        balance += amount; //increments the balance by the amount deposited.
        console.log('${amount} has been deposited into your account. New balance: ${balance.tofixed(2)}'); //prints a template literal with the amount deposited.
    }

    //Example deposit
    deposit(100); // $100 has been deposited into your account. New balance: ${balance.tofixed(2)'}; //prints the amount deposited and the new balance after the deposit.
    
    //Task 2
    // Create a function to handle withdrawals from a bank account. Ensure that the account has sufficient funds before allowing a withdrawal.
    function withdraw(amount) {
        if (amount <= balance) {
            balance -= amount; //decrements the balance by the amount withdrawn.
            console.log('Withdrew ${amount}. New balance: ${balance.tofixed(2)}'); //prints the amount withdrawn and the new balance after the withdrawal.
        }   else {
            console.log("Insufficient funds."); //prints a message indicating that the account has insufficient funds.
        }
    }
    // Task 3
    // Function for current balance. This function will return the current balance of the account.
    function checkBalance() {
        console.log('Current balance: ${balance.tofixed(2)}'); //prints the current balance of the account.
    }

    //Example balance check
    checkBalance(); //current balance: $100.00; //prints the current balance of the account.