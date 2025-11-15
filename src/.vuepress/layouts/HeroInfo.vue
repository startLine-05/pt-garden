<template>
  <section class="hero">
    <div class="hero__content">
      <div class="kicker">NEW ARRIVALS</div>
      <h1 class="hero__title">Smart Watering<br />Collection</h1>
      <p class="hero__desc">More of your favorites are available with built-in hydration.</p>
      <button class="hero__cta" aria-label="Shop Smart Watering">Shop Smart Watering</button>
    </div>
  </section>
</template>

<script setup>
// 保留空间以便未来引入图标或响应式逻辑
</script>

<style scoped>
/* Hero 根容器 */
.hero {
  position: relative;
  min-height: 340px;
  display: flex;
  align-items: center;
  padding: 48px 36px;
  color: #fff;
  overflow: hidden;
}


.hero__content {
  position: relative;
  z-index: 2;
  max-width: 760px;
}

.kicker {
  display: inline-block;
  color: rgba(255,255,255,0.9);
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 18px;
  background: rgba(255,255,255,0.06);
  padding: 8px 14px;
  border-radius: 999px;
}

.hero__title {
  font-size: 64px;
  line-height: 0.98;
  margin: 0 0 18px 0;
  font-weight: 400;
  font-family: 'Georgia', 'Times New Roman', serif;
  text-shadow: 0 2px 12px rgba(0,0,0,0.35);
}

.hero__desc {
  margin: 0 0 28px 0;
  color: rgba(255,255,255,0.9);
  font-size: 18px;
  max-width: 560px;
}

.hero__cta {
  background: rgba(227,135,120,0.95);
  border: none;
  color: white;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(220,120,110,0.12);
}

.hero__cta:focus {
  outline: 3px solid rgba(255,200,190,0.22);
}

/* 响应式 */
@media (max-width: 800px) {
  .hero { padding: 32px 20px; min-height: 300px; }
  .hero__title { font-size: 40px; }
  .hero__desc { font-size: 15px; }
}

@media (max-width: 420px) {
  .hero__title { font-size: 32px; }
  .kicker { font-size: 12px; padding: 6px 10px; }
  .hero__cta { width: 100%; text-align: center; }
}

</style>
