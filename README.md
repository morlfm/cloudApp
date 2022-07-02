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
- 
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

- 

## Improvements

- We could also have fixtures separate by env because sometimes the test data could be specific for some cases
- To run in the pipeline we should create our own image to not load resources directly from docker 
- 

Test Results:

- https://dashboard.cypress.io/invitation/ed28413c-efca-4bbf-8e9b-29797db3a1d5
- https://dashboard.cypress.io/projects/4qkmxb/runs