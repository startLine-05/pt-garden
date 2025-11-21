import { ref } from 'vue'

interface Category {
    name: string
    image: string
}

export const useCategory = () => {
    const categories = ref<Category[]>([
        {
            name: 'Best Sellers',
            image: '/ac.png',
        },
    ])
    return {
        categories,
    }
}