<template>
  <div class="guide-page">
    <div class="guide-container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">热带植物养护指南</h1>
        <p class="page-subtitle">即使是新手也能轻松掌握热带植物的养护技巧,让你的绿植茁壮成长,长久保持生机。</p>
      </div>

      <!-- 内容卡片 -->
      <div class="cards-section">
        <div class="cards-grid">
          <div 
            v-for="guide in guides" 
            :key="guide.id" 
            class="guide-card"
            @click="handleCardClick(guide)"
          >
            <div class="card-image">
              <img :src="guide.image" :alt="guide.title" />
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ guide.title }}</h3>
              <p class="card-description">{{ guide.description }}</p>
              <a 
                href="#" 
                class="read-more-link"
                @click.stop="handleReadMoreClick(guide)"
              >
                阅读更多
                <RightOutlined class="arrow-icon" />
              </a>
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

// 指南数据
const guides = ref([
  {
    id: 1,
    title: '正确的浇水方式',
    description: '了解不同热带植物的浇水需求,避免过度浇水或浇水不足,让植物健康生长。',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop',
    link: '/guide/watering',
    readMoreLink: '/guide/watering/detail'
  },
  {
    id: 2,
    title: '光照需求解析',
    description: '热带植物对光照的需求各不相同,掌握正确的光照知识,让植物生长更旺盛。',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
    link: '/guide/lighting',
    readMoreLink: '/guide/lighting/detail'
  },
  {
    id: 3,
    title: '常见问题解决',
    description: '针对热带植物常见的黄叶、枯萎等问题,提供专业的解决方案和预防措施。',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=250&fit=crop',
    link: '/guide/problems',
    readMoreLink: '/guide/problems/detail'
  }
])

// 处理卡片点击事件
const handleCardClick = (guide: any) => {
  console.log('点击卡片:', guide.title)
  // 这里可以添加路由跳转逻辑
  // router.push(guide.link)
  // 或者打开新页面
  // window.open(guide.link, '_blank')
  
  // 示例：显示提示信息
  alert(`点击了卡片: ${guide.title}`)
}

// 处理"阅读更多"点击事件
const handleReadMoreClick = (guide: any) => {
  console.log('点击阅读更多:', guide.title)
  // 这里可以添加路由跳转逻辑
  // router.push(guide.readMoreLink)
  // 或者打开新页面
  // window.open(guide.readMoreLink, '_blank')
  
  // 示例：显示提示信息
  alert(`阅读更多: ${guide.title}`)
}
</script>

<style scoped>
.guide-page {
  background-color: #f5f5f5;
  padding: 60px 0;
}

.guide-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 80px;
}

.page-title {
  font-size: 42px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 24px;
  line-height: 1.2;
}

.page-subtitle {
  font-size: 18px;
  color: #666666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.cards-section {
  margin-bottom: 60px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.guide-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.guide-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.guide-card:active {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.guide-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 32px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 16px;
  line-height: 1.3;
}

.card-description {
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.read-more-link {
  color: #333333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.read-more-link:hover {
  color: #52c41a;
}

.arrow-icon {
  color: #52c41a;
  font-size: 14px;
  transition: transform 0.3s ease;
}

.read-more-link:hover .arrow-icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .guide-container {
    padding: 0 16px;
  }
  
  .page-title {
    font-size: 32px;
  }
  
  .page-subtitle {
    font-size: 16px;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .card-content {
    padding: 24px;
  }
  
  .card-title {
    font-size: 20px;
  }
  
  .card-description {
    font-size: 15px;
  }
}
</style>
