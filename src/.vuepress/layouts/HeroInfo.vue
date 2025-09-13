<template>
  <!-- 主要内容容器 -->
  <div class="content-container">
    <!-- 主标题 -->
    <h1 class="main-title animate-fade-in-up">把热带天堂<br />带入你的家</h1>

    <!-- 描述文本 -->
    <p class="description animate-fade-in-up animation-delay-100">
      精选全球热带绿植，为你的生活空间增添自然活力与异域风情。<br />
      每一株植物都经过精心培育，保证健康鲜活。
    </p>

    <!-- 按钮组 -->
    <div class="button-group animate-fade-in-up animation-delay-200">
      <button class="primary-button">探索植物</button>
      <button class="secondary-button">养护指南</button>
    </div>

    <!-- 服务特点（使用Ant Design Icons） -->
    <div class="features-container">
      <div class="feature-card">
        <CarOutlined class="feature-icon" />
        <span class="feature-text">免费配送</span>
      </div>
      <div class="feature-card">
        <WeiboOutlined class="feature-icon" />
        <span class="feature-text">健康保证</span>
      </div>
      <div class="feature-card">
        <RedoOutlined class="feature-icon" />
        <span class="feature-text">30天退换</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CarOutlined,
  WeiboOutlined,
  RedoOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped>
/* 内容容器样式 */
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 主标题样式 */
.main-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: bold;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 24px;
}

/* 描述文本样式 */
.description {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.6;
}

/* 按钮组样式 */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 64px;
}

@media (min-width: 640px) {
  .button-group {
    flex-direction: row;
  }
}

/* 主要按钮样式 */
.primary-button {
  background-color: #166534;
  color: white;
  padding: 12px 32px;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.primary-button:hover {
  background-color: #14532d;
  transform: scale(1.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* 次要按钮样式 */
.secondary-button {
  background-color: white;
  color: #166534;
  border: 1px solid #166534;
  padding: 12px 32px;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.secondary-button:hover {
  background-color: #f9fafb;
  transform: scale(1.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.features-container {
  display: flex;
  gap: 20px;
}
.feature-icon {
  color: yellowgreen;
  margin-right: 5px;
}
</style>
