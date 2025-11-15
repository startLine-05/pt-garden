<template>
  <section class="testimonial-carousel">
    
    <div class="top">
      <div class="top__center">
        <div class="eyebrow">Speak to a Plant Specialist</div>
        <h2 class="top__title">Need Help?</h2>
        <p class="top__desc">Your confidence is our priority. Unsure what plants will work with your light? New to gardening outdoors and need some advice? Reach out, we're here to help.</p>
      </div>
      
      <div class="top__right">
        <div class="contact-card">
          <div class="icon">💬</div>
          <h4>Chat</h4>
          <p>DM with a plant care expert</p>
        </div>
        <div class="contact-card">
          <div class="icon">📞</div>
          <h4>Call</h4>
          <p>Speak live to a plant care expert</p>
        </div>
        <div class="contact-card">
          <div class="icon">✉️</div>
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
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
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

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import displayImg from '../public/display.png'  

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
  background-color: #e7e3d9;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 24px;
  align-items: center;
  margin-bottom: 48px;
}

.top__center .eyebrow {
  color: #6b6b6b;
  font-size: 14px;
  margin-bottom: 12px;
}

.top__center .top__title {
  font-size: 56px;
  margin: 0 0 18px 0;
  color: #1e2a24;
  font-weight: 400;
}

.top__center .top__desc {
  color: #444;
  max-width: 420px;
}

.top__right { display: flex; gap: 26px; justify-content: flex-start; }

.contact-card {
  background: white;
  padding: 28px;
  width: 220px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  text-align: center;
}

.contact-card .icon { font-size: 26px; color: #0f8f6f; margin-bottom: 10px; }
.contact-card h4 { margin: 6px 0; }
.contact-card p { margin: 0; color: #666; font-size: 14px; }

@media (max-width: 900px) {
  .top { grid-template-columns: 1fr; gap: 16px; }
  .top__right { justify-content: center; }
  .top__center .top__title { font-size: 36px; }
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
