// Write your solution in this file!
// Global variable declaration
var customerName = 'bob';

// 1. Access the global customerName
function returnsCustomerName() {
  return customerName;
}

// 2. Modify the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Set a global bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicit global declaration (no var/let/const)
}

// 4. Attempt to change a constant
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Will work if bestCustomer was not declared with const
}

// 5. Attempt to change a constant (should fail)
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // This will throw an error when called (which is what the test expects)
  leastFavoriteCustomer = 'someone else';
}