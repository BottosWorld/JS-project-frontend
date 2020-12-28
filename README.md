# Module 4 Project

* Single Page Application with rails API backend and JS frontend

* Find the rails api code [here](https://github.com/botto54/js-project-backend-rails-api)

array to shovel accounts into just like in ruby

Assignment: auto populate forms to show account name in select field, see code below that needs to be changed

<!-- <div class="input-field" id="account_id">
    <p><select name="account_id" id="account_id" class="account-name">
        <option value="none"selected>None</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
</select></p> -->

--set variable to dynamically add options to select:
let select_account = document.querySelector('select', 'account_options') || document.getElementById('account_options')

--displays [object Object] as select options, but gets the right number of options just no data shown:
Account.all.forEach(function(element,key) {
    select_account[key] = new Option(element,key);
});

or

for(index in Account.all) {
    select_account.options[select_account.options.length] = new Option(Account.all[index], index);
}

--iterate over account.all array to show each accounts' data:
interator = Account.all.values()
for(const value of iterator) { console.log(value)}

new html code, still need to get js code to dynamically add account options
        <!-- <div class="input-field">
            <p><select name="account_options" id="account_options" class="account_options">
        -->

The following functions and event listeners were used in index.js to dynamically add options to my select box, but with the click event listener I could not figure out how to limit populateSelectOptions to run just once... resulting in duplicate options.. until testing different events and debugger showed me my functions needed to be placed in the API file to run asynchronously..


    // document.getElementById('account_id').addEventListener('click', populateSelectOptions)
    // document.getElementById('create-transaction').addEventListener('submit', removeSelectOptions)

    // function populateSelectOptions(){

    //     for (i = 0; i < Account.all.length; i++) { 
    //         const selectAccount = document.querySelector('#account_id');
    //         const createAcctNameEle = document.createElement("OPTION");
    //         const acctNameText = document.createTextNode(Account.all[i].account_name);

    //         createAcctNameEle.id = Account.all[i].id;
    //         createAcctNameEle.value = Account.all[i].id;
    //         createAcctNameEle.appendChild(acctNameText);
    //         selectAccount.insertBefore(createAcctNameEle, selectAccount.lastChild)

    //     }

    // }

    // function removeSelectOptions(){
    //     const acctOptions = document.getElementById('account_id').options;
    //     acctOptions.length = 1
    // }

Messed around with the code below in my API.js file after using debugger to find out the functions above were out of sync with my API.. meaning my functions had to move into my api:addaccounts and createaccounts static functions:
            // debugger
            // function populateSelectOptions() {

                // debugger
                // let i
                // for (; i < Account.all.length; i++) { 
                    // let selectAccount = document.querySelector('#account_id');
                    // let createAcctNameEle = document.createElement("OPTION");
                    // let acctNameText = document.createTextNode(Account.all[i].account_name);

                    // document.createElement("OPTION").id += Account.all[i].account_name;
                    // document.createElement("OPTION").value = Account.all[i].id
                    // document.createElement("OPTION").appendChild(document.createTextNode(Account.all[i].account_name));
                    // document.querySelector('#account_id').insertBefore(document.createElement("OPTION"), document.querySelector('#account_id').lastChild);

                    // createAcctNameEle.id = Account.all[i].id;
                    // createAcctNameEle.value = Account.all[i].id;
                    // createAcctNameEle.appendChild(acctNameText);
                    // selectAccount.insertBefore(createAcctNameEle, selectAccount.lastChild)
                    // debugger
        //         }
            
        // })