/**
 * Internationalization (i18n) Configuration
 * 支持中英文切换
 */

export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Crafting Digital Experiences',
      subtitle:
        'I design and build beautiful, functional digital products that solve real problems and delight users.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
      projectsCompleted: 'Projects Completed',
      yearsExperience: 'Years Experience',
      happyClients: 'Happy Clients',
    },
    projects: {
      title: 'Featured Projects',
      subtitle:
        'A selection of recent projects that showcase my expertise in design and development.',
      project1: {
        title: 'Profile',
        description:
          'A personal portfolio website showcasing professional experience, skills, and projects. Features include responsive design, project gallery, contact forms, and multi-language support.',
        tags: ['Portfolio', 'Web Design', 'Responsive', 'Multi-language'],
      },
      project2: {
        title: 'Dreamscapes R',
        description:
          'A showcase library featuring dreamscapes with generated texts and sentences describing various pictures of dreams, creating an interactive gallery of imaginative visualizations.',
        tags: ['Design', 'React', 'Storybook', 'Figma'],
      },
      project3: {
        title: 'Analytics Dashboard',
        description:
          'Real-time analytics dashboard for monitoring business metrics. Includes interactive charts, data filtering, and custom reporting features.',
        tags: ['React', 'D3.js', 'API', 'TypeScript'],
      },
      viewProject: 'View Project',
    },
    about: {
      title: 'About Me',
      description1:
        "I'm a designer and developer passionate about creating beautiful, functional digital experiences. With over 5 years of experience, I've worked with startups and established companies to bring their visions to life.",
      description2:
        'My approach combines strategic thinking with meticulous attention to detail. I believe great design is invisible—it works so well that users don\'t think about it.',
      description3:
        "When I'm not designing or coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.",
      design: 'Design',
      frontend: 'Frontend',
      backend: 'Backend',
      designSkills: ['UI/UX Design', 'Figma', 'Prototyping', 'Design Systems'],
      frontendSkills: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
      backendSkills: ['Node.js', 'PostgreSQL', 'API Design', 'GraphQL'],
    },
    contact: {
      title: 'Let\'s Work Together',
      subtitle:
        'Have a project in mind? I\'d love to hear about it. Get in touch and let\'s create something amazing.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send Message',
      connectSocial: 'Or connect with me on social media',
    },
    footer: {
      brand: 'Portfolio',
      description: 'Designer & Developer crafting digital experiences.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      copyright: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
    },
  },
  zh: {
    nav: {
      home: '首页',
      projects: '项目',
      about: '关于',
      contact: '联系',
    },
    hero: {
      title: '打造数字体验',
      subtitle:
        '我设计和开发美观、功能强大的数字产品，解决实际问题并为用户带来愉悦体验。',
      viewWork: '查看我的作品',
      getInTouch: '联系我',
      projectsCompleted: '完成项目',
      yearsExperience: '年工作经验',
      happyClients: '满意客户',
    },
    projects: {
      title: '精选项目',
      subtitle: '以下是我最近完成的项目，展示了我在设计和开发方面的专业能力。',
      project1: {
        title: '个人作品集',
        description:
          '个人作品集网站，展示专业经验、技能和项目。包含响应式设计、项目画廊、联系表单和多语言支持等功能。',
        tags: ['作品集', '网页设计', '响应式', '多语言'],
      },
      project2: {
        title: '梦境 R',
        description:
          '一个展示库，展示梦景，并附带生成的文本和句子描述各种梦的图片，创造一个互动的想象可视化画廊。',
        tags: ['设计', 'React', 'Storybook', 'Figma'],
      },
      project3: {
        title: '数据分析仪表板',
        description:
          '用于监控业务指标的实时数据分析仪表板。包含交互式图表、数据筛选和自定义报告功能。',
        tags: ['React', 'D3.js', 'API', 'TypeScript'],
      },
      viewProject: '查看项目',
    },
    about: {
      title: '关于我',
      description1:
        '我是一名设计师和开发者，热衷于创造美观、功能强大的数字体验。拥有 5 年以上的工作经验，曾与初创公司和大型企业合作，将他们的愿景变为现实。',
      description2:
        '我的方法结合了战略思维和对细节的精细关注。我相信优秀的设计是无形的——它的效果如此之好，以至于用户甚至不会想到它。',
      description3:
        '在不设计或编码的时候，你会发现我在探索新技术、为开源项目做贡献或与社区分享知识。',
      design: '设计',
      frontend: '前端',
      backend: '后端',
      designSkills: ['UI/UX 设计', 'Figma', '原型设计', '设计系统'],
      frontendSkills: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
      backendSkills: ['Node.js', 'PostgreSQL', 'API 设计', 'GraphQL'],
    },
    contact: {
      title: '让我们一起工作',
      subtitle: '有项目想法？我很乐意听听。联系我，让我们一起创造令人惊艳的东西。',
      name: '姓名',
      email: '邮箱',
      message: '信息',
      namePlaceholder: '您的姓名',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: '告诉我您的项目...',
      send: '发送信息',
      connectSocial: '或在社交媒体上与我联系',
    },
    footer: {
      brand: '作品集',
      description: '设计师和开发者，打造数字体验。',
      quickLinks: '快速链接',
      contactInfo: '联系方式',
      copyright: '版权所有。',
      privacy: '隐私',
      terms: '条款',
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];
