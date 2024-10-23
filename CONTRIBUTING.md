# Contributing to VogueLens AI

First off, thank you for considering contributing to VogueLens AI! It's people like you that make VogueLens AI such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

1. **Use a clear and descriptive title**
2. **Describe the exact steps to reproduce the problem**
3. **Provide specific examples to demonstrate the steps**
4. **Describe the behavior you observed after following the steps**
5. **Explain which behavior you expected to see instead and why**
6. **Include screenshots and animated GIFs if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

1. **Use a clear and descriptive title**
2. **Provide a step-by-step description of the suggested enhancement**
3. **Provide specific examples to demonstrate the steps**
4. **Describe the current behavior and explain which behavior you expected to see instead**
5. **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Process

1. Clone the repository

````bash
git clone git@github.com:Alexandra2888/VogueLens-AI.git

2. Create a branch
```bash
git checkout -b feature/my-feature
# or
git checkout -b bugfix/my-bugfix
````

3. Make your changes and commit

```bash
git add .
git commit -m "feat: add some feature"
```

Follow our commit message conventions:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

4. Push to your fork

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

## Development Setup

1. Install dependencies

```bash
npm install
```

2. Set up environment variables

```bash
cp .env.example .env.local
```

3. Run development server

```bash
npm run dev
```

4. Run tests

```bash
npm run test        # Unit tests
npm run test:e2e    # E2E tests
```

## Style Guide

### JavaScript/TypeScript

- Use TypeScript for all new code
- Follow the existing code style
- Use ESLint and Prettier configurations provided
- Write self-documenting code with clear variable and function names

### CSS/Tailwind

- Use Tailwind CSS utility classes
- Follow the design system color palette
- Maintain dark mode support
- Keep responsive design in mind

### Testing

- Write tests for new features
- Maintain existing tests
- Aim for good coverage
- Test edge cases

## Git Branch Naming

- Feature branches: `feature/description`
- Bug fix branches: `bugfix/description`
- Documentation branches: `docs/description`
- Test branches: `test/description`

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation with details of changes if needed
3. The PR must pass all tests
4. The PR must be reviewed by at least one maintainer
5. Follow the PR template provided

## Review Process

Pull Requests are reviewed by:

1. Automated checks (tests, linting)
2. Code review by maintainers
3. Final approval by a maintainer

## Community

- Participate in issue discussions
- Help others in the community

## Questions?

Feel free to contact the maintainers if you have any questions.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
