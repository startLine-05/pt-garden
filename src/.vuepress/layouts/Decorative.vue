<template>
  <section class="testimonial-carousel">
    
    <div class="top">
      <div class="top__center">
        <div class="eyebrow">Speak to a Plant Specialist</div>
        <h3 class="top__title">Need Help?</h3>
        <p class="top__desc">Your confidence is our priority. Unsure what plants will work with your light? New to gardening outdoors and need some advice? Reach out, we're here to help.</p>
      </div>
      
      <div class="top__right">
        <div class="contact-card">
          <div class="icon-wrapper">
            <MessageOutlined class="icon" />
          </div>
          <h4>Chat</h4>
          <p>DM with a plant care expert</p>
        </div>
        <div class="contact-card">
          <div class="icon-wrapper">
            <PhoneOutlined class="icon" />
          </div>
          <h4>Call</h4>
          <p>Speak live to a plant care expert</p>
        </div>
        <div class="contact-card">
          <div class="icon-wrapper">
            <MailOutlined class="icon" />
          </div>
          <h4>Email</h4>
          <p>Send a note to info@thesill.com</p>
        </div>
      </div>
    </div>
    
    <header class="head">
      <h3 class="head__title">Decoration in different scenarios</h3>
      <div class="head__logos" role="list">
        <div class="logo-card" role="listitem"><div class="logo-text">the spruce</div></div>
        <div class="logo-card" role="listitem"><div class="logo-text">BuzzFeed</div></div>
        <div class="logo-card" role="listitem"><div class="logo-text">MEN'S JOURNAL</div></div>
        <div class="logo-card" role="listitem"><div class="logo-text">mindbodygreen</div></div>
        <div class="logo-card" role="listitem"><div class="logo-text">martha stewart</div></div>
      </div>
    </header>

    <div class="slide-wrap">
      <swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1"
        :loop="true"
        :pagination="paginationConfig"
        :autoplay="autoplayConfig"
        :allow-touch-move="false"
        :simulate-touch="false"
        class="my-swiper"
      >
        <swiper-slide v-for="(s, i) in slides" :key="i">
          <div class="slide">
            <img class="slide__image" :src="s.image" :alt="s.author" />
            <div class="slide__card">
              <blockquote class="quote">{{ s.quote }}</blockquote>
              <div class="author">{{ s.author }}</div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import { MessageOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons-vue';
import 'swiper/css';
import 'swiper/css/pagination';
import displayImg from '../public/display.png'

// 分页配置
const paginationConfig = { clickable: true } as any

// 自动播放配置
const autoplayConfig = {
  delay: 5000,
  disableOnInteraction: false
} as any

const slides = [
  {
    image: displayImg,
    quote: "Thank you so much for getting back to me about my plant concern! I'm grateful that customer service does still exist <3 Can't wait to recommend The Sill to others !",
    author: 'Molly , CO'
  },
  {
    image: displayImg,
    quote: 'Great product and fast shipping — highly recommended!',
    author: 'Jordan, NY'
  },
  {
    image: displayImg,
    quote: 'Lovely plants and amazing packaging. Will buy again.',
    author: 'Ava, CA'
  }
]
</script>

<style scoped>
.testimonial-carousel {
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* head bar */
.head {
  width: 80%;
  margin-bottom: 50px;
}

.head__title {
  font-size: 46px;
  margin: 0 0 18px 0;
  color: #1e2a24;
  font-weight: 400;
}

.head__logos {
  display: flex;
  gap: 26px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo-card {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}



.logo-text {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 28px;
  color: #3b3b3b;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.5px;
}

.slide-wrap {
  width: 70%;
  margin: 0 auto;
}

/* top help section */
.top {
  width: 100%;
  box-sizing: border-box;
  background-color: #e7e3d9;
  background-image: url('/help-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  padding: 60px;
  margin-bottom: 100px;
  position: relative;
}

/* 左侧内容区域样式优化 */
.top__center {
  width: 400px;
  color: #ffffff;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.top__center .eyebrow {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.top__center .top__title {
  font-size: 56px;
  margin: 0 0 24px 0;
  font-weight: 400;
  font-family: serif;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.top__center .top__desc {
  font-size: 16px;
  line-height: 1.7;
  max-width: 500px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* 右侧联系卡片区域 */
.top__right {
  flex: 1;
  display: flex;
  gap: 40px;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-right: 100px;
}

.contact-card {
  background: white;
  padding: 32px 24px;
  flex: 1;
  min-width: 180px;
  max-width: 220px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  background-color: #f0f9f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: background-color 0.3s ease;
}

.contact-card:hover .icon-wrapper {
  background-color: #e0f3ef;
}

.contact-card .icon {
  font-size: 28px;
  color: #0f8f6f;
  transition: transform 0.3s ease;
}

.contact-card:hover .icon {
  transform: scale(1.1);
}

.contact-card h4 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1e2a24;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.contact-card p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* 平板设备响应式 (768px - 1024px) */
@media (max-width: 1024px) {
  .top {
    padding: 50px 30px;
    gap: 30px;
  }

  .top__center {
    padding: 0 10px;
  }

  .top__center .top__title {
    font-size: 48px;
  }

  .top__center .top__desc {
    font-size: 15px;
  }

  .top__right {
    gap: 20px;
  }

  .contact-card {
    min-width: 160px;
    max-width: 200px;
    padding: 28px 20px;
  }
}

/* 移动设备响应式 (最大宽度 768px) */
@media (max-width: 768px) {
  .top {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 40px 20px;
  }

  .top__center {
    padding: 0;
    text-align: center;
    align-items: center;
  }

  .top__center .eyebrow {
    font-size: 13px;
    margin-bottom: 12px;
  }

  .top__center .top__title {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .top__center .top__desc {
    font-size: 15px;
    max-width: 100%;
    text-align: left;
  }

  .top__right {
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .contact-card {
    flex: 1 1 calc(50% - 8px);
    min-width: 150px;
    max-width: 250px;
    padding: 28px 20px;
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
    margin-bottom: 14px;
  }

  .contact-card .icon {
    font-size: 24px;
  }

  .contact-card h4 {
    font-size: 16px;
  }

  .contact-card p {
    font-size: 13px;
  }
}

/* 小屏移动设备响应式 (最大宽度 480px) */
@media (max-width: 480px) {
  .top {
    padding: 30px 16px;
    gap: 24px;
  }

  .top__center .eyebrow {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .top__center .top__title {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .top__center .top__desc {
    font-size: 14px;
    line-height: 1.6;
  }

  .top__right {
    gap: 12px;
    flex-direction: column;
    width: 100%;
  }

  .contact-card {
    flex: 1;
    width: 100%;
    min-width: 140px;
    max-width: 100%;
    padding: 24px 16px;
  }

  .icon-wrapper {
    width: 44px;
    height: 44px;
    margin-bottom: 12px;
  }

  .contact-card .icon {
    font-size: 20px;
  }

  .contact-card h4 {
    font-size: 15px;
    margin-bottom: 6px;
  }

  .contact-card p {
    font-size: 12px;
  }
}

.slide {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 50px;
}

.slide__image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 2px;
}

.slide__card {
  background: white;
  padding: 48px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  margin-left: -120px; /* overlap into image area */
  max-width: 420px;
}

.quote {
  font-size: 16px;
  line-height: 1.9;
  color: #444;
  margin: 0 0 36px 0;
}

.author {
  text-align: center;
  color: #666;
}

/* pagination dots */
.my-swiper .swiper-pagination-bullet {
  background: #e6e6e6;
  opacity: 1;
}

.my-swiper .swiper-pagination-bullet-active {
  background: #1a7a4a;
}

@media (max-width: 900px) {
  .slide { grid-template-columns: 1fr; }
  .slide__image { height: 300px; }
  .slide__card { margin: 0; max-width: none; }
}
</style>
