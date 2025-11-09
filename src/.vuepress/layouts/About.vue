<template>

  <div class="about-container">
    <!-- 左侧图片区域 -->
    <div class="image-section">
      <div class="main-image">
        <img src="../public/about.png" alt="about" />
      </div>
    </div>

    <!-- 右侧内容区域 -->
    <div class="content-section">
      <div class="content-wrapper">
        <h1 class="page-title">About us</h1>

        <div class="text-content">
          <div class="text-content-left">
            <p class="paragraph">
              We specialize in rare and distinctive green plants, including Euphorbia, Pachypodium, Cactus, Primulina,
              Bulbs, Aloe, Agave, Othonna, and many other exceptional species.
            </p>

            <p class="paragraph">
              With premium quality, professional packaging, efficient logistics, and fair pricing, our plants have
              reached customers across the United States, Switzerland, Germany, the United Kingdom, Japan, and South
              Korea — earning lasting trust and appreciation.
            </p>

            <p class="paragraph">
              Led by two founders — one devoted to plant cultivation and the other to market research — we combine
              expertise and global insight to deliver healthy, high-quality plants to enthusiasts and professional
              buyers worldwide. With premium quality, professional packaging, efficient logistics, and fair pricing, our
              plants have reached customers across the United States, Switzerland, Germany, the United Kingdom, Japan,
              and South Korea — earning lasting trust and appreciation.
            </p>
          </div>

          <img class="text-content-right" src="../public/map.png" alt="map" />

        </div>
      </div>

      <button class="learn-more-button">Learn more about us</button>

      <img class="about-image" src="../public/my.png" alt="about-image" />
    </div>
  </div>

</template>

<script setup lang="ts">
</script>

<style scoped>
.about-container {
  max-width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 0;
  align-items: stretch;
  min-height: 100vh;
}

/* 左侧图片区域 */
.image-section {
  position: relative;
}

.main-image {
  width: 100%;
  height: 100%;
  min-height: 60vh;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 右侧内容区域 */
.content-section {
  background-color: #134a21;
  padding: 60px 50px;
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  min-height: 100vh;
  position: relative;
}

.content-wrapper {
  width: 100%;
}

.page-title {
  font-size: 88px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.2;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.text-content {
  margin-bottom: 30px;
  display: flex;
}

.text-content-left {
  max-width: 600px;
  margin-right: 50px;
}

.text-content-right {
  width: 300px;
  height: 300px;
}

.paragraph {
  font-size: 16px;
  line-height: 1.7;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* 按钮样式 */
.learn-more-button {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1.5px solid #ffffff;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.learn-more-button:hover {
  background-color: #debe48;
  color: #ffffff;
  border: none;
}



@media (max-width: 1024px) {
  .about-container {
    grid-template-columns: 1fr;
  }

  .main-image {
    min-height: 50vh;
  }

  .content-section {
    min-height: auto;
    padding: 40px 30px;
  }

  .images-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }

  .image-top-right {
    grid-column: 1;
    grid-row: 1;
    margin-left: 0;
    max-width: 100%;
  }

  .image-bottom-left {
    grid-column: 1;
    grid-row: 2;
    max-width: 100%;
  }

  .text-box-with-arrow {
    grid-column: 1;
    grid-row: 3;
    padding-left: 0;
    padding-top: 20px;
  }

  .arrow-line {
    display: none;
  }
}

@media (max-width: 768px) {
  .content-section {
    padding: 30px 20px;
  }

  .page-title {
    font-size: 36px;
  }

  .paragraph {
    font-size: 14px;
  }

  .image-top-right img,
  .image-bottom-left img {
    height: 150px;
  }

  .text-box {
    max-width: 100%;
  }
}
</style>
