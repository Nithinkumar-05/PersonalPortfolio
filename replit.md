# Portfolio Application - Replit Guide

## Overview

This is a full-stack portfolio web application built with React and Node.js. The application showcases a developer's professional profile including experience, skills, projects, and achievements. It features a modern dark theme design with glass morphism effects and includes a contact form for visitor inquiries.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **Theme**: Dark theme with cyber/space aesthetic using custom CSS variables

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: TSX for TypeScript execution in development

### Database Design
- **Users Table**: Stores user authentication data (id, username, password)
- **Contact Messages Table**: Stores contact form submissions (id, name, email, subject, message, created_at)
- **Schema Validation**: Zod schemas for runtime type checking and validation

## Key Components

### Portfolio Sections
1. **Hero Section**: Professional introduction with profile image and call-to-action
2. **About Section**: Educational background and professional objective
3. **Skills Section**: Technical skills organized by category (Languages, Frontend, Backend, Tools)
4. **Experience Section**: Professional work experience with detailed responsibilities
5. **Projects Section**: Featured projects with technology stacks and descriptions
6. **Achievements Section**: Competitive programming accomplishments
7. **Contact Section**: Interactive contact form with validation
8. **Footer**: Social links and professional information

### Technical Features
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Form Validation**: Client and server-side validation using Zod
- **Toast Notifications**: User feedback for form submissions
- **Glass Morphism Effects**: Modern UI design with backdrop blur effects
- **Animation**: CSS animations for enhanced user experience

## Data Flow

### Contact Form Workflow
1. User fills out contact form with name, email, subject, and message
2. Client-side validation using Zod schema
3. Form data submitted via POST request to `/api/contact`
4. Server validates data and stores in PostgreSQL database
5. Success/error response sent back to client
6. Toast notification displays result to user

### Development Workflow
1. Vite serves frontend assets with HMR (Hot Module Replacement)
2. Express server handles API routes and serves static files in production
3. TypeScript compilation handled by TSX in development
4. Database migrations managed through Drizzle Kit

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: TailwindCSS, Radix UI components, Lucide icons
- **State Management**: TanStack Query for API state
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Class Variance Authority for component variants

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL store
- **Validation**: Zod for schema validation
- **Development**: TSX for TypeScript execution

### Build & Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full TypeScript support across frontend and backend
- **Code Quality**: ESBuild for production bundling
- **Database Tools**: Drizzle Kit for schema management and migrations

## Deployment Strategy

### Production Build Process
1. Frontend assets built using Vite and output to `dist/public`
2. Backend TypeScript compiled using ESBuild to `dist/index.js`
3. Static files served directly by Express in production
4. Database connection via environment variable `DATABASE_URL`

### Environment Configuration
- **Development**: Uses Vite dev server with Express API proxy
- **Production**: Express serves both API and static frontend assets
- **Database**: PostgreSQL connection configured via `DATABASE_URL`
- **Port Configuration**: Runs on port 5000 (configurable via environment)

### Replit Integration
- **Modules**: Configured for Node.js 20, web development, and PostgreSQL 16
- **Auto-deployment**: Builds and deploys automatically via Replit's deployment system
- **Development Command**: `npm run dev` starts both frontend and backend
- **Production Command**: `npm run start` serves the built application

## Changelog

```
Changelog:
- June 25, 2025. Initial setup
- June 25, 2025. Enhanced projects section with images, added EdQuiz project, added technology icons to skills
- June 25, 2025. Improved responsiveness across all screen sizes, optimized project card layouts, removed skills overview cards
- June 25, 2025. Added live links for projects and coding platform profiles
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```