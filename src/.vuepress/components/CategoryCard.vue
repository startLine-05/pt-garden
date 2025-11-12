<template>
  <div class="category-card" @click="handleClick">
    <div class="category-image-wrapper">
      <div class="category-image">
        <img :src="category.image" :alt="category.name" />
      </div>
    </div>
    <div class="category-label">{{ category.name }}</div>
  </div>
</template>

<script setup lang="ts">
// 定义分类类型
interface Category {
  name: string
  image: string
  [key: string]: any
}

// 定义 props
interface Props {
  category: Category
}

const props = defineProps<Props>()

// 处理点击事件
const handleClick = () => {
  console.log('点击分类:', props.category.name)
  // 这里可以添加路由跳转逻辑
  // router.push(`/category/${props.category.name}`)
}
</script>

<style scoped>
.category-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
}

.category-image-wrapper {
  position: relative;
  width: 100%;
}

.category-image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 12px;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.category-card:hover .category-image img {
  transform: scale(1.05);
}

.category-label {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #2d2d2d;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .category-image {
    height: 240px;
  }

  .category-label {
    font-size: 14px;
    margin-top: 12px;
  }
}
</style>

