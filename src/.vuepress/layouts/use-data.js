import { ref ,computed} from 'vue'
import us from '../public/us.png'   

export const useData = () => {
    // 产品数据
    const products = ref([
        {
            name: 'Euphorbia actinoclada',
            species: 'Euphorbia actinoclada',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '独特的多肉植物，具有美丽的形态和耐旱特性',
            image: us,
            isForDisplay: true
        },
        {
            name: 'Euphorbia actinoclada',
            species: 'Euphorbia actinoclada',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '独特的多肉植物，具有美丽的形态和耐旱特性',
            image: us,
            isForDisplay: true
        },
        {
            name: 'Euphorbia aff. polyantha',
            species: 'Euphorbia aff. polyantha',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 36 },
                { quantity: '21-50', price: 33 },
                { quantity: '51+', price: 31 }
            ],
            averagePrice: 33.33,
            description: '稀有的多肉植物品种，形态独特，适合收藏',
            image: us,
            isForDisplay: true
        },
        {
            name: 'Euphorbia aff. similiramea',
            species: 'Euphorbia aff. similiramea',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 20 },
                { quantity: '21-50', price: 17 },
                { quantity: '51+', price: 15 }
            ],
            averagePrice: 17.33,
            description: '经济实惠的多肉植物，适合初学者种植',
            image: us,
            isForDisplay: true
        },
        {
            name: 'Euphorbia agatheae',
            species: 'Euphorbia agatheae',
            PotDiameter: '8.5CM',
            priceRanges: [
                { quantity: '2-20', price: 33 },
                { quantity: '21-50', price: 30 },
                { quantity: '51+', price: 28 }
            ],
            averagePrice: 30.33,
            description: '较大规格的多肉植物，形态优美，适合装饰',
            image: us,   
            isForDisplay: true
        },
    ])

    const displayProducts = computed(() => {
        return products.value.filter(product => product.isForDisplay === true)
    })

    // Shop By Collection 数据
    const collections = ref([
        {
            name: 'Best Sellers',
            image: us, // 这里需要替换为实际图片路径
        },
        {
            name: 'Plant Gifts',
            image: us,
        },
        {
            name: 'Pet Friendly',
            image: us,
        },
        {
            name: 'Smart Watering',
            image: us,
        },
        {
            name: 'Easy Care',
            image: us,
        },
        {
            name: 'Plant Care',
            image: us,
        },
    ])

    // Shop By Plant Type 数据
    const plantTypes = ref([
        {
            name: 'Orchids',
            image: us, // 这里需要替换为实际图片路径
        },
        {
            name: 'Snake Plants',
            image: us,
        },
        {
            name: 'Bromeliads',
            image: us,
        },
        {
            name: 'Air Plants',
            image: us,
        },
        {
            name: 'Ficus',
            image: us,
        },
        {
            name: 'Succulents',
            image: us,
        },
    ])

    return {
        products,
        displayProducts,
        collections,
        plantTypes,
    }
}