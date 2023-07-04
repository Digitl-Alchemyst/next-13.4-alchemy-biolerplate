<h1><ul><b>
Next.js 13.4 BiolerPlate Base
</b></ul></h1>

Basic Biolerplate for Next.js projects using Typescript, Tailwind; with testing features from Jest & React Testing Library

<br>

<h2><ul><b>Features</b></ul></h2>

<h4>
    Testing<br>
        => Jest <br>
        => React Testing Library <br>
    Commits<br>
        => <br>
    Imports<br>
        => @ = ./src <br>
        => # = ./public <br>
</h4>

<h3><ul><b>Project State</b></ul></h3>

Project version updated for Next.js 13.4.8 [This project will be maintained to remain current with Next.js @latest until otherwise noted.]
This is ready to use in its current state project is set up with Jest and React Testing Library for code testing, it has been configured to work with type script. Custom imports have been set up but are currently not working within the testing enviroment. Eslint settings still a WOP refining the configs for Jest & Testing Library as well as Typescript. Uses ESLint to parse to Typescript. Sets specific rules for for testing envrioment (files within the __tests__ directory or files with names ending in .spec.js, .test.js, .ts, .jsx, or .tsx). Lots of rule modifications I collected from a few other react projects. Configured Import Resolver to handle custom import settings.

To-Do<br>
Tailwind CSS Settings<br>
Add Husky & Commit Error Catching<br>

<h3><ul><b>How to use</b></ul></h3>

## Getting Started

### Install Dependencies

    npm i
### Start Dev Enviroment

    npm run dev

A README page runs on [http://localhost:3000](http://localhost:3000) in your browser. This will eventually contain more in depth documentation.[COMING_SOON!]

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font. As a result the SWR compiler must be used & babel cannot be used.


<h1>
Testing
</h1>

This project uses [Jest](https://github.com/jestjs/jest) and [React Testing Library](https://github.com/testing-library) for testing of components, libraries, utilties & application pages

## **Testing Dependencies**

    Jest 29.5.0
    Jest Enviroment JsDom 29.5.0
    Testing Library React 14.0.0
    Testing Library Jest-dom 5.16.5

### Install Dependancies

    npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom

## **Testing Commands**
#### `npm test`

Runs the `jest` command; which runs all staged tests

#### `npm test:watch`

Runs the `jest` command with `--watch` flag; which runs all tests in watch mode

#### `npm test:coverage`

Runs the `jest` command with `--coverage` flag; which indicates that test coverage information should be collected and reported in the output.
