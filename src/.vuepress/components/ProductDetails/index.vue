<template>
  <div class="product-details">
    <div class="product-details-container">
      <!-- 左侧图片区域 -->
      <div class="product-images-section">
        <!-- 缩略图列表 -->
        <div class="thumbnail-list">
          <div
            v-for="(image, index) in productImages"
            :key="index"
            class="thumbnail-item"
            :class="{ active: currentImageIndex === index }"
            @click="currentImageIndex = index"
          >
            <img :src="image" :alt="`${product.name} ${index + 1}`" />
          </div>
        </div>
        <!-- 主图轮播 -->
        <div class="main-image-wrapper">
          <div class="main-image-container">
            <img
              :src="productImages[currentImageIndex]"
              :alt="product.name"
              class="main-image"
            />
            <button
              v-if="productImages.length > 1"
              class="nav-button nav-button-left"
              @click="prevImage"
              aria-label="Previous image"
            >
              <LeftOutlined />
            </button>
            <button
              v-if="productImages.length > 1"
              class="nav-button nav-button-right"
              @click="nextImage"
              aria-label="Next image"
            >
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧产品信息区域 -->
      <div class="product-info-section">
        <!-- 产品名称 -->
        <h1 class="product-name">{{ product.name }}</h1>
        <!-- 植物学名 -->
        <p class="botanical-name">{{ product.species || product.name }}</p>
        <!-- 价格 -->
        <div class="price-section">
          <span v-if="product.originalPrice" class="original-price">
            ${{ product.originalPrice.toFixed(2) }}
          </span>
          <span class="current-price">
            ${{ (product.salePrice || product.price || 0).toFixed(2) }}
          </span>
        </div>
        <!-- 评价 -->
        <div class="reviews-section">
          <div class="stars">
            <StarFilled v-for="i in 5" :key="i" class="star-icon" />
          </div>
          <span class="reviews-count">{{ reviewCount }} reviews</span>
        </div>
        <!-- 尺寸选择 -->
        <div class="selection-section">
          <label class="selection-label">Size - {{ selectedSize }}</label>
          <div class="size-options">
            <button
              v-for="size in sizeOptions"
              :key="size"
              class="size-button"
              :class="{ active: selectedSize === size }"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
          <a href="#" class="size-chart-link">Size chart</a>
        </div>
        <!-- 花盆选择 -->
        <div class="selection-section">
          <label class="selection-label">Pot - {{ selectedPot }}</label>
          <div class="pot-options">
            <button
              v-for="pot in potOptions"
              :key="pot.value"
              class="pot-button"
              :class="{ active: selectedPot === pot.value }"
              @click="selectedPot = pot.value"
              :title="pot.label"
            >
              <div class="pot-icon" :class="pot.value.toLowerCase().replace(' ', '-')">
                <div v-if="pot.value === 'Eco Pot'" class="eco-leaf"></div>
              </div>
            </button>
          </div>
          <span class="pot-description">{{ selectedPotDescription }}</span>
        </div>
        <!-- 花盆颜色选择 -->
        <div class="selection-section">
          <label class="selection-label">Pot Color - {{ selectedColor }}</label>
          <div class="color-options">
            <button
              v-for="color in colorOptions"
              :key="color.value"
              class="color-button"
              :class="{ active: selectedColor === color.value }"
              :style="{ backgroundColor: color.color }"
              @click="selectedColor = color.value"
              :title="color.label"
            />
          </div>
        </div>
        <!-- 额外信息 -->
        <div class="extra-info">
          <div class="info-item">
            <GiftOutlined class="info-icon" />
            <span>Gift options available in the cart</span>
          </div>
          <div class="info-item">
            <CheckCircleOutlined class="info-icon" />
            <span>100% Happiness Guarantee</span>
          </div>
        </div>
        <!-- 添加到购物车按钮 -->
        <button class="add-to-cart-btn" @click="handleAddToCart">
          Add to cart
        </button>
        <!-- 配送信息 -->
        <div class="shipping-info">
          No expedited shipping options to your location to
          <a href="#" class="shipping-link">58</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  LeftOutlined,
  RightOutlined,
  StarFilled,
  GiftOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons-vue'
import type { Product } from '../../data/use-products'
import { getImagePath } from '../../utils/index.js'

const getProductImagePath = getImagePath('products')

// 定义 props
interface Props {
  product?: Product
  productName?: string
}

const props = withDefaults(defineProps<Props>(), {
  product: undefined,
  productName: '',
})

// 模拟产品数据（如果没有传入 product）
const defaultProduct: Product = {
  name: 'Dark Green Spreader Yew',
  species: "Taxus x media 'Dark Green Spreader'",
  cover: getProductImagePath('Euphorbia.png'),
  description: 'A beautiful evergreen shrub with dark green foliage',
  detailDescription: 'The Dark Green Spreader Yew is a low-growing, spreading evergreen shrub perfect for ground cover or foundation plantings.',
  category: 'Evergreen',
  collection: [],
  tags: [],
  price: 44.8,
  originalPrice: 64.0,
  salePrice: 44.8,
  PotDiameter: 'Medium',
}

// 使用传入的产品或默认产品
const product = computed(() => props.product || defaultProduct)

// 产品图片列表（模拟多张图片）
const productImages = computed(() => {
  const images = [product.value.cover]
  // 模拟多张图片（实际应该从产品数据中获取）
  for (let i = 0; i < 4; i++) {
    images.push(product.value.cover)
  }
  return images.slice(0, 5) // 最多5张
})

