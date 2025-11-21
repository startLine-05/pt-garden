import { ref, computed } from 'vue'

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
            cover: '/us.png',
            description: '独特的多肉植物，具有美丽的形态和耐旱特性',
            detailDescription: 'Euphorbia actinoclada 是一种独特的多肉植物，原产于非洲。它具有美丽的形态和出色的耐旱特性，非常适合室内种植。这种植物生长缓慢，形态优雅，是植物收藏家的理想选择。',
            category: 'Succulents',
            collection: ['Best Sellers', 'Easy Care'],
            price: 30, // 补充必需的 price 字段
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            tags: ['New', 'HOT'],
            species: 'Euphorbia actinoclada',
            PotDiameter: '6.5CM',
            isForDisplay: true
        }
    ])

    return {
        products,
    }
}
