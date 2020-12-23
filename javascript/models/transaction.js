class Transaction {
    constructor(id, t_name, description, t_value, account_id){
        this.id = id
        this.t_name = t_name
        this.description = description
        this.t_value = t_value
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
        <h3 class="t_value">$ ${this.t_value}</h3>
        <p class="description">${this.description}</p>
        <p class="assign-t">${this.account_id}</p>
        <button type="button" class="edit-transaction-button" data-id=${this.id}>Edit</button>
        <button type="button" class="delete-transaction-button" data-id=${this.id}>Delete</button>
         `
    }

    editTransaction(e){
        let id = e.target.dataset.id
        fetch("http://localhost:3000/accounts/" + `${this.account_id}` + "/transactions/" + `${id}`, {
            method: 'PATCH',
            
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                t_name: `${this.t_name}`,
                t_value: `${this.t_value}`,
                description: `${this.description}`,
                account_id: `${this.account_id}`
            })
        })
        .then(resp => resp.json())
        .then(json => console.log(json))
        // .then(transaction => {
            
        // })

    }

    deleteTransaction(e){
        let id = e.target.dataset.id
        fetch("http://localhost:3000/transactions/" + `${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById('transaction-list').removeChild(document.getElementById(id))
          })
    }
}