// 当前显示的图片索引
const currentImageIndex = ref(0)

// 切换图片
const prevImage = () => {
  currentImageIndex.value =
    currentImageIndex.value > 0
      ? currentImageIndex.value - 1
      : productImages.value.length - 1
}

const nextImage = () => {
  currentImageIndex.value =
    currentImageIndex.value < productImages.value.length - 1
      ? currentImageIndex.value + 1
      : 0
}

// 尺寸选项
const sizeOptions = ['Small', 'Medium', 'Large']
const selectedSize = ref('Medium')

// 花盆选项
const potOptions = [
  { value: 'Standard', label: 'Standard Pot' },
  { value: 'Eco Pot', label: 'Eco Pot' },
]
const selectedPot = ref('Eco Pot')
const selectedPotDescription = computed(() => {
  return selectedPot.value === 'Eco Pot' ? 'Grower Eco Pot' : 'Standard Pot'
})

// 颜色选项
const colorOptions = [
  { value: 'Coconut', label: 'Coconut', color: '#f5f5dc' },
  { value: 'Grey', label: 'Grey', color: '#808080' },
]
const selectedColor = ref('Coconut')

// 评价数量
const reviewCount = ref(0)

// 添加到购物车
const handleAddToCart = () => {
  console.log('添加到购物车:', {
    product: product.value.name,
    size: selectedSize.value,
    pot: selectedPot.value,
    color: selectedColor.value,
  })
  // 这里可以添加实际的购物车逻辑
}
</script>

<style scoped>
.product-details {
  width: 100%;
  background-color: #f6f5ef;
  padding: 40px 20px;
}

.product-details-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

/* 左侧图片区域 */
.product-images-section {
  display: flex;
  gap: 20px;
}

/* 缩略图列表 */
.thumbnail-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 80px;
}

.thumbnail-item {
  width: 80px;
  height: 80px;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fff;
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-item:hover {
  border-color: #134a21;
}

.thumbnail-item.active {
  border-color: #134a21;
  border-width: 3px;
}

/* 主图区域 */
.main-image-wrapper {
  flex: 1;
}

.main-image-container {
  position: relative;
  width: 100%;
  height: 800px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.nav-button:hover {
  background-color: #fff;
  border-color: #134a21;
}

.nav-button ::v-deep svg {
  font-size: 16px;
  color: #134a21;
}

.nav-button-left {
  left: 15px;
}

.nav-button-right {
  right: 15px;
}

/* 右侧产品信息区域 */
.product-info-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-name {
  font-size: 32px;
  font-weight: 600;
  color: #000;
  margin: 0;
  line-height: 1.3;
  font-family: serif;
}

.botanical-name {
  font-size: 16px;
  color: #666;
  margin: 0;
  font-style: italic;
}

/* 价格区域 */
.price-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.original-price {
  font-size: 18px;
  color: #999;
  text-decoration: line-through;
}

.current-price {
  font-size: 28px;
  font-weight: 600;
  color: #134a21;
}

/* 评价区域 */
.reviews-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star-icon {
  font-size: 16px;
  color: #ffc107;
}

.reviews-count {
  font-size: 14px;
  color: #666;
}

/* 选择区域 */
.selection-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.selection-label {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.size-options {
  display: flex;
  gap: 12px;
}

.size-button {
  width: 50px;
  height: 50px;
  border: 2px solid #ddd;
  border-radius: 50%;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
}

.size-button:hover {
  border-color: #134a21;
}

.size-button.active {
  border-color: #134a21;
  background-color: #134a21;
  color: #fff;
}

.size-chart-link {
  font-size: 14px;
  color: #134a21;
  text-decoration: none;
}

.size-chart-link:hover {
  text-decoration: underline;
}

.pot-options {
  display: flex;
  gap: 12px;
}

.pot-button {
  width: 60px;
  height: 60px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.pot-button:hover {
  border-color: #134a21;
}

.pot-button.active {
  border-color: #134a21;
  background-color: #f0f8f0;
}

.pot-icon {
  width: 40px;
  height: 40px;
  border: 1px solid #134a21;
  border-radius: 4px;
  position: relative;
  background-color: #fff;
}

.eco-leaf {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #134a21;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pot-description {
  font-size: 14px;
  color: #666;
}

.color-options {
  display: flex;
  gap: 12px;
}

.color-button {
  width: 40px;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.color-button:hover {
  border-color: #134a21;
  transform: scale(1.1);
}

.color-button.active {
  border-color: #134a21;
  border-width: 3px;
  box-shadow: 0 0 0 2px rgba(19, 74, 33, 0.2);
}

/* 额外信息 */
.extra-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
}

.info-icon {
  font-size: 16px;
  color: #134a21;
}

/* 添加到购物车按钮 */
.add-to-cart-btn {
  width: 100%;
  padding: 16px 32px;
  background-color: #d4a574;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.add-to-cart-btn:hover {
  background-color: #c89564;
  transform: translateY(-2px);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* 配送信息 */
.shipping-info {
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 12px;
}

.shipping-link {
  color: #134a21;
  text-decoration: none;
}

.shipping-link:hover {
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .product-details-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .product-images-section {
    flex-direction: column;
  }

  .thumbnail-list {
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
  }

  .thumbnail-item {
    flex-shrink: 0;
  }
}
</style>
