import { ref } from 'vue'
import { getImagePath } from '../utils/index.js'

const getCollectionImagePath = getImagePath('collection')

interface Collection {
    name: string
    image: string
}

export const useCollection = () => {
    const collections = ref<Collection[]>([
        {
            name: 'Best Sellers',
            image: getCollectionImagePath('balcony.png'),
        },
        {
            name: 'Plant Gifts',
            image: getCollectionImagePath('balcony.png'),
        },
        {
            name: 'Pet Friendly',
            image: getCollectionImagePath('balcony.png'),
        },
        {
            name: 'Smart Watering',
            image: getCollectionImagePath('balcony.png'),
        },
        {
            name: 'Easy Care',
            image: getCollectionImagePath('balcony.png'),
        },
        {
            name: 'Plant Care',
            image: getCollectionImagePath('balcony.png'),
        },
    ])
    return {
        collections,
    }
}