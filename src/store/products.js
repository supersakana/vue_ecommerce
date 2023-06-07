import { defineStore } from 'pinia'
// import uniqid from 'uniqid';

export const useProductStore = defineStore("products", {
    state: () => ({
        cart: [],
        products: [
            {
                id: 0,
                title: 'Vans',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/vans.png'),
                price: 50
            },
            {
                id: 1,
                title: 'Melon Hat',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/hat.png'),
                price: 35
            },
            {
                id: 2,
                title: 'Dreamland Glasses',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/sunglasses.png'),
                price: 20
            },
            {
                id: 3,
                title: 'Flip Flops',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/flops.png'),
                price: 50
            },
            {
                id: 4,
                title: 'RVCA Hat',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/hat2.png'),
                price: 35
            },
            {
                id: 5,
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
        }
    },
    actions: {
        addToCart(id) {
            const item = this.products.find(item => item.id === id)
            this.cart = [...this.cart, item]
        },
    }
})