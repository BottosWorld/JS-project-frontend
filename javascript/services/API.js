class API {
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my accounts/transactions
    static addAccounts(){
        fetch("http://localhost:3000/accounts")
        .then(resp => resp.json())
        .then(accounts => {
            accounts.forEach(account => {
                const{id, account_name, balance, account_type} = account
                new Account(id, account_name, balance, account_type)
            })
        })
    }

    static addTransactions(){
        fetch("http://localhost:3000/transactions")
        .then(resp => resp.json())
        .then(transactions => {
            transactions.forEach(transaction => {
                const{id, t_name, description, value, account_id} = transaction
                new Transaction(id, t_name, description, value, account_id)
            })
        })
    }

    static addAccount(e){
        e.preventDefault()
        // capture our form data
        let data = {
            'id': e.target.id.value,
            'account_name': e.target.account_name.value,
            'balance': e.target.balance.value,
            'account_type': e.target.account_type.value
        }
        fetch('http://localhost:3000/accounts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(account => {
            const { id, account_name, balance, account_type } = account
            new Account(id, account_name, balance, account_type)
            document.getElementById('create-account').reset()
        })
    }

    // static addTransaction(e){
    //     e.preventDefault()
    //     // capture our form data
    //     let data = {
    //         'id': e.target.id.value,
    //         't_name': e.target.t_name.value,
    //         'description': e.target.description.value,
    //         'value': e.target.value.value,
    //         'account_id': e.target.account_id.value
    //     }
    //     return data;
    // }
}