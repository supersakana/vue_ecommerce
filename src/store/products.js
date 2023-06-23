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
                price: 50, 
                quantity: 0
            },
            {
                id: '1',
                title: 'Melon Hat',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/hat.png'),
                price: 35,
                quantity: 0
            },
            {
                id: '2',
                title: 'Dreamland Glasses',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/sunglasses.png'),
                price: 20,
                quantity: 0
            },
            {
                id: '3',
                title: 'Flip Flops',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/flops.png'),
                price: 50,
                quantity: 0
            },
            {
                id: '4',
                title: 'RVCA Hat',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/hat2.png'),
                price: 35,
                quantity: 0
            },
            {
                id: '5',
                title: 'Smith Glasses',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/sunglasses2.png'),
                price: 20,
                quantity: 0
            },
        ]
    }),
    getters: {
        cartAmount: (state) => {
            if(state.cart.length >= 99) return '99'
            if(state.cart.length < 1) return

            const quantities = state.cart.map(item => item.quantity)
            return quantities.reduce((current, qnt) => current + qnt)
        },
        cartTotal: (state) => {
            if(state.cart.length < 1) return

            const prices = state.cart.map(item => item.price * item.quantity)
            const total = prices.reduce((current, price) => current + price)
            return total
        },
    },
    actions: {
        addToCart(id) {
            if(this.cart.map(item => item.id).includes(id)){
                this.cart.find(item => item.id == id).quantity++
            } else {
                const newItem = this.products.find(item => item.id === id)
                newItem.quantity++
                this.cart = [...this.cart, newItem]
            }
        },
        removeFromCart(id) {
            const updated = this.cart

            updated.find(item => item.id == id).quantity--
            this.cart = updated
        },
        removeAll(id){
            const updated = this.cart

            this.products.find(item => item.id == id).quantity = 0
            this.cart = updated.filter(item => item.id !== id)
        }
    }
})