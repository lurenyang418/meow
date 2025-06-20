import { defineConfig } from 'vitepress'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  cleanUrls: true, // 开启纯净链接
  title: "喵～",
  description: "喵喵日记本",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '学习', items: [
          {
            text: "go",
            link: '/go'
          },
          {
            text: "python",
            link: "/python"
          }
        ]
      },
      { text: `VitePress ${pkg.version}`, link: 'https://vitepress.dev/zh/' },
    ],
    logo: 'logo.png',
    siteTitle: "喵～",
    sidebar: [
    ],

    sidebarMenuLabel: "目录",
    returnToTopLabel: '返回顶部',
    lastUpdated: {
      text: '最近更新时间',
      formatOptions: {
        dateStyle: "short", // 可选值full、long、medium、short
        timeStyle: "medium", // 可选值full、long、medium、short
      }
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lurenyang418' }
    ],

    // 本地搜索
    search: {
      provider: "local"
    },

    // 页脚
    footer: {
      message: "hello",
      copyright: "Copyright © 2025-now present meow"
    }
  }
})
