<template>
  <div class="product-card">
    <div class="product-image-wrapper">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
        <!-- 右上角收藏图标 -->
        <button 
          class="wishlist-icon" 
          @click.stop="handleWishlistClick"
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
          @click.stop="handleAddToCart"
          aria-label="Add to cart"
        >
          <PlusOutlined class="plus-icon" />
          <ShoppingCartOutlined class="cart-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue'

// 定义产品类型
interface Product {
  id?: number
  name: string
  species?: string
  averagePrice?: number
  image: string
  soldOut?: boolean
  [key: string]: any
}

// 定义 props
interface Props {
  product: Product
}

const props = defineProps<Props>()

// 处理收藏点击事件
const handleWishlistClick = () => {
  console.log('添加到收藏:', props.product.name)
  // 这里可以添加收藏逻辑
  // toggleWishlist(props.product)
}

// 处理添加到购物车事件
const handleAddToCart = () => {
  console.log('添加到购物车:', props.product.name)
  // 这里可以添加购物车逻辑
  // addToCart(props.product)
}
</script>

<style scoped>
.product-card {
  overflow: visible;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.product-image-wrapper {
  position: relative;
  width: 100%;
}

.product-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background-color: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* 只有当鼠标悬停在图片上时才触发 hover 效果 */
.product-image:hover img {
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
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* 品牌/分类 */
.product-brand {
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  color: #134a21;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-name {
  font-size: 14px;
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

@media (max-width: 768px) {
  .product-image {
    aspect-ratio: 2 / 3; /* 保持比例，在小屏上由容器宽度决定高度 */
  }

  .product-info {
    padding: 16px;
  }

  .product-name {
    font-size: 16px;
  }

  .product-price {
    font-size: 18px;
  }
}
</style>

