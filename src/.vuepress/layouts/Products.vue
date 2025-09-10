<template>
  <div class="products-page">
    <div class="products-container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">精选热带绿植</h1>
        <p class="page-description">每一株植物都有其独特的魅力,为你的空间带来不同的氛围和感受。我们精心挑选了最受欢迎的热带植物,让你的家充满生机。</p>
      </div>

      <!-- 产品卡片 -->
      <div class="products-section">
        <div class="products-grid">
          <div 
            v-for="product in products" 
            :key="product.id" 
            class="product-card"
            @click="handleProductClick(product)"
          >
            <div class="product-image">
              <img :src="product.image" :alt="product.name" />
              <div v-if="product.badge" class="product-badge" :class="product.badge.type">
                {{ product.badge.text }}
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-footer">
                <span class="product-price">¥{{ product.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 查看全部按钮 -->
      <div class="cta-section">
        <button class="view-all-button" @click="handleViewAll">
          查看全部植物
          <RightOutlined class="button-arrow" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RightOutlined } from '@ant-design/icons-vue'

// 类型定义
interface ProductBadge {
  text: string
  type: 'bestseller' | 'new'
}

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  badge?: ProductBadge
}

// 产品数据
const products = ref<Product[]>([
  {
    id: 1,
    name: '龟背竹',
    description: '大型观叶植物,叶片独特,适合客厅摆放',
    price: 129,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
    badge: {
      text: '畅销',
      type: 'bestseller'
    }
  },
  {
    id: 2,
    name: '天堂鸟',
    description: '造型优雅,叶片宽大,热带风情十足',
    price: 199,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    name: '绿萝',
    description: '生命力强,净化空气,适合新手养护',
    price: 59,
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=200&fit=crop',
    badge: {
      text: '新品',
      type: 'new'
    }
  },
  {
    id: 4,
    name: '琴叶榕',
    description: '叶片独特似提琴,高大挺拔,气质优雅',
    price: 249,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop'
  }
])

// 处理产品卡片点击事件
const handleProductClick = (product: Product) => {
  console.log('点击产品:', product.name)
  // 这里可以添加路由跳转到产品详情页
  // router.push(`/product/${product.id}`)
  
  // 示例：显示提示信息
  alert(`查看产品详情: ${product.name}`)
}


// 处理查看全部植物事件
const handleViewAll = () => {
  console.log('查看全部植物')
  // 这里可以添加路由跳转到产品列表页
  // router.push('/products')
  
  // 示例：显示提示信息
  alert('跳转到全部植物页面')
}
</script>

<style scoped>
.products-page {
  background-color: #ffffff;
  padding: 80px 0;
}

.products-container {
  max-width: 90%;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 42px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 24px;
  line-height: 1.2;
}

.page-description {
  font-size: 18px;
  color: #333333;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.products-section {
  margin-bottom: 60px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.product-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  color: white;
}

.product-badge.bestseller {
  background-color: #ff6b35;
}

.product-badge.new {
  background-color: #52c41a;
}

.product-info {
  padding: 24px;
  background-color: #f5f5f5;
}

.product-name {
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 12px;
  line-height: 1.3;
}

.product-description {
  font-size: 14px;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 20px;
}

.product-footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.product-price {
  font-size: 24px;
  font-weight: bold;
  color: #333333;
}

.cta-section {
  text-align: center;
}

.view-all-button {
  background: white;
  border: 1px solid #52c41a;
  color: #52c41a;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.view-all-button:hover {
  background-color: #52c41a;
  color: white;
}

.button-arrow {
  color: #52c41a;
  font-size: 14px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.view-all-button:hover .button-arrow {
  color: white;
  transform: translateX(4px);
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .products-container {
    padding: 0 20px;
  }
  
  .page-title {
    font-size: 32px;
  }
  
  .page-description {
    font-size: 16px;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .product-info {
    padding: 20px;
  }
  
  .product-name {
    font-size: 18px;
  }
  
  .product-description {
    font-size: 13px;
  }
  
  .product-price {
    font-size: 20px;
  }
}
</style>
