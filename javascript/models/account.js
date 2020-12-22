class Account {
    constructor(id, account_name, balance, account_type){
        this.id = id
        this.account_name = account_name
        this.balance = balance
        this.account_type = account_type
        this.renderAccount()
    }

    //render instance method here to create div, append to page, and add classes/crud form to edit/eventlisteners

    renderAccount(){
        const accountHolder = document.getElementById("account-list")
        const accountContainer = document.createElement('div')
        accountContainer.dataset.id = this.id
        accountContainer.id = this.id
        accountContainer.classList.add = 'account-history'
        accountContainer.innerHTML += this.accountHTML()
        accountHolder.appendChild(accountContainer)

        accountContainer.addEventListener("click", e => {
            if (e.target.className === "transaction-button") this.createTransactions(e)
            if (e.target.className === "add-funds-button") this.addFunds(e)
        } )

    }

    accountHTML(){
        return `
        <h2 class="account-name">${this.account_name}</h2>
        <h3 class="balance">$ ${this.balance} <button type="button" class="add-funds-button" data-id=${this.id}>Add Funds</button></h3>
        <h4 class="account-type">${this.account_type}</h4> 
        <button type="button" class="transaction-button" data-id=${this.id}>See the transaction history for this account!</button>
         `
    }

    createTransactions(e){
        let id = e.target.dataset.id
        //add fetch request to retrieve transactions per account(account transaction history) scope out transactions charges and credits for assigned account

    }

    addFunds(e){
        let id = e.target.dataset.value
    }
}
