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