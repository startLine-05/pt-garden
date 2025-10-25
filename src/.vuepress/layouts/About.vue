<template>
  <div class="about-page">
    <div class="about-container">
      <!-- 左侧图片区域 -->
      <div class="image-section">
        <div class="main-image">
          <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" alt="绿境植物培育基地" />
          <div class="image-overlay">
            <div class="stats-card">
              <!-- <div class="stats-icon">
                <EnvironmentOutlined />
              </div> -->
              <div class="stats-number">5000+</div>
              <div class="stats-text">我们培育了超过5000种热带植物,为您提供丰富选择</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧内容区域 -->
      <div class="content-section">
        <div class="content-wrapper">
          <h1 class="page-title">About Us</h1>
          
          <div class="text-content">
            <p class="paragraph">
              Founded in 2025, we are a leading professional brand of tropical greenery in Asia. We are committed to bringing high-quality tropical plants from around the world into households, enabling more people to experience the tropical charm and enjoy the beauty of nature right at home.
            </p>
            
            <p class="paragraph">
              We own professional greenhouse cultivation bases and an experienced horticultural team. From the selection and cultivation of plants to their delivery, we strive for excellence in every step—all to deliver the healthiest and most visually appealing plants to your hands.
            </p>
          </div>

          <!-- 统计数据 -->
          <div class="stats-section">
            <div class="stat-item">
              <div class="stat-icon">
                <EnvironmentOutlined />
              </div>
              <div class="stat-text">3个培育基地</div>
            </div>
            
            <div class="stat-item">
              <div class="stat-icon">
                <TeamOutlined />
              </div>
              <div class="stat-text">50+专业园艺师</div>
            </div>
            
            <div class="stat-item">
              <div class="stat-icon">
                <CalendarOutlined />
              </div>
              <div class="stat-text">8年行业经验</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  EnvironmentOutlined,
  TeamOutlined,
  CalendarOutlined
} from '@ant-design/icons-vue'
</script>

<style scoped>
.about-page {
  background-color: #eaeeeb;
  padding: 80px 0;
}

.about-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
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
  height: 600px;
  object-fit: cover;
  filter: sepia(30%) contrast(0.9) brightness(0.8);
}

.image-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.stats-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 280px;
}

.stats-icon {
  color: #52c41a;
  font-size: 24px;
  margin-bottom: 8px;
  width: 40px;
  height: 40px;
  background-color: #d7e3d8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-number {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.stats-text {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.content-section {
  padding: 40px 0;
  display: flex;
  align-items: center;
  height: 100%;
}

.content-wrapper {
  max-width: 600px;
  width: 100%;
}

.page-title {
  font-size: 42px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 40px;
  line-height: 1.1;
}

.text-content {
  margin-bottom: 40px;
}

.paragraph {
  font-size: 16px;
  line-height: 1.7;
  color: #333333;
  margin-bottom: 24px;
}

.stats-section {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 50px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  transition: none;
}

.stat-item:hover {
  transform: none;
  box-shadow: none;
}

.stat-icon {
  color: #52c41a;
  font-size: 20px;
  width: 36px;
  height: 36px;
  background-color: #d7e3d8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
}

.stat-text {
  font-size: 16px;
  font-weight: 500;
  color: #333333;
}

@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }
  
  .page-title {
    font-size: 32px;
  }
  
  .stats-section {
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }
  
  .stat-item {
    justify-content: flex-start;
  }
  
  .main-image img {
    height: 400px;
  }
  
  .stats-card {
    max-width: 100%;
    margin: 0 20px;
  }
  
  .content-section {
    padding: 20px 0;
  }
}
</style>
