import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"
// import uniqid from 'uniqid';

export const useProductStore = defineStore("products", {
    state: () => ({
        cart: useLocalStorage('cart', []),
        products: [
            {
                id: '0',
                title: 'Vans',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/vans.png'),
                price: 50
            },
            {
                id: '1',
                title: 'Melon Hat',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/hat.png'),
                price: 35
            },
            {
                id: '2',
                title: 'Dreamland Glasses',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/sunglasses.png'),
                price: 20
            },
            {
                id: '3',
                title: 'Flip Flops',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/flops.png'),
                price: 50
            },
            {
                id: '4',
                title: 'RVCA Hat',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/hat2.png'),
                price: 35
            },
            {
                id: '5',
                title: 'Smith Glasses',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/sunglasses2.png'),
                price: 20
            },
        ]
    }),
    getters: {
        cartAmount: (state) => {
            if(state.cart.length >= 99) return '99'
            return state.cart.length
        },
        cartTotal: (state) => {
            if(state.cart.length < 1) return

            const prices = state.cart.map(item => item.price)
            const total = prices.reduce((current, price) => current + price)
            return total
        },
        cartTable: (state) => {
            const table = {}
            state.cart.forEach((item) => {
                if(table[item.id]){
                    table[item.id]++ 
                } else {
                    table[item.id] = 1
                }
            })
            return table
        },
        cartUniq: (state) => {
            const uniq = []
            state.cart.forEach((item) => {
                const exists = uniq.some(i => i.id == item.id)
                if(!exists) uniq.push(item)
            })
            return uniq
        }
    },
    actions: {
        addToCart(id) {
            const item = this.products.find(item => item.id === id)
            this.cart = [...this.cart, item]
        },
    }
})