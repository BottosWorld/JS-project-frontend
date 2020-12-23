class Transaction {
    constructor(id, t_name, description, value, account_id){
        this.id = id
        this.t_name = t_name
        this.description = description
        this.value = value
        this.account_id = account_id
        this.renderTransaction()
    }

    renderTransaction(){
        const transactionHolder = document.getElementById('transaction-list')
        const transactionContainer = document.createElement('div')
        transactionContainer.dataset.id = this.id
        transactionContainer.id = this.id
        transactionContainer.classList.add = 'all-transactions'
        transactionContainer.innerHTML += this.transactionHTML()
        transactionHolder.appendChild(transactionContainer)

        transactionContainer.addEventListener("click", e => {
            if (e.target.className === "edit-transaction-button") this.editTransaction(e)
            if (e.target.className === "delete-transaction-button") this.deleteTransaction(e)
        } )
    }

    transactionHTML(){
        return `
        <h2 class="t-name">${this.t_name}</h2>
        <h3 class="value">$ ${this.value}</h3>
        <p class="description">${this.description}</p>
        <p class="assign-account">${this.account_id}</p>
        <button type="button" class="edit-transaction-button" data-id=${this.id}>Edit</button>
        <button type="button" class="delete-transaction-button" data-id=${this.id}>Delete</button>
         `
    }

    editTransaction(e){

    }

    deleteTransaction(e){

    }
}