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

- Test: 'Should go through Featured Pokemnon'  failing because there is no Dewott on there
- Config files are separeted just for ilustration , on them you could create different runs based on envs or another configs like viewportWidth / viewportHeight and etc.
- We can create webhooks or so to run pipeline remotely
- Api tests in 2 different ways
- Tests results in a link but it could be on slack channel or so 


## Execution

Please to open the UI test mode, use: 
```
npx cypress open
```

Please to run headless, use (it is necessary to close the UI test mode): 
```
npx cypress run
```

Please to run on GitHub Action use this link:

- https://github.com/luxurypresence/QA_Challenge/actions then go to my branch francisco.cypress.lux after branch is merged


Test Results:

- https://dashboard.cypress.io/projects/inu11r/