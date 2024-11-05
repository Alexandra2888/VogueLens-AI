# VogueLens AI 🎭

VogueLens AI is an intelligent fashion advisor that helps users make better style choices through AI-powered analysis. Upload your clothing items, get color palette insights, style recommendations, and create your perfect wardrobe.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)

## ✨ Features

- 🤖 AI-powered style analysis
- 🎨 Color palette extraction
- 👗 Style classification
- 📅 Occasion-based recommendations
- 📱 Responsive design
- 🌓 Dark mode support
- ⚡️ Performance optimized

## 🛠 Tech Stack

### Frontend

- Next.js 14 with TypeScript
- Tailwind CSS + shadcn/ui
- Zustand for state management
- Next.js Image optimization
- Code splitting and lazy loading

### AI & APIs

- OpenAI API for style recommendations
- Google Cloud Vision API for image analysis
- Clerk for authentication
- Web API for image handling

### Infrastructure

- Vercel hosting
- CDN for static assets
- Vercel's Built-in Error Monitoring

### Testing

- Jest + React Testing Library for unit tests
- Playwright for E2E testing

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. Clone the repository

```bash
git clone git@github.com:Alexandra2888/VogueLens-AI.git
cd voguelens-ai
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your environment variables:

```env
# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# OpenAI
OPENAI_API_KEY=

# Google Cloud Vision
GOOGLE_APPLICATION_CREDENTIALS=
```

4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
voguelens-ai/
├── src/
│   ├── app/              # Next.js 14 app directory
│   ├── components/       # React components
│   │   ├── ui/          # UI components
│   │   └── features/    # Feature components
│   ├── lib/             # Utility functions
│   ├── styles/          # Global styles
│   └── types/           # TypeScript types
├── public/              # Static assets
├── tests/               # Test files
│   ├── unit/
│   └── e2e/
└── docs/               # Documentation
```

## 🧪 Testing

Run unit tests:

```bash
npm run test
```

Run E2E tests:

```bash
npm run test:e2e
```

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Run Prettier
npm run test         # Run tests
npm run test:e2e     # Run E2E tests
```

## 🔒 Security

- API rate limiting implemented
- Secure headers configured
- Input validation with Zod
- Image upload restrictions
- Authentication with Clerk

## 📈 Monitoring

- Vercel's Built-in Error Monitoring
- Web Vitals monitoring
- API performance monitoring
- User analytics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m 'feat: add amazing feature'
```

4. Push to the branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)
- [OpenAI](https://openai.com/)

## 📞 Support

For support, email moldovan.alexandra28@gmail.com.

## 🔮 Roadmap

- [ ] Virtual wardrobe functionality
- [ ] Outfit generator
- [ ] Trend matching

## 🌟 Show your support

Give a ⭐️ if this project helped you!
