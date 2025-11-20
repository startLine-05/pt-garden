<template>
  <div class="display-page">
    <div class="display-head">
      <h2 class="display-head__title">Showcase</h2>
      <p class="display-head__desc">Discover how our plants transform living spaces into green sanctuaries</p>
    </div>
    <div class="display-container">
      <div class="swiper-wrapper">
        <swiper
          :slides-per-view="5"
          :space-between="20"
          :pagination="paginationConfig"
          :modules="modules"
          :loop="true"
          class="display-swiper"
          :breakpoints="breakpoints"
          @swiper="onSwiper"
        >
          <swiper-slide v-for="(image, index) in images" :key="index" class="swiper-slide">
            <div class="image-item">
              <img :src="image.url" :alt="image.alt" />
            </div>
          </swiper-slide>
        </swiper>
        <!-- 自定义导航按钮 -->
        <div class="custom-navigation">
          <button class="nav-button nav-button-prev" @click="slidePrev">
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.75 10.5L5.25 7L8.75 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="nav-button nav-button-next" @click="slideNext">
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
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
import displayImg from '../public/display.png'   

// 注册 Swiper 模块
const modules = [Pagination]

// 分页配置
const paginationConfig = { clickable: true } as any

// Swiper 实例
const swiperInstance = ref<SwiperType | null>(null)

// 获取 Swiper 实例
const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}

// 上一张
const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

// 下一张
const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

// 响应式断点配置
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 20
  }
}

// 图片数据
interface ImageItem {
  url: string
  alt: string
}

const images = ref<ImageItem[]>([
  {
    url: displayImg,
    alt: '室内绿植装饰 - 客厅'
  },
  {
    url: displayImg,
    alt: '室内绿植装饰 - 餐厨区域'
  },
  {
    url: displayImg,
    alt: '室内绿植装饰 - 厨房'
  },
  {
    url: displayImg,
    alt: '室内绿植装饰 - 室内外过渡区'
  },
  {
    url: displayImg,
    alt: '室内绿植装饰 - 客厅'
  },
  {
    url: displayImg,
    alt: '室内绿植装饰 - 卧室'
  },
  {
    url: displayImg,
    alt: '室内绿植装饰 - 客厅'
  },
  {
    url: displayImg,
    alt: '室内绿植装饰 - 客厅'
  },
])
</script>

<style scoped>
.display-page {
  padding: 60px 0 0 0;
}
/* 展示区域头部 */
.display-head {
  max-width: 90%;
  margin: 0 auto 60px;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.display-head__title {
  font-size: 42px;
  font-weight: 400;
  color: #2d5016;
  margin: 0 0 16px 0;
  font-family: serif;
  line-height: 1.2;
}

.display-head__desc {
  font-size: 18px;
  color: #666666;
  margin: 0;
  line-height: 1.6;
  max-width: 600px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.display-container {
  max-width: 90%;
  margin: 0 auto;
  padding: 0 20px;
}

.swiper-wrapper {
  position: relative;
}

.display-swiper {
  width: 100%;
  padding-bottom: 80px;
  position: relative;
}

.swiper-slide {
  height: auto;
}

.image-item {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.image-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-item:hover img {
  transform: scale(1.05);
}

/* 自定义导航按钮容器 */
.custom-navigation {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  z-index: 10;
  pointer-events: none;
  width: 100%;
  max-width: 400px;
}

.custom-navigation .nav-button {
  pointer-events: auto;
  position: absolute;
}

.nav-button-prev {
  left: 0;
}

.nav-button-next {
  right: 0;
}

/* 自定义导航按钮样式 */
.nav-button {
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 1.5px solid #2d5016;
  border-radius: 50%;
  color: #2d5016;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
}

.nav-button:hover {
  background-color: #ffd700;
  border-color: #ffd700;
  color: #ffffff;
}

.nav-button:hover svg {
  color: #ffffff;
}

.nav-button:hover svg path {
  stroke: #ffffff;
}

.nav-button:active {
  transform: scale(0.95);
}

.nav-button svg {
  display: block;
}

/* 自定义分页器样式 */
:deep(.swiper-pagination) {
  bottom: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 40px;
  line-height: 40px;
  z-index: 5;
}

:deep(.swiper-pagination-bullet) {
  width: 24px;
  height: 4px;
  border-radius: 2px;
  background-color: #d4d4d4;
  opacity: 1;
  transition: all 0.3s ease;
  margin: 0;
  cursor: pointer;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #2d5016;
  width: 24px;
  opacity: 1;
}

@media (max-width: 768px) {
  .display-head {
    margin-bottom: 40px;
    padding: 0 15px;
  }

  .display-head__title {
    font-size: 32px;
    margin-bottom: 12px;
  }

  .display-head__desc {
    font-size: 16px;
  }

  .display-container {
    max-width: 95%;
    padding: 0 10px;
  }

  .image-item {
    height: 250px;
  }

  .nav-button {
    width: 36px;
    height: 36px;
  }

  .nav-button svg {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .display-head {
    margin-bottom: 30px;
    padding: 0 10px;
  }

  .display-head__title {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .display-head__desc {
    font-size: 14px;
  }
}
</style>

