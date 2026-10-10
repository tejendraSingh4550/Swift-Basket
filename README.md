# SwiftBasket

A responsive quick-commerce grocery storefront demo built with standalone Angular components. Browse everyday Indian grocery favourites, filter by category, add products to a persistent basket, apply demo coupons, and complete a simulated checkout.

## Features

- Responsive home page, product catalog, category pages, basket, checkout, and order confirmation.
- Signal-based cart state shared through Angular dependency injection and persisted in `localStorage`.
- Live product search, category filters, and price sorting.
- Demo coupon codes: `SAVE10` (10% off) and `FRESH50` (₹50 off on baskets of ₹399 or more).
- Reactive checkout validation with Cash on Delivery and simulated UPI options.
- Frontend demo only. No real payments are processed and no payment credentials are collected.

## Technology

Angular 21, TypeScript, standalone components, Angular Router, Angular Signals, Reactive Forms, and CSS.

## Setup

```bash
npm install
npm start
```

Open `http://localhost:4200`. Create a production build with `npm run build`.

## Screenshots

Screenshots can be added here after running the app at desktop and mobile sizes.
