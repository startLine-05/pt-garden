<template>
  <div class="products-page">
    <!-- 产品卡片 -->
    <div class="products-section">
      <!-- 标题区域 -->
      <div class="section-header">
        <h3 class="section-title">Shop Holiday Decor</h3>
        <a href="#" class="view-all-link" @click.prevent="handleViewAll">
          View all
        </a>
      </div>

      <div class="products-grid products-grid-5">
        <ProductCard v-for="product in displayProducts" :key="product.name" :product="product" />
      </div>
    </div>
    <!-- Shop By Collection -->
    <div class="products-section">
      <!-- 标题区域 -->
      <div class="section-header">
        <h3 class="section-title">Shop By Collection</h3>
      </div>

      <div class="products-grid products-grid-6">
        <CategoryCard v-for="collection in collections" :key="collection.name" :category="collection" />
      </div>
    </div>

    <!-- Shop By Plant Type -->
    <div class="products-section">
      <!-- 标题区域 -->
      <div class="section-header">
        <h3 class="section-title">Shop By Plant Type</h3>
      </div>

      <div class="products-grid products-grid-6">
        <CategoryCard v-for="plantType in plantTypes" :key="plantType.name" :category="plantType" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import CategoryCard from '../components/CategoryCard.vue'
import { useProducts } from '../data/use-products'
import { useCollection } from '../data/use-collection'
import { useCategory } from '../data/use-category'

const { products } = useProducts()
const { collections } = useCollection()
const { categories: plantTypes } = useCategory()

// 获取用于显示的产品（前5个）
const displayProducts = computed(() => {
    return products.value.filter(product => product.isForDisplay === true).slice(0, 5)
})


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
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.products-section {
  width: 60%;
  margin-bottom: 60px;
}

/* 标题区域 */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  width: 100%;
}

/* 产品卡片区域：5个卡片 */
.products-grid-5 > * {
  flex: 0 0 calc((100% - 4 * 24px) / 5);
  max-width: calc((100% - 4 * 24px) / 5);
}

/* 分类卡片区域：6个卡片 */
.products-grid-6 > * {
  flex: 0 0 calc((100% - 5 * 24px) / 6);
  max-width: calc((100% - 5 * 24px) / 6);
}


@media (max-width: 1200px) {
  .products-section {
    max-width: 648px;
  }

  .products-grid {
    gap: 20px;
    justify-content: flex-start;
  }

  /* 中等屏幕：产品卡片区域显示3个 */
  .products-grid-5 > * {
    flex: 0 0 calc((100% - 2 * 20px) / 3);
    max-width: calc((100% - 2 * 20px) / 3);
  }

  /* 中等屏幕：分类卡片区域显示3个 */
  .products-grid-6 > * {
    flex: 0 0 calc((100% - 2 * 20px) / 3);
    max-width: calc((100% - 2 * 20px) / 3);
  }
}

@media (max-width: 768px) {
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
    gap: 20px;
    justify-content: flex-start;
  }

  /* 小屏幕：所有卡片区域显示1个 */
  .products-grid-5 > *,
  .products-grid-6 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
