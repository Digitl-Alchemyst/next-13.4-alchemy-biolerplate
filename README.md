## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


<h2>
Testing
</h2>

This project uses [Jest](https://github.com/jestjs/jest) and [React Testing Library](https://github.com/testing-library) for testing of components, libraries, utilties & application pages

## **Testing Dependencies**

    Jest 29.5.0
    Jest Enviroment JsDom 29.5.0
    Testing Library React 14.0.0
    Testing Library Jest-dom 5.16.5


#### `npm test`

Runs the `jest` command; which runs all staged tests

#### `npm test:watch`

Runs the `jest` command with `--watch` flag; which runs all tests in watch mode

#### `npm test:coverage`

Runs the `jest` command with `--coverage` flag; which indicates that test coverage information should be collected and reported in the output.