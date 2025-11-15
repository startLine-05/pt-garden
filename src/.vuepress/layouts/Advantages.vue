<template>

    <div class="advantages-container">
        <!-- 优势项列表 -->
        <div v-for="advantage in advantages" :key="advantage.id" class="advantage-item">
            <!-- 图标容器 -->
            <div class="advantage-icon-wrapper">
                <component :is="advantage.icon" class="advantage-icon" />
            </div>
            <!-- 文本内容 -->
            <div class="advantage-text">
                <p class="advantage-description">{{ advantage.text }}</p>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    CarOutlined,
    SmileOutlined,
    MessageOutlined,
    SafetyOutlined
} from '@ant-design/icons-vue'

// 优势项类型定义
interface AdvantageItem {
    id: number
    text: string
    icon: any
}

// 优势数据
const advantages = ref<AdvantageItem[]>([
    {
        id: 1,
        text: 'Shipped Direct From the Nursery',
        icon: CarOutlined
    },
    {
        id: 2,
        text: '30 Day Happiness\nGuarantee',
        icon: SmileOutlined
    },
    {
        id: 3,
        text: 'Expert Customer\nSupport',
        icon: MessageOutlined
    },
    {
        id: 4,
        text: 'Care Instructions Provided',
        icon: SafetyOutlined
    }
])
</script>

<style scoped>
/* 优势内容容器 - 使用 Flexbox 实现水平布局 */
.advantages-container {
    width: 100%;
    background-color: #efece4;


    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
}

/* 单个优势项 */
.advantage-item {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-width: 200px;
    text-align: center;
}

/* 图标容器 */
.advantage-icon-wrapper {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 图标样式 */
.advantage-icon {
    font-size: 28px;
    color: #000000;
    stroke-width: 1;
}

/* 文本容器 */
.advantage-text {
    width: 100%;
}

/* 描述文本样式 */
.advantage-description {
    font-size: 16px;
    color: #000000;
    line-height: 1.5;
    margin: 0;
    white-space: pre-line;
    /* 支持换行符 */
    font-family: serif;
    /* 衬线字体 */
    font-weight: 400;
}

/* 平板设备响应式 (768px - 1024px) */
@media (max-width: 1024px) {
    .advantages-container {
        padding: 0 30px;
        gap: 30px;
    }

    .advantage-item {
        min-width: 180px;
        max-width: 240px;
    }

    .advantage-icon {
        font-size: 42px;
    }

    .advantage-description {
        font-size: 15px;
    }
}

/* 移动设备响应式 (最大宽度 768px) */
@media (max-width: 768px) {
    .advantages-section {
        padding: 40px 0;
    }

    .advantages-container {
        padding: 0 20px;
        gap: 30px;
        flex-direction: column;
        /* 移动端改为垂直布局 */
    }

    .advantage-item {
        width: 100%;
        max-width: 100%;
        min-width: auto;
        flex-direction: row;
        /* 移动端改为水平布局 */
        text-align: left;
        gap: 20px;
    }

    .advantage-icon-wrapper {
        width: 50px;
        height: 50px;
        margin-bottom: 0;
        flex-shrink: 0;
        /* 防止图标被压缩 */
    }

    .advantage-icon {
        font-size: 40px;
    }

    .advantage-text {
        flex: 1;
    }

    .advantage-description {
        font-size: 14px;
    }
}

/* 小屏移动设备响应式 (最大宽度 480px) */
@media (max-width: 480px) {
    .advantages-section {
        padding: 30px 0;
    }

    .advantages-container {
        padding: 0 15px;
        gap: 25px;
    }

    .advantage-item {
        gap: 15px;
    }

    .advantage-icon-wrapper {
        width: 45px;
        height: 45px;
    }

    .advantage-icon {
        font-size: 36px;
    }

    .advantage-description {
        font-size: 13px;
    }
}
</style>
