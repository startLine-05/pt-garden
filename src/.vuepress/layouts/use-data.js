import { ref ,computed} from 'vue'

export const useData = () => {
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
            image: '/assets/product/Euphorbia-actinocIada1.png',
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
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=200&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
            isForDisplay: true
        },
        {
            name: 'Euphorbia ambovombensis',
            species: 'Euphorbia ambovombensis',
            PotDiameter: '8.5CM',
            priceRanges: [
                { quantity: '2-20', price: 33 },
                { quantity: '21-50', price: 30 },
                { quantity: '51+', price: 28 }
            ],
            averagePrice: 30.33,
            description: '来自马达加斯加的多肉植物，具有独特的生长习性',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
            isForDisplay: false
        },
        {
            name: 'Euphorbia ankaranae',
            species: 'Euphorbia ankaranae',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '来自马达加斯加北部的稀有品种，形态独特',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
            isForDisplay: false
        },
        {
            name: 'Euphorbia ankarensis',
            species: 'Euphorbia ankarensis',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '马达加斯加特有的多肉植物，生长缓慢但形态优美',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
            isForDisplay: false
        },
        {
            name: 'Euphorbia antso',
            species: 'Euphorbia antso',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '马达加斯加南部的特有品种，适应性强',
            image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=200&fit=crop',
            isForDisplay: false
        },
        {
            name: 'Euphorbia aureoviridiflora',
            species: 'Euphorbia aureoviridiflora',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '具有金黄色花朵的美丽品种，观赏价值高',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
            isForDisplay: false
        },
        {
            name: 'Euphorbia beharensis',
            species: 'Euphorbia beharensis',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '来自马达加斯加南部的耐旱品种，适合干燥环境',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
            isForDisplay: false
        },
        {
            name: 'Euphorbia beharensis var. adpressifolia',
            species: 'Euphorbia beharensis var. adpressifolia',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: 'beharensis的变种，叶片紧贴茎干，形态独特',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
            isForDisplay: false
        },
        {
            name: 'Euphorbia beharensis var. guillemetii',
            species: 'Euphorbia beharensis var. guillemetii',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: 'beharensis的另一个变种，具有特殊的叶片形态',
            image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=200&fit=crop',
            isForDisplay: false
        },
        {
            name: 'Euphorbia beharensis var. truncata',
            species: 'Euphorbia beharensis var. truncata',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: 'beharensis的截形变种，茎干较短，适合小型盆栽',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
            isForDisplay: true  
        },
        {
            name: 'Euphorbia beharensis var. truncata f. cristata',
            species: 'Euphorbia beharensis var. truncata f. cristata',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '罕见的缀化品种，具有独特的扇形生长形态',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
            isForDisplay: true
        },
        {
            name: 'Euphorbia beharensis var. truncata f. monstruosa',
            species: 'Euphorbia beharensis var. truncata f. monstruosa',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '畸变品种，具有不规则的生长形态，收藏价值高',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
            isForDisplay: true
        },
        {
            name: 'Euphorbia beharensis var. truncata f. variegata',
            species: 'Euphorbia beharensis var. truncata f. variegata',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '斑锦品种，叶片具有美丽的色彩变化',
            image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=200&fit=crop',
            isForDisplay: true
        },
        {
            name: 'Euphorbia beharensis var. truncata f. variegata cristata',
            species: 'Euphorbia beharensis var. truncata f. variegata cristata',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '罕见的缀化斑锦品种，兼具缀化和斑锦特征',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
            isForDisplay: true
        },
        {
            name: 'Euphorbia beharensis var. truncata f. variegata cristata monstrosa',
            species: 'Euphorbia beharensis var. truncata f. variegata cristata monstrosa',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '极其罕见的复合变异品种，具有多种特殊形态',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
            isForDisplay: true
        },
        {
            name: 'Euphorbia beharensis var. truncata f. variegata cristata monstrosa variegata',
            species: 'Euphorbia beharensis var. truncata f. variegata cristata monstrosa variegata',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '最稀有的复合变异品种，集多种特殊形态于一身',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
            isForDisplay: true
        },
        {
            name: 'Euphorbia beharensis var. truncata f. variegata cristata monstrosa variegata cristata',
            species: 'Euphorbia beharensis var. truncata f. variegata cristata monstrosa variegata cristata',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '终极变异品种，具有最复杂的形态特征',
            image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=200&fit=crop',
            isForDisplay: true
        },
        {
            name: 'Euphorbia beharensis var. truncata f. variegata cristata monstrosa variegata cristata monstrosa',
            species: 'Euphorbia beharensis var. truncata f. variegata cristata monstrosa variegata cristata monstrosa',
            PotDiameter: '6.5CM',
            priceRanges: [
                { quantity: '2-20', price: 30 },
                { quantity: '21-50', price: 27 },
                { quantity: '51+', price: 25 }
            ],
            averagePrice: 27.33,
            description: '传说中的终极变异品种，极其罕见',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
            isForDisplay: true
        }
    ])

    const displayProducts = computed(() => {
        return products.value.filter(product => product.isForDisplay === true)
    })

    return {
        products,
        displayProducts,

    }
}