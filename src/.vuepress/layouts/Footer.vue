<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="company-info">
          <div class="company-header">
            <h3 class="company-name">BotanicalCollector</h3>
          </div>
          <p class="tagline">{{ description }}</p>
          <div class="social-icons">
            <div
              v-for="social in socialIcons"
              :key="social.id"
              class="social-icon"
              @click="handleSocialClick(social)"
            >
              <component :is="social.icon" />
            </div>
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
        <h4 class="section-title">{{ contactInfo.title }}</h4>
        <div class="contact-info">
          <div 
            v-for="contact in contactInfo.contacts" 
            :key="contact.id" 
            :class="['contact-item', contact.action === 'ebay' ? 'ebay-item' : '']"
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
          © 2023 Green Paradise Tropical Plants, All Rights Reserved.
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
  InstagramOutlined,
  FacebookOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  UpOutlined,
  MessageOutlined,
  LinkOutlined
} from '@ant-design/icons-vue'
import { h } from 'vue'

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
  url?: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SocialIcon {
  id: number
  name: string
  icon: any
  url: string
}

const description = `We have over 30 greenhouses, located at Hainan, Guangxi,Yunnan, Beijing.We specialize in the supply of rare plants, including Euphorbia, Pachypodium, Cactus, Primulina, Bulbs, Aloe, Agave, Othonna, and more. All plants are carefully cultivated in our own greenhouses to ensure they are healthy, stable, and of high quality.`

// TikTok 图标组件（自定义 SVG）
const TikTokIcon = {
  render: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    style: { width: '1em', height: '1em', fontSize: 'inherit' }
  }, [
    h('path', {
      d: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.89 2.89 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'
    })
  ])
}

// 社交图标数据
const socialIcons = ref<SocialIcon[]>([
  {
    id: 1,
    name: 'Facebook',
    icon: FacebookOutlined,
    url: 'https://www.facebook.com/people/Patti-Caudex-Supply/pfbid0gi2aXMQf5KahmHU6q5D3grhBFpnevQbq58KJqPoJG4TkoUgKnemQf76X2Q9VgMsrl' // 链接待定
  },
  {
    id: 2,
    name: 'Instagram',
    icon: InstagramOutlined,
    url: 'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fbotanical_collector%2F&is_from_rle' // 链接待定
  },
  {
    id: 3,
    name: 'TikTok',
    icon: TikTokIcon,
    url: 'https://www.tiktok.com/@patticaudexsupply' // 链接待定
  }
])

// 快速链接数据
const quickLinks = ref<FooterSection>({
  title: 'Quick Links',
  links: [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'Plant Series', url: '/products' },
    { id: 3, name: 'Browse by Category', url: '/scene' },
    { id: 4, name: 'Care Guide', url: '/guide' },
    { id: 5, name: 'About Us', url: '/about' }
  ]
})

// 联系信息数据
const contactInfo = ref({
  title: 'Contact Us',
  contacts: [
    {
      id: 1,
      text: 'Whatsapp: +447512658910',
      icon: MessageOutlined,
      action: 'whatsapp',
      url: 'https://wa.me/447512658910'
    },
    {
      id: 2,
      text: 'Phone: +447512658910',
      icon: PhoneOutlined,
      action: 'phone',
      url: 'tel:+447512658910'
    },
    {
      id: 3,
      text: 'Email: patticaudex@gmail.com',
      icon: MailOutlined,
      action: 'email',
      url: 'mailto:patticaudex@gmail.com'
    },
    {
      id: 4,
      text: 'Ebay: https://www.ebay.com/usr/pattigarden_rarecactuscollector',
      icon: LinkOutlined,
      action: 'ebay',
      url: 'https://www.ebay.com/usr/pattigarden_rarecactuscollector'
    }
  ] as ContactItem[]
})

// 底部链接数据
const bottomLinks = ref<FooterLink[]>([
  { id: 1, name: 'Privacy Policy', url: '/privacy' },
  { id: 2, name: 'Terms of Use', url: '/terms' },
  { id: 3, name: 'Sitemap', url: '/sitemap' }
])

// 处理链接点击事件
const handleLinkClick = (link: FooterLink) => {
  console.log('Click link:', link.name, link.url)
  // 这里可以添加路由跳转逻辑
  // router.push(link.url)
  // 或者打开新页面
  // window.open(link.url, '_blank')
  
  // 示例：显示提示信息
  alert(`Navigate to: ${link.name}`)
}

// 处理社交图标点击事件
const handleSocialClick = (social: SocialIcon) => {
  console.log('Click social icon:', social.name, social.url)
  if (social.url && social.url !== '#') {
    window.open(social.url, '_blank')
  } else {
    console.log(`${social.name} 链接待定`)
  }
}

// 处理联系信息点击事件
const handleContactClick = (contact: ContactItem) => {
  console.log('Click contact info:', contact.text, contact.action)
  
  // 如果有URL，直接打开链接
  if (contact.url) {
    window.open(contact.url, '_blank')
    return
  }
  
  switch (contact.action) {
    case 'phone':
      // 拨打电话
      window.open(`tel:${contact.text}`)
      break
    case 'email':
      // 发送邮件
      window.open(`mailto:${contact.text}`)
      break
    case 'whatsapp':
      // 打开WhatsApp
      window.open(`https://wa.me/447512658910`, '_blank')
      break
    case 'ebay':
      // 打开Ebay链接
      window.open(contact.url || 'https://www.ebay.com/usr/pattigarden_rarecactuscollector', '_blank')
      break
    case 'address':
      // 打开地图
      alert(`View address: ${contact.text}`)
      break
    case 'hours':
      // 显示营业时间
      alert(`Business hours: ${contact.text}`)
      break
    default:
      alert(`Contact info: ${contact.text}`)
  }
}
</script>

<style scoped>
.custom-footer {
  background-color: #111827;
  color: white;
  padding: 40px 0 0;

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 3fr 1fr 2fr;
    gap: 40px;
  }

  .footer-section {
    .company-info {
      .company-header {
        margin-top: 20px;
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
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
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
          white-space: nowrap;
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
