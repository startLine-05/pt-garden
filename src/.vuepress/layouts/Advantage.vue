<template>
  <div class="advantage-page">
    <div class="advantage-container">
      <!-- 左侧内容区域 -->
      <div class="content-section">
        <div class="content-wrapper">
          <h1 class="page-title">为什么选择我们的热带绿植?</h1>
          
          <div class="advantages-list">
            <div 
              v-for="advantage in advantages" 
              :key="advantage.id" 
              class="advantage-item"
            >
              <div class="advantage-icon">
                <component :is="advantage.icon" />
              </div>
              <div class="advantage-content">
                <h3 class="advantage-title">{{ advantage.title }}</h3>
                <p class="advantage-description">{{ advantage.description }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 右侧图片区域 -->
      <div class="image-section">
        <div class="main-image">
          <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" alt="热带绿植" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  EnvironmentOutlined,
  CarOutlined,
  BookOutlined,
  ReloadOutlined
} from '@ant-design/icons-vue'

// 类型定义
interface Advantage {
  id: number
  title: string
  description: string
  icon: any
}

// 优势数据
const advantages = ref<Advantage[]>([
  {
    id: 1,
    title: '优质培育',
    description: '所有植物均在专业温室中培育,确保健康生长,品质优良。',
    icon: EnvironmentOutlined
  },
  {
    id: 2,
    title: '专业配送',
    description: '采用专业包装和配送方式,确保植物安全送达你的手中。',
    icon: CarOutlined
  },
  {
    id: 3,
    title: '养护指导',
    description: '提供详细的植物养护指南,即使是新手也能轻松照顾好植物。',
    icon: BookOutlined
  },
  {
    id: 4,
    title: '环保包装',
    description: '使用可降解环保包装材料,减少对环境的影响,践行绿色理念。',
    icon: ReloadOutlined
  }
])
</script>

<style scoped>
.advantage-page {
  background-color: #ffffff;
  padding: 60px 0;
}

.advantage-container {
 width: 80%;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.content-section {
  padding: 20px 0;
}

.content-wrapper {
  max-width: 500px;
}

.page-title {
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 40px;
  line-height: 1.2;
}

.advantages-list {
  margin-bottom: 50px;
}

.advantage-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.advantage-icon {
  width: 40px;
  height: 40px;
  background-color: #52c41a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  flex-shrink: 0;
}

.advantage-content {
  flex: 1;
}

.advantage-title {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
  line-height: 1.3;
}

.advantage-description {
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
  margin: 0;
}


.image-section {
  position: relative;
}

.main-image {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.main-image img {
  width: 100%;
  height: 1000px;
  object-fit: cover;
  filter: sepia(30%) contrast(0.9) brightness(0.8);
}

@media (max-width: 768px) {
  .advantage-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .page-title {
    font-size: 28px;
  }
  
  .advantage-item {
    margin-bottom: 24px;
  }
  
  .advantage-icon {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
  
  .advantage-title {
    font-size: 16px;
  }
  
  .advantage-description {
    font-size: 13px;
  }
  
  .main-image img {
    height: 400px;
  }
}
</style>
