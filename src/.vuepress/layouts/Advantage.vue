<template>
  <div class="advantage-page">
    <div class="advantage-container">
      <!-- 标题 -->
      <h3 class="section-title">What Our Customers Say</h3>
      
      <div class="reviews-wrapper">
        <swiper
          :slides-per-view="3"
          :space-between="24"
          :pagination="paginationConfig"
          :modules="modules"
          :loop="true"
          class="reviews-swiper"
          :breakpoints="breakpoints"
          @swiper="onSwiper"
        >
          <swiper-slide 
            v-for="review in reviews" 
            :key="review.id" 
            class="swiper-slide"
          >
            <div class="review-card">
              <!-- 星级评分 -->
              <div class="review-rating">
                <span 
                  v-for="star in 5" 
                  :key="star" 
                  class="star"
                >
                  ★
                </span>
              </div>
              <!-- 评价内容 -->
              <p class="review-text">{{ review.text }}</p>
              <!-- 评价者姓名 -->
              <p class="reviewer-name">{{ review.reviewer }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// 注册 Swiper 模块
const modules = [Pagination]

// 分页配置
const paginationConfig = { 
  clickable: true,
  dynamicBullets: false,
  renderBullet: function (index: number, className: string) {
    return '<span class="' + className + '"></span>'
  }
} as any

// Swiper 实例
const swiperInstance = ref<SwiperType | null>(null)

// 获取 Swiper 实例
const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}

// 评价数据类型定义
interface Review {
  id: number
  text: string
  reviewer: string
}

// 评价数据
const reviews = ref<Review[]>([
  {
    id: 1,
    text: "They love it - I love it! I love the intricacies of my money tree even if it doesn't come with \"green money\" attached. I've always thought of them as lovely and finally purchased them for my team. They arrived green and fresh, just as I anticipated. My team said they love them! So I love them!",
    reviewer: "Kerrie C."
  },
  {
    id: 2,
    text: "Nice Plants! I ordered medium peacock plants in a grower pot for an \"at-home\" convention. They got delivered on the expected timeline and they were packed nicely. The leaves they had when it arrived are in good shape. Would order other plants again!",
    reviewer: "Caroline A."
  },
  {
    id: 2,
    text: "Nice Plants! I ordered medium peacock plants in a grower pot for an \"at-home\" convention. They got delivered on the expected timeline and they were packed nicely. The leaves they had when it arrived are in good shape. Would order other plants again!",
    reviewer: "Caroline A."
  },
  {
    id: 2,
    text: "Nice Plants! I ordered medium peacock plants in a grower pot for an \"at-home\" convention. They got delivered on the expected timeline and they were packed nicely. The leaves they had when it arrived are in good shape. Would order other plants again!",
    reviewer: "Caroline A."
  },
  {
    id: 2,
    text: "Nice Plants! I ordered medium peacock plants in a grower pot for an \"at-home\" convention. They got delivered on the expected timeline and they were packed nicely. The leaves they had when it arrived are in good shape. Would order other plants again!",
    reviewer: "Caroline A."
  },
  {
    id: 3,
    text: "Impressed. I ordered Golden Pothos as an \"I miss you plant.\" for our office. I was worried because I've ordered live plants before and it was not a pleasant experience. I am so pleased and impressed with the Lively Root team and how the plants were packaged. Done with care! Thank you! Very happy!",
    reviewer: "Lina H."
  }
])

// 响应式断点配置
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 16
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 24
  }
}
</script>

<style scoped>
/* 页面容器 */
.advantage-page {
  padding: 60px 0;
  background-color: #e7e3d9;
}

/* 内容容器 */
.advantage-container {
  /* max-width: 1200px; */
  width: 90%;
  margin: 0 auto;
  padding: 0 40px;
}

/* 标题样式 */
.section-title {
  font-size: 42px;
  font-weight: 400;
  color: #2d5016; /* 深绿色 */
  text-align: center;
  margin-bottom: 60px;
  font-family: serif; /* 衬线字体 */
  line-height: 1.2;
}

/* 评价轮播容器 */
.reviews-wrapper {
  position: relative;
  width: 100%;
}

/* Swiper 样式 */
.reviews-swiper {
  width: 100%;
  padding-bottom: 80px;
  position: relative;
}

/* Swiper Slide 样式 - 确保高度一致 */
:deep(.swiper-slide) {
  height: auto;
  display: flex;
}

/* 单个评价卡片 */
.review-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

.review-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 星级评分 */
.review-rating {
  margin-bottom: 16px;
  display: flex;
  gap: 2px;
}

.star {
  color: #000000;
  font-size: 18px;
  line-height: 1;
}

/* 评价文本 */
.review-text {
  font-size: 16px;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 24px;
  flex: 1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
}

/* 评价者姓名 */
.reviewer-name {
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* 自定义分页器样式 */
:deep(.swiper-pagination) {
  bottom: 0 !important;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto !important;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 20px;
  z-index: 10;
  padding: 20px 0;
}

:deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #d4d4d4;
  opacity: 1;
  transition: all 0.3s ease;
  margin: 0 4px !important;
  cursor: pointer;
  display: inline-block;
}

:deep(.swiper-pagination-bullet:hover) {
  background-color: #999999;
  transform: scale(1.2);
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #000000 !important;
  width: 6px;
  height: 6px;
  opacity: 1;
  transform: scale(1);
}

/* 平板设备响应式 (768px - 1024px) */
@media (max-width: 1024px) {
  .advantage-container {
    padding: 0 30px;
  }

  .section-title {
    font-size: 36px;
    margin-bottom: 50px;
  }

  .review-card {
    padding: 28px;
    min-height: 270px;
  }

  .review-text {
    font-size: 15px;
  }

  :deep(.swiper-pagination-bullet) {
    width: 5px;
    height: 5px;
  }

  :deep(.swiper-pagination-bullet-active) {
    width: 5px;
    height: 5px;
  }
}

/* 移动设备响应式 (最大宽度 768px) */
@media (max-width: 768px) {
  .advantage-page {
    padding: 40px 0;
  }

  .advantage-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
    margin-bottom: 40px;
  }

  .reviews-swiper {
    padding-bottom: 70px;
  }

  :deep(.swiper-pagination) {
    padding: 15px 0;
  }

  .review-card {
    padding: 24px;
    min-height: 260px;
  }

  .review-text {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .reviewer-name {
    font-size: 14px;
  }

  .star {
    font-size: 16px;
  }
}

/* 小屏移动设备响应式 (最大宽度 480px) */
@media (max-width: 480px) {
  .advantage-page {
    padding: 30px 0;
  }

  .advantage-container {
    padding: 0 15px;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .review-card {
    padding: 20px;
  }

  .review-text {
    font-size: 13px;
    margin-bottom: 16px;
  }

  .reviewer-name {
    font-size: 13px;
  }

  .star {
    font-size: 14px;
  }

  .reviews-swiper {
    padding-bottom: 60px;
  }

  :deep(.swiper-pagination) {
    padding: 10px 0;
  }

  .review-card {
    min-height: 250px;
  }

  :deep(.swiper-pagination-bullet) {
    width: 5px;
    height: 5px;
    margin: 0 3px !important;
  }

  :deep(.swiper-pagination-bullet-active) {
    width: 5px;
    height: 5px;
  }
}
</style>
