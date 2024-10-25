# Next.js Enterprise Starter Template

A production-ready Next.js 15 starter template built with TypeScript, featuring robust CI/CD, Docker support, and comprehensive testing setup.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Jest** and **React Testing Library** for testing
- **ESLint** and **Prettier** for code quality
- **Husky** and **lint-staged** for Git hooks
- **Docker** support with multi-stage builds
- **GitHub Actions** for CI/CD
- **Vercel** deployment pipeline
- **Dependabot** for automated dependency updates
- **Atomic Design** principles for component organization

## 📁 Project Structure

```plaintext
src/
├── app/           # Next.js app router pages
├── components/    # React components (Atomic Design)
│   ├── atoms/     # Basic building blocks
│   ├── molecules/ # Simple combinations of atoms
│   ├── organisms/ # Complex combinations of molecules
│   ├── templates/ # Page-level component layouts
│   └── pages/     # Full page components
├── styles/       # Global styles
└── types/        # TypeScript type definitions
```

## 🛠️ Prerequisites

- Node.js 20.x
- Yarn package manager
- Docker (optional)

## 🚦 Getting Started

### Development Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd next-starter
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

### Using Docker

Development mode:
```bash
docker-compose up
```

Production build:
```bash
docker build -t next-starter --target production .
docker run -p 3000:3000 next-starter
```

## 🔨 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build production application |
| `yarn start` | Start production server |
| `yarn lint` | Run ESLint |
| `yarn lint:fix` | Fix ESLint errors |
| `yarn type-check` | Run TypeScript compiler check |
| `yarn test` | Run tests |
| `yarn test:watch` | Run tests in watch mode |
| `yarn validate` | Run all checks (lint, type-check, build) |
| `yarn format` | Format code with Prettier |
| `yarn format:check` | Check code formatting |

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

### 1. Validation Job
- Linting
- Type checking
- Testing
- Build verification

### 2. Deployment Job
- Automatic deployment to Vercel
- Environment-specific deployments:
  - `develop` branch → Development environment
  - `staging` branch → Staging environment
  - `main` branch → Production environment

## 🔒 Git Hooks

| Hook | Description |
|------|-------------|
| `pre-commit` | Runs lint-staged (ESLint + Prettier) |
| `commit-msg` | Validates commit messages against conventional commits |
| `pre-push` | Runs full validation suite |

## 📦 Docker Configuration

The project uses a multi-stage Docker build:

### Stages
- **development**: For local development with hot-reload
- **builder**: For creating optimized production builds
- **production**: Minimal production image with only necessary files

### Environment Variables
Each stage can be configured with appropriate environment variables:
```plaintext
NODE_ENV=development|staging|production
NEXT_PUBLIC_ENV=development|staging|production
```

## 🔄 Dependency Management

Dependabot is configured to:
- Check for npm updates weekly
- Create automated PR's with updates
- Add "dependencies" label to PRs
- Use conventional commit messages

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Commit changes following conventional commits
3. Push your branch and create a Pull Request
4. Ensure all checks pass
