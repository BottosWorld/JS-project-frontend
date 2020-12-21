class API {
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my accounts/transactions
    static addTransactions(){
        fetch("http://localhost:3000/accounts")
        .then(resp => resp.json())
        .then(accounts => {
            accounts.forEach(account => {
                const{id, account_name, balance, account_type} = show
                new Show(id, account_name, balance, account_type)
            })
        })
    }
}