import { ref } from 'vue'

interface Category {
    name: string
    image: string
}

export const useCategory = () => {
    const categories = ref<Category[]>([
        {
            name: 'Orchids',
            image: '/assets/category/Succulents.png',
        },
        {
            name: 'Snake Plants',
            image: '/assets/category/Succulents.png',
        },
        {
            name: 'Bromeliads',
            image: '/assets/category/Succulents.png',
        },
        {
            name: 'Air Plants',
            image: '/assets/category/Succulents.png',
        },
        {
            name: 'Ficus',
            image: '/assets/category/Succulents.png',
        },
        {
            name: 'Succulents',
            image: '/assets/category/Succulents.png',
        },
    ])
    return {
        categories,
    }
}