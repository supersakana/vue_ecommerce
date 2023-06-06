import { defineStore } from 'pinia'
import uniqid from 'uniqid';

export const useProductStore = defineStore("products", {
    state: () => ({
        products: [
            {
                id: uniqid(),
                title: 'Item 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                id: uniqid(),
                title: 'Item 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                id: uniqid(),
                title: 'Item 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                id: uniqid(),
                title: 'Item 4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
        ]
    }),
    getters: {
    },
    actions: {
    }
})