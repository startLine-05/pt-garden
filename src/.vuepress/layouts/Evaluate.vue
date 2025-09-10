<template>
  <div class="evaluate-page">
    <div class="evaluate-container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">用户评价</h1>
        <p class="page-subtitle">听听我们的客户怎么说</p>
      </div>


      <!-- 评价列表 -->
      <div class="reviews-section">
        <div class="reviews-grid">
          <div 
            v-for="review in reviews" 
            :key="review.id" 
            class="review-card"
          >
            <div class="review-header">
              <div class="review-rating">
                <StarFilled v-for="i in review.rating" :key="i" class="star-icon" />
                <StarOutlined 
                  v-for="i in (5 - review.rating)" 
                  :key="i + review.rating" 
                  class="star-icon empty" 
                />
              </div>
            </div>
            <div class="review-content">
              <p>"{{ review.content }}"</p>
            </div>
            <div class="user-info">
              <div class="user-avatar">
                <UserOutlined />
              </div>
              <div class="user-details">
                <div class="user-name">{{ review.userName }}</div>
                <div class="review-date">{{ review.location }}</div>
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
import {
  StarFilled,
  StarOutlined,
  UserOutlined
} from '@ant-design/icons-vue'

// 评价数据
const reviews = ref([
  {
    id: 1,
    rating: 5,
    content: '购买的龟背竹已经养了半年多了,生长得非常好。包装很专业,植物状态极佳,客服还耐心解答了我的养护问题。',
    userName: '李女士',
    location: '上海'
  },
  {
    id: 2,
    rating: 5,
    content: '配送速度很快，植物状态很好，已经养了一个月了，长势喜人。',
    userName: '李先生',
    location: '北京'
  },
  {
    id: 3,
    rating: 4,
    content: '植物种类很丰富，价格合理。希望能有更多的养护指导。',
    userName: '王女士',
    location: '广州'
  }
])
</script>

<style scoped>
.evaluate-page {
  background-color: #fff;
  padding: 60px 0;
}

.evaluate-container {
  max-width: 1200px;
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
  color: #333;
  margin-bottom: 16px;
}

.page-subtitle {
  font-size: 18px;
  color: #666;
}

.star-icon {
  font-size: 20px;
  color: #ffc107;
}

.star-icon.empty {
  color: #d9d9d9;
}

.reviews-section {
  margin-bottom: 60px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.review-card {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.review-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.review-header {
  margin-bottom: 16px;
}

.review-rating {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  background-color: #d7e3d8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #52c41a;
  font-size: 20px;
  overflow: hidden;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.review-date {
  font-size: 14px;
  color: #666;
}

.review-content {
  margin-bottom: 20px;
}

.review-content p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin: 0;
  font-style: italic;
}



@media (max-width: 768px) {
  .evaluate-container {
    padding: 0 16px;
  }
  
  .page-title {
    font-size: 32px;
  }
  
  .reviews-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .rating-card {
    padding: 24px;
    min-width: auto;
  }
  
  .rating-number {
    font-size: 36px;
  }
  
  .review-card {
    padding: 16px;
  }
  
}
</style>
