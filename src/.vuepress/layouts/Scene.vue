<template>
  <div class="scene-page">
    <div class="scene-container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">按场景分类</h1>
        <p class="page-description">根据不同的空间和需求,为你推荐最适合的热带植物,让每一个角落都充满生机。</p>
      </div>

      <!-- 场景卡片 -->
      <div class="scenes-section">
        <div class="scenes-grid">
          <div 
            v-for="scene in scenes" 
            :key="scene.id" 
            class="scene-card"
            @click="handleSceneClick(scene)"
          >
            <div class="scene-image">
              <img :src="scene.image" :alt="scene.title" />
              <div class="scene-overlay">
                <h3 class="scene-title">{{ scene.title }}</h3>
                <p class="scene-description">{{ scene.description }}</p>
                <a 
                  href="#" 
                  class="explore-link"
                  @click.stop="handleExploreClick(scene)"
                >
                  探索系列
                  <RightOutlined class="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RightOutlined } from '@ant-design/icons-vue'

// 类型定义
interface Scene {
  id: number
  title: string
  description: string
  image: string
  link: string
}

// 场景数据
const scenes = ref<Scene[]>([
  {
    id: 1,
    title: '客厅绿植',
    description: '大型绿植,彰显格调,成为客厅焦点',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    link: '/scene/living-room'
  },
  {
    id: 2,
    title: '卧室绿植',
    description: '净化空气,助眠植物,营造舒适环境',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    link: '/scene/bedroom'
  },
  {
    id: 3,
    title: '办公绿植',
    description: '小型盆栽,缓解疲劳,提升工作效率',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    link: '/scene/office'
  }
])

// 处理场景卡片点击事件
const handleSceneClick = (scene: Scene) => {
  console.log('点击场景:', scene.title)
  // 这里可以添加路由跳转到场景详情页
  // router.push(scene.link)
  
  // 示例：显示提示信息
  alert(`查看场景详情: ${scene.title}`)
}

// 处理探索系列点击事件
const handleExploreClick = (scene: Scene) => {
  console.log('探索系列:', scene.title)
  // 这里可以添加路由跳转到系列页面
  // router.push(`${scene.link}/series`)
  
  // 示例：显示提示信息
  alert(`探索 ${scene.title} 系列`)
}
</script>

<style scoped>
.scene-page {
  background-color: #f5f5f5;
  padding: 60px 0;
}

.scene-container {
  width: 90%;
  margin: 0 auto;
  padding: 0 20px;
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

.scenes-section {
  margin-bottom: 60px;
}

.scenes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.scene-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.scene-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.scene-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.scene-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.scene-card:hover .scene-image img {
  transform: scale(1.05);
}

.scene-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
}

.scene-title {
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
  line-height: 1.3;
}

.scene-description {
  font-size: 14px;
  color: white;
  line-height: 1.5;
  margin-bottom: 16px;
  opacity: 0.9;
}

.explore-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.explore-link:hover {
  color: #52c41a;
}

.arrow-icon {
  color: white;
  font-size: 14px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.explore-link:hover .arrow-icon {
  color: #52c41a;
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .scenes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .scene-container {
    padding: 0 16px;
  }
  
  .page-title {
    font-size: 32px;
  }
  
  .page-description {
    font-size: 16px;
  }
  
  .scenes-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .scene-overlay {
    padding: 20px;
  }
  
  .scene-title {
    font-size: 20px;
  }
  
  .scene-description {
    font-size: 13px;
  }
}
</style>
