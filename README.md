# food-fest-ticket-landing-page


A modern, responsive ticket sales landing page for Food Fest, built with Vue 3 and Vite. The application showcases three ticket tiers (Bronze, Silver, and Gold) with different benefits and pricing options.

## 🌟 Features

- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Interactive Ticket Tiers**: Browse three ticket options with detailed benefits and pricing
- **Vue 3 Composition API**: Modern Vue development with reactive components
- **Fast Development**: Hot module replacement (HMR) for instant feedback during development
- **Optimized Build**: Production-ready builds with Vite for fast load times

## 📋 Ticket Tiers

### Bronze - R350
- Single-day entry
- Access to all street food stalls
- Community stage music lineup

### Silver - R650 ⭐
- Weekend entry (2 days)
- Reserved lounge seating zones
- One complimentary tasting platter
- Express check-in lane

### Gold - R1,100
- All weekend VIP entry
- Chef meet-and-greet session
- Private viewing deck for headline sets
- Festival welcome pack and merch voucher

## 🛠️ Tech Stack

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Next-generation front-end build tool
- **Node.js**: Runtime environment (v22.18.0 or >=24.12.0)

## 📦 Prerequisites

- Node.js v22.18.0 or >=24.12.0
- npm (comes with Node.js)

## 🚀 Getting Started

### Installation

```sh
npm install
```

### Development

Start the development server with hot reload:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Code Formatting

Format your code using oxfmt:

```sh
npm run format
```

### Production Build

Build the application for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── TicketTierCard.vue    # Individual ticket tier card
│   ├── TheWelcome.vue        # Welcome section
│   ├── HelloWorld.vue        # Sample component
│   └── icons/                # Icon components
├── views/               # Page components
│   ├── HomeView.vue     # Landing page
│   └── AboutView.vue    # About page
├── data/
│   └── tickets.js       # Ticket tier data
├── stores/              # Pinia state management
├── router/              # Vue Router configuration
├── assets/              # Static assets and styles
│   ├── base.css
│   └── main.css
├── App.vue              # Root component
└── main.js              # Application entry point
```

## 🎨 IDE Setup

**Recommended:**
- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension (disable Vetur if installed)

## 🔧 Browser DevTools

**Chrome/Edge/Brave:**
- [Vue.js DevTools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- Enable Custom Object Formatter in DevTools

**Firefox:**
- [Vue.js DevTools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- Enable Custom Object Formatter in DevTools

## 📚 Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vite.dev/)
![screenshot](ticket.png)
- [Vite Configuration Reference](https://vite.dev/config/)
