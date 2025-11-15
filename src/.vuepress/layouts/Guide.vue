<template>
  <div class="guide-page">
    <!-- 顶部边框线 -->
    <div class="border-line top-border"></div>
    
    <div class="guide-container">
      <!-- 左侧插图区域 -->
      <div class="illustration-section">
        <img :src="tgImg" alt="Gardening Tools" class="illustration-image" />
      </div>

      <!-- 右侧文本和按钮区域 -->
      <div class="content-section">
        <p class="intro-text">Join our rewards program</p>
        <h1 class="main-title">The Garden Club</h1>
        <p class="description-text">
          Get rewarded for your purchases. Earn points when you shop and get VIP perks as a member of the club.
        </p>
        <button class="cta-button" @click="handleCreateAccount">
          Create my account
        </button>
      </div>
    </div>

    <!-- 底部边框线 -->
    <div class="border-line bottom-border"></div>
  </div>
</template>

<script setup lang="ts">
import tgImg from '../public/tg.png'

// 处理创建账户按钮点击事件
const handleCreateAccount = () => {
  console.log('点击创建账户按钮')
  // 这里可以添加路由跳转逻辑
  // router.push('/register')
  // 或者打开注册页面
  // window.open('/register', '_blank')
}
</script>

<style scoped>
/* 页面容器 */
.guide-page {
  padding: 60px 0;
  position: relative;
}

/* 边框线 */
.border-line {
  width: 100%;
  height: 1px;
  background-color: #d4d4d4; /* 浅灰色边框 */
  position: absolute;
  left: 0;
}

.top-border {
  top: 0;
}

.bottom-border {
  bottom: 0;
}

/* 主要内容容器 */
.guide-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
  display: flex;
  align-items: center;
  gap: 80px;
}

/* 左侧插图区域 */
.illustration-section {
  flex: 1;
  /* width: 200px; */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 插图图片样式 */
.illustration-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
}

/* 右侧内容区域 */
.content-section {
  flex: 3;
  min-width: 300px;
  /* max-width: 500px; */
}

/* 介绍文本 */
.intro-text {
  font-size: 16px;
  color: #000000;
  margin-bottom: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
}

/* 主标题 */
.main-title {
  font-size: 48px;
  color: #000000;
  margin-bottom: 24px;
  font-family: serif; /* 衬线字体 */
  font-weight: 400;
  line-height: 1.2;
}

/* 描述文本 */
.description-text {
  font-size: 18px;
  color: #000000;
  margin-bottom: 32px;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
}

/* 按钮样式 */
.cta-button {
  background-color: #2d5016; /* 深绿色 */
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  min-width: 180px;
}

.cta-button:hover {
  background-color: #1f3a0f;
  transform: translateY(-2px);
}

.cta-button:active {
  transform: translateY(0);
  background-color: #152a08;
}

/* 平板设备响应式 (768px - 1024px) */
@media (max-width: 1024px) {
  .guide-container {
    gap: 50px;
    padding: 50px 30px;
  }

  .main-title {
    font-size: 40px;
  }

  .description-text {
    font-size: 16px;
  }
}

/* 移动设备响应式 (最大宽度 768px) */
@media (max-width: 768px) {
  .guide-page {
    padding: 40px 0;
  }

  .guide-container {
    flex-direction: column; /* 移动端改为垂直布局 */
    gap: 40px;
    padding: 40px 20px;
  }

  .illustration-section {
    width: 100%;
    min-width: auto;
  }

  .content-section {
    width: 100%;
    max-width: 100%;
    text-align: center;
  }

  .main-title {
    font-size: 36px;
  }

  .description-text {
    font-size: 15px;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}

/* 小屏移动设备响应式 (最大宽度 480px) */
@media (max-width: 480px) {
  .guide-page {
    padding: 30px 0;
  }

  .guide-container {
    padding: 30px 15px;
    gap: 30px;
  }

  .intro-text {
    font-size: 14px;
  }

  .main-title {
    font-size: 28px;
  }

  .description-text {
    font-size: 14px;
  }

  .cta-button {
    font-size: 14px;
    padding: 12px 24px;
  }
}
</style>
