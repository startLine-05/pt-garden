import { ref } from 'vue'

interface Collection {
    name: string
    image: string
}

export const useCollection = () => {
    const collections = ref<Collection[]>([
        {
            name: 'Best Sellers',
            image: '/assets/collection/balcony.png',
        },
        {
            name: 'Plant Gifts',
            image: '/assets/collection/balcony.png',
        },
        {
            name: 'Pet Friendly',
            image: '/assets/collection/balcony.png',
        },
        {
            name: 'Smart Watering',
            image: '/assets/collection/balcony.png',
        },
        {
            name: 'Easy Care',
            image: '/assets/collection/balcony.png',
        },
        {
            name: 'Plant Care',
            image: '/assets/collection/balcony.png',
        },
    ])
    return {
        collections,
    }
}