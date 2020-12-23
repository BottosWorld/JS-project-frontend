class Account {

    constructor(id, account_name, balance, account_type){
        this.id = id
        this.account_name = account_name
        this.balance = balance
        this.account_type = account_type
        this.renderAccount()
    }

    //render instance method here to create div, append to page, and add classes/crud form to edit/eventlisteners

    
    accountTransactions(e){
        let id = e.target.dataset.id
        //add fetch request to retrieve transactions per account(account transaction history) scope out transactions charges and credits for assigned account
        fetch("http://localhost:3000/accounts/" + `${id}` + "/transactions")
        .then(resp => resp.json())
        // .then(console.log)
        .then(transactions => {
            transactions.forEach(transaction => {
                const{id, t_name, description, t_value, account_id} = transaction
                new Transaction(id, t_name, description, t_value, account_id)
                // const accountTransHolder = document.getElementById('transaction-list')
                // const accountTransContainer = document.createElement('div')
                // accountTransContainer.dataset.id = Transaction[0]
                // accountTransContainer.id = Transaction[0]
                // accountTransContainer.classList.add = 'account-history'
                // accountTransContainer.innerHTML += Transaction.prototype.transactionHTML()
                // accountTransHolder.appendChild(accountTransContainer)
                // // accountContainer.appendChild(accountTransHolder)
                // Transaction.prototype.transactionHTML
            })
        })
    }

    renderAccount(){

        const accountHolder = document.getElementById("account-list")

        const accountContainer = document.createElement('div')
        
        accountContainer.dataset.id = this.id
        accountContainer.id = this.id
        accountContainer.classList.add = 'account-data'
        accountContainer.innerHTML += this.accountHTML()
    
        accountHolder.appendChild(accountContainer)

        // const accountTransHolder = document.getElementById('transaction-list', `${this.id}`)
        // const accountTransContainer = document.createElement('div')
        // accountTransContainer.dataset.id = this.id
        // accountTransContainer.id = this.id
        // accountTransContainer.classList.add = 'account-history'
        // accountTransContainer.innerHTML += Transaction.prototype.transactionHTML()
        // // accountContainer.appendChild(accountTransContainer)
        // accountTransHolder.appendChild(accountTransContainer)
        // accountContainer.appendChild(accountTransHolder)

        accountContainer.addEventListener("click", e => {
            if (e.target.className === "transaction-button") this.accountTransactions(e)
                // const accountTransHolder = document.getElementById('transaction-list', `${this.id}`)
                // const accountTransContainer = document.createElement('div')
                // accountTransContainer.dataset.id = this.id
                // accountTransContainer.id = this.id
                // accountTransContainer.classList.add = 'account-history'
                // accountTransContainer.innerHTML += Transaction.prototype.transactionHTML()
                // accountTransHolder.appendChild(accountTransContainer)
                // accountContainer.appendChild(accountTransHolder)
                // debugger

            if (e.target.className === "add-funds-button") this.addFunds(e)
        } )

    }

    accountHTML(){
        return `
        <h2 class="account-name">${this.account_name}, ID #${this.id}</h2>
        <h3 class="balance">$ ${this.balance} <button type="button" class="add-funds-button" data-id=${this.id}>Add Funds</button></h3>
        <h4 class="account-type">${this.account_type}</h4> 
        <button type="button" class="transaction-button" data-id=${this.id}>See the transaction history for this account!</button>
         `
    }



    addFunds(e){
        let id = e.target.dataset.id
        fetch("http://localhost:3000/accounts/" + `${id}`)
        .then(resp => resp.json())
    }
}
