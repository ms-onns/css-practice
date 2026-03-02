// Підключення технології express для back-end сервера
const express = require('express');
// Cтворення роутера - місце, куди підключено ендпоїнт
const router = express.Router();

// ================================================================

// router.get Створює один ентпоїнт
//           ↙ тут вводити шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує HTML сторінку
  //            ↙ cюди вводити назву файлу з сontainer
  res.render('pages/index', {});
  //                  ↑↑ сюди вводити JSON дані
});

// ================================================================

router.get('/flex', function (req, res) {
  res.render('pages/flex', {
    style: 'flex',
    cards: [
      {
        title: 'Starter Plan',
        description: 'Basic access for personal projects.',
        price: '$9',
        tag: 'Popular',
        actions: ['Buy now', 'Learn more'],
      },
      {
        title: 'Pro Plan',
        description: 'Advanced tools for professional developers.',
        price: '$29',
        tag: 'Best choice',
        actions: ['Get started'],
      },
      {
        title: 'Team Pack',
        description: 'Collaboration features for small teams.',
        price: '$79',
        tag: null,
        actions: ['Contact sales', 'Details'],
      },
      {
        title: 'Enterprise',
        description:
          'Custom solutions for large companies with extended support and SLA.',
        price: 'Custom',
        tag: 'Enterprise',
        actions: ['Request demo'],
      },
      {
        title: 'Free Trial',
        description:
          'Try all features for 14 days with no credit card required.',
        price: '$0',
        tag: 'Limited',
        actions: ['Start trial'],
      },
      {
        title: 'Education',
        description:
          'Special pricing for students and educational institutions.',
        price: '$5',
        tag: 'Discount',
        actions: ['Verify status', 'Apply'],
      },
      {
        title: 'Lifetime Access',
        description: 'One-time payment with lifetime updates.',
        price: '$199',
        tag: 'One-time',
        actions: ['Buy once'],
      },
      {
        title: 'API Access',
        description: 'Programmatic access for integrations and automation.',
        price: '$49',
        tag: null,
        actions: ['View docs', 'Subscribe'],
      },
      {
        title: 'Cloud Sync',
        description: 'Sync your data across all devices securely.',
        price: '$15',
        tag: 'New',
        actions: ['Enable'],
      },
      {
        title: 'Custom Add-on',
        description: 'Optional features tailored to your workflow.',
        price: '$10+',
        tag: null,
        actions: ['Configure'],
      },
    ],
  });
});

// ================================================================

router.get('/flex-2', function (req, res) {
  res.render('pages/flex-2', {
    style: 'flex-2',
    plans: [
      {
        name: 'Basic',
        price: '$0',
        features: [
          'Access to core features',
          'Community support',
          'Limited storage',
        ],
        cta: 'Start free',
        highlight: false,
      },
      {
        name: 'Pro',
        price: '$29',
        features: [
          'Unlimited projects',
          'Priority support',
          'Advanced analytics',
          'Custom themes',
        ],
        cta: 'Upgrade now',
        highlight: true,
      },
      {
        name: 'Team',
        price: '$79',
        features: [
          'Team collaboration',
          'Role management',
          'Shared dashboards',
        ],
        cta: 'Contact sales',
        highlight: false,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Dedicated support',
          'SLA & compliance',
          'Custom integrations',
        ],
        cta: 'Request demo',
        highlight: false,
      },
    ],
  });
});

// ================================================================

router.get('/flex-3', function (req, res) {
  res.render('pages/flex-3', {
    style: 'flex-3',
    widgets: [
      {
        title: 'Revenue',
        value: '$12,430',
        trend: '+12%',
        actions: ['Details'],
      },
      {
        title: 'Users',
        value: '1,284',
        trend: '+4%',
        actions: ['View', 'Export'],
      },
      {
        title: 'Errors',
        value: '23',
        trend: '-8%',
        actions: ['Inspect'],
      },
      {
        title: 'Uptime',
        value: '99.98%',
        trend: 'Stable',
        actions: ['History'],
      },
      {
        title: 'API Requests',
        value: '245,120',
        trend: '+32%',
        actions: ['Logs', 'Limits', 'Docs'],
      },
      {
        title: 'Latency',
        value: '320ms',
        trend: 'Warning',
        actions: ['Analyze'],
      },
    ],
  });
});

// ================================================================

router.get('/flex-4', function (req, res) {
  res.render('pages/flex-4', {
    style: 'flex-4',
    title: 'Media Dashboard',
    cards: [
      {
        type: 'video',
        title: 'Flexbox Crash Course',
        description: 'Learn flexbox by building real layouts.',
        duration: '12:45',
        stats: { views: '12k', likes: '1.2k' },
        actions: ['Watch', 'Save'],
        featured: true,
      },
      {
        type: 'article',
        title: 'CSS Layout Patterns',
        description:
          'Common layout patterns solved with modern CSS techniques.',
        stats: { views: '8k', likes: '980' },
        actions: ['Read'],
        featured: false,
      },
      {
        type: 'podcast',
        title: 'Frontend Talks #42',
        description: 'Discussion about layout systems: flexbox vs grid.',
        duration: '48 min',
        stats: { views: '3k', likes: '420' },
        actions: ['Listen', 'Download'],
        featured: false,
      },
      {
        type: 'video',
        title: 'Advanced UI Alignment',
        description: 'Deep dive into tricky alignment problems.',
        duration: '22:10',
        stats: { views: '5k', likes: '760' },
        actions: ['Watch'],
        featured: false,
      },
      {
        type: 'article',
        title: 'Design Tokens Explained',
        description: 'How to build scalable UI systems using CSS variables.',
        stats: { views: '15k', likes: '2.1k' },
        actions: ['Read', 'Bookmark'],
        featured: true,
      },
    ],
  });
});

