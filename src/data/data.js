// ================================================================
// ФАЙЛ: src/data/data.js
// Тут зберігаються всі масиви та об'єкти (імітація Бази Даних)
// ================================================================

const flexCards = [
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
    description: 'Try all features for 14 days with no credit card required.',
    price: '$0',
    tag: 'Limited',
    actions: ['Start trial'],
  },
  {
    title: 'Education',
    description: 'Special pricing for students and educational institutions.',
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
];
// ================================================================
const flex2Plans = [
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
    features: ['Team collaboration', 'Role management', 'Shared dashboards'],
    cta: 'Contact sales',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Dedicated support', 'SLA & compliance', 'Custom integrations'],
    cta: 'Request demo',
    highlight: false,
  },
];
// ================================================================
const flex3Widgets = [
  { title: 'Revenue', value: '$12,430', trend: '+12%', actions: ['Details'] },
  { title: 'Users', value: '1,284', trend: '+4%', actions: ['View', 'Export'] },
  { title: 'Errors', value: '23', trend: '-8%', actions: ['Inspect'] },
  { title: 'Uptime', value: '99.98%', trend: 'Stable', actions: ['History'] },
  {
    title: 'API Requests',
    value: '245,120',
    trend: '+32%',
    actions: ['Logs', 'Limits', 'Docs'],
  },
  { title: 'Latency', value: '320ms', trend: 'Warning', actions: ['Analyze'] },
];
// ================================================================
const flex4Cards = [
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
    description: 'Common layout patterns solved with modern CSS techniques.',
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
];
// ================================================================
const mediaTestProduct = {
  name: 'Samsung Galaxy S25 Ultra',
  description:
    'Найпотужніший флагман 2025 року. Титановий корпус, вбудований S Pen та революційна камера 200 Мп з інтелектуальним зумом.',
  price: '54 999 грн',
  image: 'https://picsum.photos/seed/s25/600/500',
  buttonText: 'Купити зараз',
};
// ================================================================
const media1Movies = [
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
];
// ================================================================
const techStore1Products = [
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
];
// ================================================================
const techStore2Products = [
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
];

// Експортуємо всі змінні, щоб інші файли могли їх використовувати
module.exports = {
  flexCards,
  flex2Plans,
  flex3Widgets,
  flex4Cards,
  mediaTestProduct,
  media1Movies,
  techStore1Products,
  techStore2Products,
};
