# AIPartners Platform

AI Solutions - Generative AI Success Stories Platform

## Features

- 🌐 Multi-language support (Vietnamese, English, Japanese)
- 🎨 Modern UI with Tailwind CSS and Shadcn/ui components
- 🚀 React + TypeScript frontend
- ⚡ Express.js backend with PostgreSQL
- 🎭 Framer Motion animations
- 📱 Fully responsive design
- 🔧 Professional B2B interface

## Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (Neon Database recommended)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see Environment Variables section)

4. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment on Vercel

### Step 1: Prepare for Deployment

1. Make sure all dependencies are installed:
```bash
npm install
```

2. Build the client:
```bash
cd client && npm run build && cd ..
```

### Step 2: Deploy to Vercel

#### Option A: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

#### Option B: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the configuration and deploy

### Step 3: Environment Variables

In your Vercel dashboard, add these environment variables:

- `DATABASE_URL` - Your PostgreSQL connection string
- `NODE_ENV` - Set to "production"
- `SESSION_SECRET` - A secure random string for sessions

### Step 4: Domain Configuration

- Your app will be available at `your-project.vercel.app`
- You can configure a custom domain in the Vercel dashboard

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts (i18n, etc.)
│   │   └── lib/           # Utility functions
│   └── public/
│       └── locales/       # Translation files
├── server/                # Express.js backend
├── shared/               # Shared types and schemas
├── vercel.json          # Vercel configuration
└── build.sh             # Build script
```

## Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@host:port/database"
NODE_ENV="development"
SESSION_SECRET="your-secure-session-secret"
```

For production (Vercel), set these in the Vercel dashboard under Settings > Environment Variables.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `./build.sh` - Run full build script

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite build tool
- Tailwind CSS + Shadcn/ui components
- Framer Motion animations
- TanStack Query for data fetching
- Wouter for routing

### Backend  
- Express.js with TypeScript
- Drizzle ORM with PostgreSQL
- Express sessions for authentication
- RESTful API design

### Deployment
- Vercel hosting platform
- Neon Database (PostgreSQL)
- Automatic deployments from Git

## Internationalization

The platform supports 3 languages:
- Vietnamese (default)
- English 
- Japanese

Translation files are organized in `client/public/locales/{language}/landing/` and loaded dynamically.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For technical support or questions, please contact the development team.