// ================================================================

router.get('/gym', function (req, res) {
  res.render('pages/gym', {
    style: 'gym',
  });
});

// ================================================================

// ================================================================

router.get('/box', (req, res) => {
  res.render('pages/box', {
    style: 'box',
    title: 'Box Model Test',
  });
});

// ================================================================

router.get('/box-2', (req, res) => {
  res.render('pages/box-2', {
    style: 'box-2',
    title: 'Box Model Test',
  });
});

// ================================================================

router.get('/flex-5', (req, res) => {
  res.render('pages/flex-5', {
    style: 'flex-5',
    title: 'flex box Test',
  });
});

// ================================================================

router.get('/media-test', (req, res) => {
  res.render('pages/media-test', {
    style: 'media-test',
    // Дані для нашої товарної картки
    product: {
      name: 'Samsung Galaxy S25 Ultra',
      description:
        'Найпотужніший флагман 2025 року. Титановий корпус, вбудований S Pen та революційна камера 200 Мп з інтелектуальним зумом.',
      price: '54 999 грн',
      image: 'https://picsum.photos/seed/s25/600/500', // Рандомна картинка техніки
      buttonText: 'Купити зараз',
    },
  });
});
// ================================================================

router.get('/media-1', (req, res) => {
  res.render('pages/media-1', {
    style: 'media-1',
    movies: [
      {
        title_ua: 'Інтерстеллар',
        title_en: 'Interstellar',
        poster: 'https://picsum.photos/200/300?random=1',
      },
      {
        title_ua: 'Аватар',
        title_en: 'Avatar',
        poster: 'https://picsum.photos/200/300?random=2',
      },
      {
        title_ua: 'Матриця',
        title_en: 'The Matrix',
        poster: 'https://picsum.photos/200/300?random=3',
      },
      {
        title_ua: 'Месники',
        title_en: 'The Avengers',
        poster: 'https://picsum.photos/200/300?random=4',
      },
      {
        title_ua: 'Початок',
        title_en: 'Inception',
        poster: 'https://picsum.photos/200/300?random=5',
      },

      {
        title_ua: 'Гаррі Поттер',
        title_en: 'Harry Potter',
        poster: 'https://picsum.photos/200/300?random=6',
      },
    ],
  });
});

// ================================================================

router.get('/header-test', (req, res) => {
  res.render('pages/header-test', {
    style: 'header-test',
  });
});

// ================================================================

router.get('/tech-store-1', function (req, res) {
  res.render('pages/tech-store-1', {
    style: 'tech-store-1',
    products: [
      {
        id: 1,
        name: 'iPhone 15 Pro',
        price: '45 000 ₴',
        img: 'https://picsum.photos/300/300?random=1',
        badge: { type: 'hot', text: 'HOT' },
      },
      {
        id: 2,
        name: 'MacBook Air M2',
        price: '52 000 ₴',
        img: 'https://picsum.photos/300/300?random=2',
        badge: { type: 'new', text: 'NEW' },
      },
      {
        id: 3,
        name: 'AirPods Max',
        price: '22 000 ₴',
        img: 'https://picsum.photos/300/300?random=3',
        badge: { type: 'sale', text: '-15%' },
      },
    ],
  });
});

// ================================================================

router.get('/tech-store-2', function (req, res) {
  res.render('pages/tech-store-2', {
    style: 'tech-store-2',
    products: [
      {
        id: 1,
        name: 'iPhone 15 Pro',
        price: '45 000 ₴',
        img: 'https://picsum.photos/300/400?random=1',
        badgeText: 'Hot',
        badgeClass: 'hot',
      },
      {
        id: 2,
        name: 'MacBook Air M2',
        price: '52 000 ₴',
        img: 'https://picsum.photos/300/400?random=2',
        badgeText: 'New',
        badgeClass: 'new',
      },
      {
        id: 3,
        name: 'AirPods Max',
        price: '22 000 ₴',
        img: 'https://picsum.photos/300/400?random=3',
        badgeText: '-15%',
        badgeClass: 'sale',
      },
      {
        id: 4,
        name: 'Sony PS5',
        price: '24 500 ₴',
        img: 'https://picsum.photos/300/400?random=4',
        badgeText: 'Top',
        badgeClass: 'top',
      },
    ],
  });
});

// ================================================================
router.get('/', function (req, res) {
  res.render('pages/index', {});
});
// ================================================================

// Підключення роутера до бек-енду
module.exports = router;
