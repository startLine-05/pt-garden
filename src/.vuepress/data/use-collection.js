import { ref } from 'vue'

interface Collection {
    name: string
    image: string
}

export const useCollection = () => {
    const collections = ref<Collection[]>([
        {
            name: 'Best Sellers',
            image: '/ac.png',
        },
    ])
    return {
        collections,
    }
}