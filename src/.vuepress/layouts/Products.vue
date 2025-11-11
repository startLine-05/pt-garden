<template>
  <div class="products-page">
    <div class="products-container">
      <!-- 产品卡片 -->
      <div class="products-section">
        <!-- 标题区域 -->
        <div class="section-header">
          <h3 class="section-title">Shop Holiday Decor</h3>
          <a href="#" class="view-all-link" @click.prevent="handleViewAll">
            View all
          </a>
        </div>
        
        <div class="products-grid">
          <div 
            v-for="product in displayProducts" 
            :key="product.name" 
            class="product-card"
          >
            <div class="product-image-wrapper">
              <div class="product-image">
                <img :src="product.image" :alt="product.name" />
                <!-- 右上角收藏图标 -->
                <button 
                  class="wishlist-icon" 
                  @click.stop="handleWishlistClick(product)"
                  aria-label="Add to wishlist"
                >
                  <StarOutlined />
                </button>
                <!-- 左下角售罄横幅 -->
                <div v-if="product.soldOut" class="sold-out-banner">
                  Temporarily sold out
                </div>
              </div>
            </div>
            <div class="product-info">
              <!-- 品牌/分类 -->
              <div class="product-brand">{{ product.species || 'Botanical' }}</div>
              <!-- 产品名称 -->
              <h3 class="product-name">{{ product.name }}</h3>
              <!-- 价格和按钮 -->
              <div class="product-footer">
                <span class="product-price">${{ product.averagePrice?.toFixed(2) || '0.00' }}</span>
                <button 
                  class="add-to-cart-button" 
                  @click.stop="handleAddToCart(product)"
                  aria-label="Add to cart"
                >
                  <PlusOutlined class="plus-icon" />
                  <ShoppingCartOutlined class="cart-icon" />
                </button>
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
import { RightOutlined, StarOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue'
import { useData } from './use-data.js'

const { displayProducts } = useData()

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


// 处理收藏点击事件
const handleWishlistClick = (product: any) => {
  console.log('添加到收藏:', product.name)
  // 这里可以添加收藏逻辑
  // toggleWishlist(product)
}

// 处理添加到购物车事件
const handleAddToCart = (product: any) => {
  console.log('添加到购物车:', product.name)
  // 这里可以添加购物车逻辑
  // addToCart(product)
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

.products-section {
  margin-bottom: 60px;
  width: 100%;
  max-width: 1272px;
  margin-left: auto;
  margin-right: auto;
}

/* 标题区域 */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 0;
  width: 100%;
}

.section-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 32px;
  font-weight: 500;
  color: #2d2d2d;
  margin: 0;
  line-height: 1.2;
  text-decoration: none;
}

.view-all-link {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  color: #2d2d2d;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.view-all-link:hover {
  opacity: 0.7;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 24px;
  justify-content: start;
  width: 100%;
}

.product-card {
  background: white;
  overflow: visible;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.product-card:hover {
  transform: translateY(-2px);
}

.product-image-wrapper {
  position: relative;
  width: fit-content;
}

.product-image {
  position: relative;
  width: 300px;
  height: 370px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.03);
}

/* 右上角收藏图标 */
.wishlist-icon {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background: white;
  border: 2px solid #134a21;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  padding: 0;
}

.wishlist-icon:hover {
  background: #f0f0f0;
  transform: scale(1.1);
}

.wishlist-icon :deep(svg) {
  font-size: 16px;
  color: #134a21;
}

/* 左下角售罄横幅 */
.sold-out-banner {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(200, 200, 200, 0.85);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  z-index: 10;
  backdrop-filter: blur(4px);
}

.product-info {
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 300px;
}

/* 品牌/分类 */
.product-brand {
  font-size: 14px;
  font-weight: 700;
  color: #134a21;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-name {
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  margin-bottom: 16px;
  line-height: 1.4;
  flex: 1;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.product-price {
  font-size: 18px;
  font-weight: 600;
  color: #134a21;
}

/* 添加到购物车按钮 */
.add-to-cart-button {
  background: white;
  border: 2px solid #134a21;
  border-radius: 20px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.add-to-cart-button:hover {
  background: #134a21;
  color: white;
}

.add-to-cart-button:hover .plus-icon,
.add-to-cart-button:hover .cart-icon {
  color: white;
}

.plus-icon,
.cart-icon {
  font-size: 14px;
  color: #134a21;
  transition: color 0.3s ease;
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
  .products-section {
    max-width: 648px;
  }
  
  .products-grid {
    grid-template-columns: repeat(2, auto);
    gap: 20px;
    justify-content: start;
  }
}

@media (max-width: 768px) {
  .products-container {
    padding: 0 20px;
  }
  
  .products-section {
    max-width: 300px;
  }
  
  .section-header {
    margin-bottom: 30px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .view-all-link {
    font-size: 13px;
  }
  
  .products-grid {
    grid-template-columns: auto;
    gap: 20px;
    justify-content: start;
  }
  
  .product-image {
    width: 300px;
    height: 370px;
  }
  
  .product-info {
    padding: 20px;
    width: 300px;
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
