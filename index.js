// Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// Function to upper case the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'some initial value';

// Function to change leastFavoriteCustomer (this will throw an error)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // This line will throw an error
}
