<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="company-info">
          <div class="company-header">
            <EnvironmentOutlined class="leaf-icon" />
            <h3 class="company-name">绿境</h3>
          </div>
          <p class="tagline">把热带天堂带入你的家,<br>让生活充满自然活力与异域风情。</p>
          <div class="social-icons">
            <WechatOutlined class="social-icon" />
            <WeiboOutlined class="social-icon" />
            <QqOutlined class="social-icon" />
            <InstagramOutlined class="social-icon" />
            <FacebookOutlined class="social-icon" />
          </div>
        </div>
      </div>

      <div class="footer-section">
        <h4 class="section-title">{{ quickLinks.title }}</h4>
        <ul class="link-list">
          <li v-for="link in quickLinks.links" :key="link.id">
            <a 
              href="#" 
              class="footer-link"
              @click="handleLinkClick(link)"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4 class="section-title">{{ customerService.title }}</h4>
        <ul class="link-list">
          <li v-for="link in customerService.links" :key="link.id">
            <a 
              href="#" 
              class="footer-link"
              @click="handleLinkClick(link)"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4 class="section-title">{{ contactInfo.title }}</h4>
        <div class="contact-info">
          <div 
            v-for="contact in contactInfo.contacts" 
            :key="contact.id" 
            class="contact-item"
            @click="handleContactClick(contact)"
          >
            <component :is="contact.icon" class="contact-icon" />
            <span>{{ contact.text }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-divider"></div>
      <div class="bottom-content">
        <div class="copyright">
          © 2023 绿境热带绿植,保留所有权利.
        </div>
        <div class="bottom-links">
          <a 
            v-for="link in bottomLinks" 
            :key="link.id"
            href="#" 
            class="bottom-link"
            @click="handleLinkClick(link)"
          >
            {{ link.name }}
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  EnvironmentOutlined,
  WechatOutlined,
  WeiboOutlined,
  QqOutlined,
  InstagramOutlined,
  FacebookOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  UpOutlined
} from '@ant-design/icons-vue'

// 类型定义
interface FooterLink {
  id: number
  name: string
  url: string
}

interface ContactItem {
  id: number
  text: string
  icon: any
  action?: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

// 快速链接数据
const quickLinks = ref<FooterSection>({
  title: '快速链接',
  links: [
    { id: 1, name: '首页', url: '/' },
    { id: 2, name: '植物系列', url: '/products' },
    { id: 3, name: '分类浏览', url: '/scene' },
    { id: 4, name: '养护指南', url: '/guide' },
    { id: 5, name: '关于我们', url: '/about' }
  ]
})

// 客户服务数据
const customerService = ref<FooterSection>({
  title: '客户服务',
  links: [
    { id: 1, name: '配送信息', url: '/delivery' },
    { id: 2, name: '退换政策', url: '/return' },
    { id: 3, name: '常见问题', url: '/faq' },
    { id: 4, name: '联系我们', url: '/contact' },
    { id: 5, name: '隐私政策', url: '/privacy' }
  ]
})

// 联系信息数据
const contactInfo = ref({
  title: '联系我们',
  contacts: [
    {
      id: 1,
      text: '上海市浦东新区张江高科技园区博云路2号',
      icon: EnvironmentOutlined,
      action: 'address'
    },
    {
      id: 2,
      text: '400-888-9999',
      icon: PhoneOutlined,
      action: 'phone'
    },
    {
      id: 3,
      text: 'service@lujing.com',
      icon: MailOutlined,
      action: 'email'
    },
    {
      id: 4,
      text: '周一至周日 9:00-21:00',
      icon: ClockCircleOutlined,
      action: 'hours'
    }
  ] as ContactItem[]
})

// 底部链接数据
const bottomLinks = ref<FooterLink[]>([
  { id: 1, name: '隐私政策', url: '/privacy' },
  { id: 2, name: '使用条款', url: '/terms' },
  { id: 3, name: '网站地图', url: '/sitemap' }
])

// 处理链接点击事件
const handleLinkClick = (link: FooterLink) => {
  console.log('点击链接:', link.name, link.url)
  // 这里可以添加路由跳转逻辑
  // router.push(link.url)
  // 或者打开新页面
  // window.open(link.url, '_blank')
  
  // 示例：显示提示信息
  alert(`跳转到: ${link.name}`)
}

// 处理联系信息点击事件
const handleContactClick = (contact: ContactItem) => {
  console.log('点击联系信息:', contact.text, contact.action)
  
  switch (contact.action) {
    case 'phone':
      // 拨打电话
      window.open(`tel:${contact.text}`)
      break
    case 'email':
      // 发送邮件
      window.open(`mailto:${contact.text}`)
      break
    case 'address':
      // 打开地图
      alert(`查看地址: ${contact.text}`)
      break
    case 'hours':
      // 显示营业时间
      alert(`营业时间: ${contact.text}`)
      break
    default:
      alert(`联系信息: ${contact.text}`)
  }
}
</script>

<style scoped>
.custom-footer {
  background-color: #111827;
  color: white;
  padding: 40px 0 0;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 40px;
  }

  .footer-section {
    .company-info {
      .company-header {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        .leaf-icon {
          color: #52c41a;
          font-size: 24px;
          margin-right: 8px;
        }

        .company-name {
          font-size: 24px;
          font-weight: bold;
          margin: 0;
          color: white;
        }
      }

      .tagline {
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 20px;
        color: white;
      }

      .social-icons {
        display: flex;
        gap: 12px;

        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }

    .section-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      color: white;
    }

    .link-list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 12px;

        .footer-link {
          color: white;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;

          &:hover {
            color: #52c41a;
          }
        }
      }
    }

    .contact-info {
      .contact-item {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        font-size: 14px;
        cursor: pointer;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 0.8;
        }

        .contact-icon {
          color: #52c41a;
          font-size: 16px;
          margin-right: 8px;
          min-width: 16px;
        }

        span {
          color: white;
        }
      }
    }
  }

  .footer-bottom {
    margin-top: 40px;

    .footer-divider {
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin-bottom: 20px;
    }

    .bottom-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .copyright {
        font-size: 14px;
        color: white;
      }

      .bottom-links {
        display: flex;
        gap: 20px;

        .bottom-link {
          color: white;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;

          &:hover {
            color: #52c41a;
          }
        }
      }

      .scroll-top {
        width: 40px;
        height: 40px;
        background-color: #52c41a;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #73d13d;
        }

        .scroll-icon {
          color: white;
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .custom-footer {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .footer-bottom {
      .bottom-content {
        flex-direction: column;
        gap: 20px;
        text-align: center;
      }
    }
  }
}
</style>
