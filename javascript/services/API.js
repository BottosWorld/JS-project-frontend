class API {
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my accounts/transactions
    static addAccounts(){
        fetch("http://localhost:3000/accounts")
        .then(resp => resp.json())
        .then(accounts => {
            accounts.forEach(account => {
                const{id, account_name, balance, account_type} = account
                new Account(id, account_name, balance, account_type)
                Account.all.push(account)
            })
        })
        .then( () => {
            
            let i = 0
                for (; i < Account.all.length; i++) { 
                    
                    const selectAccount = document.querySelector('#account_id');
                    const createAcctNameEle = document.createElement("OPTION");
                    const acctNameText = document.createTextNode(Account.all[i].account_name);
        
                    createAcctNameEle.id = Account.all[i].id;
                    createAcctNameEle.value = Account.all[i].id;
                    createAcctNameEle.appendChild(acctNameText);
                    selectAccount.insertBefore(createAcctNameEle, selectAccount.lastChild)
        
                }
            
        })

    }

    static addTransactions(){
        fetch("http://localhost:3000/transactions")
        .then(resp => resp.json())
        .then(transactions => {
            transactions.forEach(transaction => {
                const{id, t_name, description, t_value, account_id} = transaction
                new Transaction(id, t_name, description, t_value, account_id)
            })
        })
    }

    static addAccount(e){
        e.preventDefault()
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
            Account.all.push(account)
            document.getElementById('create-account').reset()
        })
        .then( () => {
            const acctOptions = document.getElementById('account_id').options;
            acctOptions.length = 1
        })
        .then( () => {
            
            let i = 0
                for (; i < Account.all.length; i++) { 
                    
                    const selectAccount = document.querySelector('#account_id');
                    const createAcctNameEle = document.createElement("OPTION");
                    const acctNameText = document.createTextNode(Account.all[i].account_name);
        
                    createAcctNameEle.id = Account.all[i].id;
                    createAcctNameEle.value = Account.all[i].id;
                    createAcctNameEle.appendChild(acctNameText);
                    selectAccount.insertBefore(createAcctNameEle, selectAccount.lastChild)
        
                }
            
        })
    }

    static addTransaction(e){
        e.preventDefault()
        let data = {
            'id': e.target.id.value,
            't_name': e.target.t_name.value,
            'description': e.target.description.value,
            't_value': e.target.t_value.value,
            'account_id': e.target.account_id.value
        }
        fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(transaction => {
            const { id, t_name, description, t_value, account_id } = transaction
            new Transaction(id, t_name, description, t_value, account_id)
            document.getElementById('create-transaction').reset()
        })
    }
}