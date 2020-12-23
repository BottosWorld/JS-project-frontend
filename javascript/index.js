document.addEventListener("DOMContentLoaded", function(){
    // do whatever has to happen first in your application
    // for our application, we're going to need to load in our accounts
    // this looks like a get fetch request to our back end to load in the accounts. This will live in the API class. 
    API.addAccounts()
    API.addTransactions()
    // If we have any event listeners that need to get appended to the page when it loads, they should get appendeded here too.
    document.getElementById('create-account').addEventListener('submit', API.addAccount)
    document.getElementById('create-transaction').addEventListener('submit', API.addTransaction)
})