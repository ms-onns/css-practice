// Підключення технології express для back-end сервера
const express = require('express')
// Cтворення роутера - місце, куди підключено ендпоїнт
const router = express.Router()

// ================================================================

// router.get Створює один ентпоїнт
//           ↙ тут вводити шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує HTML сторінку
  //            ↙ cюди вводити назву файлу з сontainer
  res.render('pages/index', {})
  //                  ↑↑ сюди вводити JSON дані
})

// ================================================================

router.get('/flex', function (req, res) {
  res.render('pages/flex', {
    layout: 'flex',
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
  })
})

// Підключення роутера до бек-енду
module.exports = router
