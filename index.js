// Declare customerName to be bob in global scope
window.customerName = 'bob';

// Define function upperCaseCustomerName
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

// Define function setBestCustomer
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Define function overwriteBestCustomer
function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

// Define constant variable leastFavoriteCustomer
const leastFavoriteCustomer = 'someone';

// Define function changeLeastFavoriteCustomer (which throws an error when trying to reassign a constant variable)
function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}
