import { defineConfig } from 'vitepress'

const editLinkPattern =
  'https://github.com/liriliri/vivy-docs/edit/master/docs/:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VIVY',
  description: 'VIVY Documentation',
  lastUpdated: true,
  outDir: '../dist',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    logo: {
      src: '/logo.png',
      width: 48,
      height: 48,
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Changelog', link: '/CHANGELOG.md' },
    ],
    editLink: {
      pattern: editLinkPattern,
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
        outlineTitle: '在这一页上',
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '更新日志', link: '/zh/CHANGELOG.md' },
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
                  text: '用户界面',
                  link: '/zh/guide/usage/ui',
                },
                {
                  text: '模型管理',
                  link: '/zh/guide/usage/model',
                },
                {
                  text: '文生图',
                  link: '/zh/guide/usage/txt2img',
                },
                {
                  text: '参数导入',
                  link: '/zh/guide/usage/import-params',
                },
                {
                  text: '提示词编辑器',
                  link: '/zh/guide/usage/prompt-builder',
                },
                {
                  text: '图生图',
                  link: '/zh/guide/usage/img2img',
                },
                {
                  text: '局部重绘',
                  link: '/zh/guide/usage/inpaint',
                },
                {
                  text: '图片处理',
                  link: '/zh/guide/usage/img-processing',
                },
                {
                  text: 'ControlNet',
                  link: '/zh/guide/usage/control-net',
                },
                {
                  text: 'AMD 显卡',
                  link: '/zh/guide/usage/amd',
                },
                {
                  text: '常用问题',
                  link: '/zh/guide/usage/faq',
                },
              ],
            },
            {
              text: 'Stable Diffusion',
              collapsed: false,
              items: [
                {
                  text: '模型',
                  link: '/zh/guide/sd/model',
                },
              ],
            },
          ],
        },
        editLink: {
          pattern: editLinkPattern,
          text: '提出修改意见',
        },
        lastUpdatedText: '修改日期',
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
