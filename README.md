# Functional test automation

Funcional test automation project using Cypress.

## Technologies 

- Node.js
- JavaScript
- Cypress

## Setting up the environment 

1. Please install [Node.js](https://nodejs.org/en/download/).

2. Please install [Docker](https://www.docker.com/get-started).

3. Please type on the command prompt to install dependencies:
```
npm i 
```

## Project Infos:

- test failing 
- config files and view sizes and etc
- allure  /  cypress report
- webhooks to run pipeline
- api tests in 2 ways


## Execution

Please to open the UI test mode, use: 
```
npx cypress open
```

Please to run headless, use (it is necessary to close the UI test mode): 
```
npx cypress run
```

Please to generate an allure report, use (it is necessary to run headless before this):
```
npm run report
```

Please to run on GitHub Action use this link:

