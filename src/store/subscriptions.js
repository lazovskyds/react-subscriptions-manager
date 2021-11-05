import { makeAutoObservable } from 'mobx';

class Subscriptions{
    constructor() {
        makeAutoObservable(this)
    }

    list = [
        {name: 'YouTube', price: 7.19, date: 15, important: false, id: 'YouTube'},
        {name: 'Spotify', price: 4.99, date: 7, important: false, id: 'Spotify'},
        {name: 'Netflix', price: 7.99, date: 12, important: true, id: 'Netflix'},
        {name: 'Yandex', price: 2, date: 20, important: false, id: 'Yandex'}
    ]

    filter = ''

    statusToggler = 'ALL'

    addNewSubscription(name, price, date, important) {
        this.list.push({name, price, date, important, id: name})
    }

    removeSubscription(id) {
        const index = this.list.findIndex(item => item.id === id)
        this.list.splice(index, 1)
    }

    toggleImportantStatus(id) {
        const index = this.list.findIndex(item => item.id === id)
        this.list[index].important = !this.list[index].important
    }

    removeAllSubscriptions() {
        this.list = []
    }

    updateFilter(string) {
        this.filter = string
    }

    updateStatusToggler(string) {
        this.statusToggler = string
    }

    get visibleSubscriptions() {
        switch (this.statusToggler) {
            case 'ALL':
                return this.list.filter(item => item.name.includes(this.filter))
            case 'IMPORTANT':
                return this.list.filter(item => item.important === true && item.name.includes(this.filter))
            default:
                return this.list
        }
    }

    get listCounter() {
        return this.list.length
    }

    get importantCounter() {
        return this.list.filter(item => item.important === true).length
    }

    get totalValue() {
        return this.list.reduce((acc, item) => item.price + acc, 0)
    }
}

export default new Subscriptions()