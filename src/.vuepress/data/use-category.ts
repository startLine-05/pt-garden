import { ref } from 'vue'
import { getImagePath } from '../utils/index.js'

const getCategoryImagePath = getImagePath('category')

interface Category {
    name: string
    image: string
}

export const useCategory = () => {
    const categories = ref<Category[]>([
        {
            name: 'Orchids',
            image: getCategoryImagePath('Succulents.png'),
        },
        {
            name: 'Snake Plants',
            image: getCategoryImagePath('Succulents.png'),
        },
        {
            name: 'Bromeliads',
            image: getCategoryImagePath('Succulents.png'),
        },
        {
            name: 'Air Plants',
            image: getCategoryImagePath('Succulents.png'),
        },
        {
            name: 'Ficus',
            image: getCategoryImagePath('Succulents.png'),
        },
        {
            name: 'Succulents',
            image: getCategoryImagePath('Succulents.png'),
        },
    ])
    return {
        categories,
    }
}