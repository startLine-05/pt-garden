<template>
  <!-- 主要内容容器 -->
  <div class="content-container">
    <!-- 主标题 -->
    <h1 class="main-title animate-fade-in-up">Bring the Tropical Paradise into<br />Your Home</h1>

    <!-- 描述文本 -->
    <!-- <p class="description animate-fade-in-up animation-delay-100">
      Discover our curated collection of rare tropical plants from around the world.<br />
      Each plant is carefully nurtured to bring vibrant life and exotic beauty to your home.
    </p> -->

    <!-- 按钮组 -->
    <div class="button-group animate-fade-in-up animation-delay-200">
      <button class="primary-button">Explore Plants</button>
      <button class="secondary-button">Care Guide</button>
    </div>

    <!-- 服务特点（使用Ant Design Icons） -->
    <!-- <div class="features-container">
      <div class="feature-card">
        <SmileOutlined  class="feature-icon" />
        <span class="feature-text">Low Shipping</span>
      </div>
      <div class="feature-card">
        <SafetyOutlined class="feature-icon" />
        <span class="feature-text">Health Guarantee</span>
      </div>
      <div class="feature-card">
        <RedoOutlined class="feature-icon" />
        <span class="feature-text">30-Day Returns</span>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import {
  SmileOutlined,
  SafetyOutlined,
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
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: bold;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 80px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  text-align: center;
}

/* 描述文本样式 */
/* .description {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.6;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.6));
} */

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
  flex-wrap: wrap;
  justify-content: center;
}

.feature-card {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 12px 20px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.feature-card:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.feature-icon {
  color: #22c55e;
  margin-right: 8px;
  font-size: 18px;
  filter: drop-shadow(0 0 4px rgba(34, 197, 94, 0.6));
}

.feature-text {
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}
</style>
