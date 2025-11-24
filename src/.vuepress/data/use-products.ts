// 产品数据
import { ref, computed } from 'vue'
import Euphorbia from '../public/assets/products/Euphorbia.png'

// 价格范围类型
interface PriceRange {
    quantity: string
    price: number
}

type Tag = 'New' | 'HOT'


// 产品接口定义
export interface Product {
    // 名称
    name: string
    // 封面图片
    cover: string
    // 简短描述
    description: string
    // 详细描述
    detailDescription?: string
    // 所属分类
    category: string
    // 收藏collection（可以属于多个collection）
    collection: string[]
    // 标签
    tags: Tag[]
    // 价格（支持价格范围或固定价格）
    price: number
    priceRanges?: PriceRange[]
    [key: string]: any
}

export const useProducts = () => {
    const products = ref<Product[]>([
        {
            name: 'Euphorbia actinoclada',
            cover: Euphorbia,
            description: 'A unique succulent with a beautiful shape and drought tolerance.',
            detailDescription: 'Euphorbia actinoclada is a unique succulent native to Africa. It has a beautiful shape and excellent drought tolerance, making it ideal for indoor growing. This slow-growing plant has an elegant form and is an ideal choice for plant collectors.',
            category: 'Succulents',
            collection: ['Best Sellers', 'Easy Care'],
            price: 30,
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            tags: ['New', 'HOT'],
            species: 'Euphorbia actinoclada',
            PotDiameter: '6.5CM',
            isForDisplay: true,
            averagePrice: 27.33
        },
        {
            name: 'Aloe Vera',
            cover: '/suc.png',
            description: 'A succulent with medicinal properties.',
            detailDescription: 'Aloe Vera is a succulent plant species of the genus Aloe. It is widely known for its medicinal properties and is used in many consumer products.',
            category: 'Succulents',
            collection: ['Easy Care', 'Medicinal'],
            price: 15,
            priceRanges: [
                { quantity: '1-10', price: 15 },
                { quantity: '11-30', price: 12 },
            ],
            tags: ['HOT'],
            species: 'Aloe Vera',
            PotDiameter: '10CM',
            isForDisplay: true,
            averagePrice: 13.50
        },
        {
            name: 'Snake Plant',
            cover: '/ac.png',
            description: 'Low maintenance and great for air purification.',
            detailDescription: 'The snake plant, or Sansevieria trifasciata, is a popular houseplant known for its ability to survive in low light and with infrequent watering. It also helps purify the air.',
            category: 'Houseplants',
            collection: ['Best Sellers', 'Easy Care'],
            price: 25,
            tags: [],
            species: 'Sansevieria trifasciata',
            PotDiameter: '12CM',
            isForDisplay: true,
            averagePrice: 25.00
        },
        {
            name: 'Monstera Deliciosa',
            cover: '/display.png',
            description: 'A tropical plant with distinctive split leaves.',
            detailDescription: 'Monstera Deliciosa, also known as the Swiss Cheese Plant, is a popular houseplant with large, glossy leaves that develop unique splits and holes as they mature.',
            category: 'Houseplants',
            collection: ['Best Sellers', 'Plant Gifts'],
            price: 45,
            priceRanges: [
                { quantity: '1-5', price: 45 },
                { quantity: '6-15', price: 40 },
            ],
            tags: ['New'],
            species: 'Monstera deliciosa',
            PotDiameter: '15CM',
            isForDisplay: true,
            averagePrice: 42.50
        },
        {
            name: 'Pothos Golden',
            cover: '/bg.png',
            description: 'Easy-care trailing plant perfect for beginners.',
            detailDescription: 'Pothos Golden is one of the easiest houseplants to grow, with heart-shaped leaves variegated with golden yellow. It thrives in various lighting conditions and is perfect for hanging baskets.',
            category: 'Houseplants',
            collection: ['Easy Care', 'Pet Friendly'],
            price: 18,
            tags: ['HOT'],
            species: 'Epipremnum aureum',
            PotDiameter: '10CM',
            isForDisplay: true,
            averagePrice: 18.00
        },
        {
            name: 'Fiddle Leaf Fig',
            cover: '/my.png',
            description: 'A popular indoor tree with large, violin-shaped leaves.',
            detailDescription: 'The Fiddle Leaf Fig (Ficus lyrata) is a popular indoor tree featuring very large, heavily veined, and glossy violin-shaped leaves that grow upright on a sleek trunk.',
            category: 'Trees',
            collection: ['Featured'],
            price: 75,
            tags: ['New'],
            species: 'Ficus lyrata',
            PotDiameter: '25CM',
            isForDisplay: false,
            averagePrice: 75.00
        }
    ])

    return {
        products,
    }
}
