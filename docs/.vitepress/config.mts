import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VIVY',
  description: 'VIVY Documentation',
  outDir: '../dist',
  themeConfig: {
    logo: {
      src: '/icon.png',
      width: 24,
      height: 24,
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Changelog', link: '/CHANGELOG.md' },
    ],
    sidebar: {
      '/zh/guide/': [
        {
          text: '前言',
          link: '/zh/guide/',
        },
        {
          text: '入门',
          collapsed: false,
          items: [
            {
              text: '硬件要求',
              link: '/zh/guide/basics/requirements',
            },
            {
              text: '安装',
              link: '/zh/guide/basics/installation',
            },
            {
              text: '快速开始',
              link: '/zh/guide/basics/quickstart',
            },
          ],
        },
        {
          text: '使用',
          collapsed: false,
          items: [
            {
              text: '模型管理',
              link: '/zh/guide/usage/model',
            },
            {
              text: '文生图',
              link: '/zh/guide/usage/txt2img',
            },
            {
              text: '图生图',
              link: '/zh/guide/usage/img2img',
            },
            {
              text: '提示词编辑器',
              link: '/zh/guide/usage/prompt-builder',
            },
            {
              text: '参数导入',
              link: '/zh/guide/usage/import-params',
            },
            {
              text: '局部重绘',
              link: '/zh/guide/usage/inpaint',
            },
            {
              text: '高清化',
              link: '/zh/guide/usage/upscale',
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/liriliri/vivy-docs',
      },
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '中文',
      lang: 'zh',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '更新日志', link: '/zh/CHANGELOG.md' },
        ],
      },
    },
  },
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-8K41KLQRS0',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8K41KLQRS0');`,
    ],
  ],
})
