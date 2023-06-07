import { defineStore } from 'pinia'
import uniqid from 'uniqid';

export const useProductStore = defineStore("products", {
    state: () => ({
        products: [
            {
                id: uniqid(),
                title: 'Vans',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/vans.png'),
                price: 50
            },
            {
                id: uniqid(),
                title: 'Melon Hat',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/hat.png'),
                price: 35
            },
            {
                id: uniqid(),
                title: 'Dreamland Glasses',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/sunglasses.png'),
                price: 20
            },
            {
                id: uniqid(),
                title: 'Flip Flops',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/flops.png'),
                price: 50
            },
            {
                id: uniqid(),
                title: 'RVCA Hat',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/hat2.png'),
                price: 35
            },
            {
                id: uniqid(),
                title: 'Smith Glasses',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: require('../assets/items/sunglasses2.png'),
                price: 20
            },
        ]
    }),
    getters: {
    },
    actions: {
    }
})