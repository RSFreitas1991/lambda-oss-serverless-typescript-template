# Lambda OSS Serverless TypeScript Template

A comprehensive TypeScript template for AWS Lambda functions with ESLint, Prettier, and best practices configured out of the box.

## Features

- ✅ **TypeScript** - Type-safe development with modern ES2020 features
- ✅ **ESLint** - Code linting with TypeScript-specific rules
- ✅ **Prettier** - Consistent code formatting
- ✅ **VS Code Integration** - Pre-configured workspace settings
- ✅ **Build System** - Automated TypeScript compilation
- ✅ **Development Scripts** - Common development tasks automated

## Quick Start

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd lambda-oss-serverless-typescript-template

# Install dependencies
npm install
```

### Development

```bash
# Build the project
npm run build

# Build in watch mode for development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Code formatting
npm run format
npm run format:check

# Run all checks (type-check + lint + format)
npm run check
```

## Project Structure

```
├── src/                    # Source code
│   └── index.ts           # Main Lambda handler
├── dist/                  # Compiled JavaScript output
├── .vscode/               # VS Code workspace settings
│   └── settings.json      # Editor configuration
├── eslint.config.mjs      # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .prettierignore        # Prettier ignore patterns
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## Configuration

### TypeScript

The `tsconfig.json` is configured for AWS Lambda development with:

- **Target**: ES2020 for modern Node.js runtime
- **Module**: CommonJS for Lambda compatibility
- **Strict mode** enabled for type safety
- **Source maps** for debugging
- **Declaration files** for type definitions

### ESLint

ESLint is configured with:

- TypeScript-specific rules
- Prettier integration
- Node.js environment settings
- Recommended rule sets

### Prettier

Prettier is configured with:

- Single quotes
- Semicolons
- 2-space indentation
- 80 character line width
- Trailing commas (ES5)

### VS Code

Workspace settings include:

- Format on save
- Auto-fix ESLint issues on save
- Organize imports on save
- File exclusions for build artifacts

## Available Scripts

| Script                 | Description                           |
| ---------------------- | ------------------------------------- |
| `npm run build`        | Compile TypeScript to JavaScript      |
| `npm run build:watch`  | Compile in watch mode                 |
| `npm run dev`          | Alias for build:watch                 |
| `npm run clean`        | Remove build artifacts                |
| `npm run type-check`   | Type check without compilation        |
| `npm run lint`         | Run ESLint                            |
| `npm run lint:fix`     | Fix ESLint issues                     |
| `npm run format`       | Format code with Prettier             |
| `npm run format:check` | Check code formatting                 |
| `npm run check`        | Run all checks (type + lint + format) |

## Lambda Handler

The template includes a basic Lambda handler in `src/index.ts`:

```typescript
export const handler = async (
  event: any,
  context: any
): Promise<ApiResponse> => {
  // Your Lambda logic here
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda!',
      timestamp: new Date().toISOString(),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
```

## Deployment

This template focuses on the development setup. For deployment, consider using:

- **AWS SAM** - Serverless Application Model
- **Serverless Framework** - Multi-cloud serverless framework
- **AWS CDK** - Infrastructure as Code
- **Terraform** - Infrastructure as Code

## Best Practices

1. **Type Safety**: Use proper TypeScript types instead of `any`
2. **Error Handling**: Implement proper error handling in your Lambda functions
3. **Environment Variables**: Use environment variables for configuration
4. **Logging**: Use structured logging with AWS CloudWatch
5. **Testing**: Add unit and integration tests
6. **Security**: Follow AWS Lambda security best practices

## Contributing

1. Fork the repository
2. Create your feature branch
3. Run `npm run check` to ensure code quality
4. Commit your changes
5. Push to the branch
6. Create a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
