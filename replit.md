# AI Solutions - Generative AI Success Stories Platform

## Overview

This is a modern web application showcasing generative AI success stories and Google Cloud partner solutions. The platform serves as a marketing and informational site highlighting real-world implementations of AI technologies, featuring case studies from companies like AES, Airwallex, and Allegro. The application is built as a full-stack solution with a React frontend and Express backend, designed to connect businesses with AI solution providers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with a simple API
- **UI Framework**: Shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable components
- **Styling**: Tailwind CSS with custom design tokens following Google's design language, including Google Blue color scheme
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and easy swapping to database storage
- **API Design**: RESTful API structure with `/api` prefix for all backend routes
- **Session Management**: Express sessions with PostgreSQL session store support

### Database Design
- **ORM**: Drizzle ORM chosen for its type safety and SQL-like query builder
- **Schema**: Currently implements a basic user system with username/password authentication
- **Migration System**: Drizzle Kit for database schema migrations and management
- **Connection**: Neon Database serverless PostgreSQL for scalable cloud database hosting

### Development & Build System
- **Package Manager**: npm with lockfile for consistent dependency management
- **Development Server**: Vite dev server with HMR (Hot Module Replacement) for fast development
- **TypeScript Configuration**: Shared TypeScript config across client, server, and shared modules
- **Build Process**: Separate build steps for frontend (Vite) and backend (esbuild) with optimized production bundles
- **Path Aliases**: Configured for clean imports using `@/` for client code and `@shared/` for shared utilities

### Project Structure
- **Monorepo Layout**: Single repository with `client/`, `server/`, and `shared/` directories
- **Client**: React application with component-based architecture and page routing
- **Server**: Express API server with modular route and storage architecture
- **Shared**: Common TypeScript types, database schemas, and utilities shared between client and server
- **Internationalization**: Multi-language support with section-based JSON structure (`locales/{lang}/landing/` and `locales/{lang}/pages/`)

## External Dependencies

### UI & Design System
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for building design systems
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Modern icon library with React components
- **React Icons**: Additional icon sets including social media icons

### Data & State Management
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms with minimal re-renders and easy validation
- **Zod**: TypeScript-first schema validation for form data and API responses

### Database & Backend
- **Neon Database**: Serverless PostgreSQL platform for modern applications
- **Drizzle ORM**: Type-safe ORM with SQL-like syntax and excellent TypeScript integration
- **Express**: Minimal and flexible Node.js web application framework

### Development Tools
- **Vite**: Next-generation frontend build tool with fast HMR and optimized builds
- **esbuild**: Extremely fast JavaScript bundler for backend compilation
- **TypeScript**: Static type checking for enhanced developer experience and code reliability

### Animation & Interaction
- **Framer Motion**: Production-ready motion library for React applications
- **Embla Carousel**: Lightweight carousel library with touch support

### Form Handling & Validation
- **Hookform Resolvers**: Validation resolvers for React Hook Form
- **Drizzle Zod**: Integration between Drizzle schemas and Zod validation

### Internationalization (i18n)
- **Multi-language Support**: Vietnamese (default), English, and Japanese translations
- **Structured Organization**: Translation files organized by sections (`Header.json`, `HeroSection.json`, `AboutSection.json`, `FeaturesSection.json`) within language directories
- **Context-based System**: React Context API for global language state management with localStorage persistence
- **Section-based Loading**: Dynamic loading of translation files by section for better performance and maintainability
- **Professional Language Switcher**: Responsive UI component with flag icons and smooth animations
- **Translation Keys**: Dot-notation access (e.g., `t("FeaturesSection.title")`) for structured content organization
- **File Structure**: 
  - `locales/{language}/landing/` - Landing page sections
  - `locales/{language}/pages/` - Application-wide translations
- **Fallback System**: Automatic fallback to Vietnamese if translation loading fails

## Recent Changes (January 2025)

### i18n Implementation Completion
- **Date**: January 13, 2025
- **Status**: ✅ Completed - 100% i18n coverage achieved
- **Changes Made**:
  - Completed comprehensive audit of all UI components for hardcoded text strings
  - Created complete JSON translation structure for all missing components (AboutSection, AITrainersModel, Footer, SuccessStoriesSection, PartnersSection, ContactSection, NotFound page)
  - Implemented i18n hooks in all major components using `useI18n()` context
  - Updated i18n context to dynamically load all section files with proper error handling and fallbacks
  - Provided professional B2B translations for all three languages (Vietnamese, English, Japanese)
  - Fixed mission statement content to match user specifications: "Khai thác sức mạnh cộng hưởng trong hệ sinh thái..."
  - Added structured core values data with proper translations
  - All components now fully support language switching without any hardcoded strings remaining

### Strategic Direction Section Addition
- **Date**: January 13, 2025
- **Changes Made**:
  - Created new StrategicDirectionSection component with professional B2B design
  - Added comprehensive JSON translation files for all three languages (VI/EN/JP)
  - Integrated section between "Our Core Values" and "Success Stories" on homepage
  - Updated i18n context to load new section translations
  - Content covers: Enterprise Partnership, AI Talent Development, and International Collaboration
  - Features modern card-based design with hover animations and gradient accents

### Features Section Redesign
- **Date**: January 13, 2025
- **Changes Made**:
  - Completely redesigned "Why Choose AIPartners?" section with modern B2B professional layout
  - Changed from 3-column grid to 2-column asymmetric layout (features list + visual element)
  - Updated icons from Shield/Users/Target to Building2/Brain/Handshake for better B2B representation
  - Added numbered badges (01, 02, 03) and interactive hover effects with color-coded themes
  - Integrated performance metrics visualization with animated progress bars
  - Updated all translation content (VI/EN/JP) for more professional B2B messaging
  - Replaced complex gradient backgrounds with subtle dot pattern for cleaner appearance
  - Added Google Blue color scheme consistency throughout the component