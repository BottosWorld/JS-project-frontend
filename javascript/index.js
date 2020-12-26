document.addEventListener("DOMContentLoaded", function(){
    // do whatever has to happen first in your application
    // for our application, we're going to need to load in our accounts
    // this looks like a get fetch request to our back end to load in the accounts. This will live in the API class. 
    API.addAccounts()
    API.addTransactions()
    // If we have any event listeners that need to get appended to the page when it loads, they should get appendeded here too.
    document.getElementById('create-account').addEventListener('submit', API.addAccount)
    document.getElementById('create-transaction').addEventListener('submit', API.addTransaction)
    document.getElementById('change-header').addEventListener('click', changeHeader)
    document.getElementById('account_id').addEventListener('click', populateSelectOptions)

    function changeHeader(){
        document.querySelector('h1').innerText = "San deamos Football Rules"    
    }

    function populateSelectOptions(){
        for (i = 0; i < Account.all.length; i++) { 
            const selectAccount = document.querySelector('#account_id')
            const createAcctNameEle = document.createElement("OPTION");
            const acctNameText = document.createTextNode(Account.all[i].account_name);
            // createAcctNameEle.dataset.id = Account.all[i].id
            createAcctNameEle.value = Account.all[i].id
            createAcctNameEle.appendChild(acctNameText);
            selectAccount.insertBefore(createAcctNameEle, selectAccount.lastChild)
        }
    }
    // function accountOptions(){
    //     document.querySelector('select', 'account_options').innerText

    // }

    // document.querySelector('select', 'account_id').options = Account.all.account_name
})