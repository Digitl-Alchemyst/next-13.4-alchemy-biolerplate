<h1><ul><b>
Next.js 13.4 BiolerPlate Base
</b></ul></h1>

###

            => Basic Biolerplate for Next.js projects using Typescript, Tailwind; with testing features from Jest & React Testing Library

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
    Backend<br>
        => <br>           
    Datamanagement<br>
        => <br>
    Authentication?<br>
        => <br>
</h4>

<h3>
<ul><b>How to use</b></ul>
</h3>

## Getting Started

### Install Dependencies

    npm i
### Start Dev Enviroment

    npm run dev

A README page runs on [http://localhost:3000](http://localhost:3000) in your browser. This will eventually contain more in depth documentation.

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